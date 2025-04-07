<script lang="ts">
    import type { Snippet } from "svelte";
    import {
        SMOOTH_SCROLL_PROPERTIES_KEYWORD,
        type SmoothScrollProperties,
    } from "$lib/components/smooth-scroll/smooth-scroll";
    import { getContext } from "svelte";
    import type { SvelteSet } from "svelte/reactivity";

    const smooth_scroll_properties: SmoothScrollProperties | undefined = getContext(
        SMOOTH_SCROLL_PROPERTIES_KEYWORD,
    );

    const { slot, fixed_slots }: { slot: Snippet; fixed_slots: SvelteSet<Snippet> } = $props();
    let content_height = $state(0);
</script>

<div class="placeholder smooth-scroll-configuration">
    <div class="empty" style:height="{content_height}px"></div>
    <div
        class="content"
        bind:offsetHeight={content_height}
        style:transform="translate3d(0, -{smooth_scroll_properties?.scroll_top ?? 0}px, 0)"
    >
        {@render slot()}
    </div>

    {#each fixed_slots as slot}
        {@render slot()}
    {/each}
</div>

<style>
    .placeholder {
        position: sticky;
        top: 0px;
        height: 100%;
        width: 100%;
        background-color: white;

        > .empty {
            position: absolute;
            top: 0px;
            width: 1px;
            visibility: hidden;
        }

        > .content {
            position: absolute;
            top: 0px;
            height: fit-content;
            width: 100%;
        }

        @media (hover: hover) {
            > .content {
                transition: var(--scroll-transform-transition);
            }
        }
    }
</style>
