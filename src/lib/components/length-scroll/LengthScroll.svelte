<script lang="ts">
    import { getContext, type Snippet } from "svelte";
    import {
        SMOOTH_SCROLL_PROPERTIES_KEYWORD,
        type SmoothScrollProperties,
    } from "../smooth-scroll/smooth-scroll";

    const smooth_scroll_properties: SmoothScrollProperties | undefined = getContext(
        SMOOTH_SCROLL_PROPERTIES_KEYWORD,
    );

    const {
        slot,
        // Must larger than 1
        slowdown,
        top_limit = true,
        bottom_limit = true,
        progress_callback,
    }: {
        slot: Snippet<[progress: number]>;
        slowdown: number;
        top_limit?: boolean;
        bottom_limit?: boolean;
        progress_callback?: (progress: number) => void;
    } = $props();

    let wrapper: HTMLDivElement | undefined;
    let present_height = $state(0);

    // Errors: Uncaught ResizeObserver loop completed with undelivered notifications.
    const wrapper_height = $derived(Math.max(1080, present_height) * slowdown);

    // Side effect: lag behind
    let present_transform_value = $state(0);
    let normalized_progress = $state(0);

    $effect(() => {
        if (smooth_scroll_properties === undefined || wrapper === undefined) {
            return;
        }

        const wrapper_top = wrapper.offsetTop;
        const wrapper_bottom = wrapper_top + wrapper_height;
        const scroll_top = smooth_scroll_properties.scroll_top;
        const scroll_bottom = smooth_scroll_properties.scroll_bottom;
        const present_max_top_value = wrapper_height - present_height;
        const wrapper_under_viewport = wrapper_top > scroll_bottom;
        const wrapper_above_viewport = wrapper_bottom < scroll_top;

        if (wrapper_under_viewport || wrapper_above_viewport) {
            return;
        }

        if (top_limit && scroll_top <= wrapper_top) {
            normalized_progress = 0;
            present_transform_value = 0;
        } else if (bottom_limit && scroll_bottom >= wrapper_bottom) {
            normalized_progress = 1;
            present_transform_value = present_max_top_value;
        } else {
            let current_position = scroll_top - wrapper_top;
            normalized_progress = current_position / present_max_top_value;
            present_transform_value = current_position;
        }

        if (progress_callback !== undefined) {
            progress_callback(normalized_progress);
        }
    });
</script>

<div class="wrapper" style:height="{wrapper_height}px" bind:this={wrapper}>
    <div
        class="present"
        style:transform="translate3d(0,{present_transform_value}px,0)"
        bind:clientHeight={present_height}
    >
        {@render slot(normalized_progress)}
    </div>
</div>

<style>
    .wrapper {
        width: 100%;
        contain: strict;
        overflow: hidden;
    }

    .present {
        height: fit-content;
        width: 100%;

        /* hack to get gpu rendering */
        perspective: 0;
    }

    @media (hover: hover) {
        .present {
            transition: var(--scroll-transform-transition);
        }
    }
</style>
