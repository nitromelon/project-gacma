<script lang="ts">
    import { cubic_bezier } from "$lib/map_linear_to_curve";
    import { fast_cubic_bezier } from "$lib/map_linear_to_curve/presets";
    import { minmax } from "$lib/minmax";
    import { limited_range_max, limited_range_min } from "$lib/normalized_limited_range/limited";
    import { normalized_range } from "$lib/normalized_limited_range/normalized";
    import IntroQuote from "./IntroQuote.svelte";
    import IntroSvg from "./IntroSvg.svelte";

    const HERO_TEXT_SECTION_END_PROGRESS = 0.125;
    const BEGIN_SCALE_OUT_PROGRESS = 0.975;

    const sub_items: string[] = [
        "Software Engineer",
        "AR/VR Researcher",
        "Gameplay, UI/UX Programmer",
        "Graphics Enthusiast",
    ];
    const { progress }: { progress: number } = $props();

    let typewritter_progress = $state(0);

    const hero_text_section_progress = $derived(
        normalized_range(limited_range_max(progress, HERO_TEXT_SECTION_END_PROGRESS), 0, 100),
    );

    const scale_out_progress = $derived(
        fast_cubic_bezier(limited_range_min(progress, BEGIN_SCALE_OUT_PROGRESS))[0],
    );

    const scale_section = $derived(1 - scale_out_progress / 4);
</script>

<!-- Sketch

I, Tony đằng sau, căn giữa, chữ nhỏ hơn, đứng trên đỉnh đầu.
Phía trước là ảnh crop từ anh tú.
Ảnh tú mờ dần (hoặc layer các ảnh chạy đến hết), chữ  I, Tony dần ra giữa 2 hướng, to dần.
Chữ lần lượt đi lên phía trên, + handwritten chữ bớt nét dần

mobile:
I bên trái
bên phải: Minh tú đứng trên, Tony đứng dưới

-->

<section style:transform="scale3d({scale_section}, {scale_section}, {scale_section})">
    <div class="hero-text-section">
        {#each Array(4) as _, index}
            {@const hero_text_processed_translate_y =
                hero_text_section_progress * Math.log(3 - index + Math.E)}
            <div class="styled-column stack-children">
                <div class="wrapper">
                    <h1
                        style:left="{index * -100 + 200}%"
                        style:transform="translate3d(-50%,{-hero_text_processed_translate_y}%,0)"
                    >
                        I, Tony
                    </h1>
                </div>

                <p class="sub-item">
                    {#each sub_items[index] as char}
                        {@const triggered_time = index / 4}
                        {@const random_x = (Math.random() * 2 - 1) * 50}
                        {@const random_y = (Math.random() * 2 - 1) * 50}
                        {@const should_trigger =
                            typewritter_progress > triggered_time ? typewritter_progress : 0}

                        {#if char === " "}
                            &nbsp;
                        {:else}
                            <span
                                class="sub-item-chars"
                                style:transform="translate3d({random_x * should_trigger}vw, {random_y *
                                    should_trigger}vh, 0) scale({should_trigger + 1})"
                                style:opacity={1 - typewritter_progress}
                            >
                                {char}
                            </span>
                        {/if}
                    {/each}
                </p>

                {#if index === 2}
                    <div class="handwritten-text">
                        <IntroSvg {progress}></IntroSvg>
                    </div>
                {/if}
            </div>
        {/each}
    </div>

    <div class="quote-section">
        <IntroQuote
            {progress}
            typewritter_callback={(progress) => {
                typewritter_progress = progress;
            }}
        ></IntroQuote>
    </div>
</section>

<style>
    section {
        position: relative;
        height: 100vh;
        width: 100%;
        outline: 1px solid black;
        contain: strict;
        transition: var(--scroll-transition-bezier);

        > .hero-text-section {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-template-rows: 1fr;

            > .styled-column {
                position: relative;

                > .wrapper {
                    position: relative;
                    overflow: hidden;

                    > h1 {
                        position: relative;
                        width: fit-content;
                        white-space: nowrap;

                        font-family: "Abril Fatface", serif;
                        font-size: 28vw;

                        color: black;
                        -webkit-text-stroke: 2px black;

                        transition: var(--scroll-transform-transition);
                    }
                }

                > .sub-item {
                    align-self: self-end;
                    display: flex;
                    justify-content: center;
                    font-family: "Quicksand", sans-serif;
                    backface-visibility: hidden;
                    perspective: 0;

                    > .sub-item-chars {
                        transition: var(--scroll-transition-bezier);
                    }
                }

                > .handwritten-text {
                    justify-self: center;
                    align-self: center;
                    z-index: 1;
                    pointer-events: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform: translate3d(0, 3em, 0);
                    width: 175%;
                    height: 100%;
                }

                &:nth-child(3) {
                    > .wrapper > h1 {
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
        }

        > .quote-section {
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            contain: strict;
            transition: var(--scroll-transition-bezier);
            /* margin: 0 2em; */
        }
    }
</style>
