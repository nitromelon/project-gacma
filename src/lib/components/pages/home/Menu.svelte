<script lang="ts">
    import {
        type SmoothScrollProperties,
        SMOOTH_SCROLL_PROPERTIES_KEYWORD,
    } from "$lib/components/smooth-scroll/smooth-scroll";
    import { fast_cubic_bezier } from "$lib/map_linear_to_curve/presets";
    import { limited_range_max } from "$lib/normalized_limited_range/limited";
    import { getContext } from "svelte";

    const { scroll_progress }: { scroll_progress: number } = $props();
    const smooth_scroll_properties: SmoothScrollProperties | undefined = getContext(
        SMOOTH_SCROLL_PROPERTIES_KEYWORD,
    );

    const END_PROGRESS = 0.0625;
    const items = ["home", "projects", "skills", "contact"];
    // const items = ["home", "projects"];
    const items_max_index = items.length - 1;
    const progress = $derived(fast_cubic_bezier(limited_range_max(scroll_progress, END_PROGRESS)));

    const enabled_bigger_font = $derived.by(() => {
        const scroll_up = smooth_scroll_properties?.scroll_up ?? false;
        return scroll_up && progress[0] === 1 && progress[1] === 1;
    });
</script>

<header>
    <div class="menu-section">
        {#each items as item, index}
            {@const reverse_index = items_max_index - index}
            {@const translate_x = reverse_index * -100 * progress[0]}
            {@const translate_y = index * 100 * (1 - progress[1])}
            {@const transition_duration = Math.log(reverse_index * 2 + 2)}
            {@const bigger_font = enabled_bigger_font ? 0 : 1}

            <div
                class="link-wrapper"
                style:transform="translate3d({translate_x}%, {translate_y}%, 0)"
                style:transition-duration="{transition_duration}s"
            >
                <!-- <div class="space" style:flex={progress[0] / 2}></div> -->
                <a
                    href="#{item}"
                    style:font-size="{2 - (progress[0] / 2) * bigger_font}em"
                    style:transition-timing-function={enabled_bigger_font
                        ? "cubic-bezier(0,1,1,1)"
                        : ""}
                    style:transform="translate3d({50 * (1 - progress[0])}%, 0, 0)"
                >
                    <span class="line"></span>
                    <span>{item}</span>
                </a>
            </div>
        {/each}

        <!-- <p>A website handcrafted with love from 2025</p> -->
    </div>
</header>

<style>
    header {
        position: relative;
        height: 100%;
        width: 100%;
        pointer-events: none;

        /* section cần có background */
        mix-blend-mode: difference;

        * {
            /* outline: 1px solid white; */
            color: white;
        }

        > .menu-section {
            position: absolute;
            left: 50%;
            width: 100%;
            transform: translate3d(-50%, 0, 0);
            padding-top: 2em;

            display: grid;
            grid-template-columns: repeat(4, 1fr);

            > .link-wrapper {
                grid-area: 1/4;
                display: flex;
                transition-timing-function: var(--scroll-transition-timing-function);
                justify-content: center;

                > a {
                    pointer-events: all;
                    font-size: 2em;
                    color: white;
                    display: flex;
                    align-items: center;
                    transition: font-size var(--scroll-transition-bezier);
                    font-family: "Prata", sans-serif;

                    > .line {
                        height: 0;
                        width: 0;
                        margin-right: 0;
                        background-color: white;
                        border-radius: 2px;
                        transition: 0.3s cubic-bezier(1, 0, 0, 1);
                    }
                }

                /* > .space {
                    transition: flex var(--scroll-transition-bezier);
                } */

                @media (hover: hover) and (pointer: fine) {
                    &:hover {
                        > a > .line {
                            height: 1px;
                            width: 32px;
                            margin-right: 8px;
                        }
                    }
                }

                &:active {
                    > a > .line {
                        height: 0;
                        width: 0;
                        margin-right: 0;
                        transition: 0.3s cubic-bezier(0, 1, 0, 1);
                    }
                }
            }
        }
    }
</style>
