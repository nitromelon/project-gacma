<script lang="ts">
    import "the-new-css-reset/css/reset.css";
    import "$lib/styles/global-config.css";
    import SmoothScroll from "$lib/components/smooth-scroll/smooth-scroll.svelte";
    import {
        SMOOTH_SCROLL_PROPERTIES_KEYWORD,
        type SmoothScrollProperties,
    } from "$lib/components/smooth-scroll/smooth-scroll";
    import { setContext, type Snippet } from "svelte";
    import {
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    } from "$lib/components/layout/layout";
    import { SvelteSet } from "svelte/reactivity";

    const { children } = $props();

    let inside_root_slots: SvelteSet<Snippet> = new SvelteSet();
    let outside_root_slots: SvelteSet<Snippet> = new SvelteSet();
    let root: HTMLDivElement | undefined;

    let scroll_properties: SmoothScrollProperties = $state({
        viewport_height: 0,
        viewport_width: 0,
        scroll_top: 0,
        scroll_bottom: 0,
        scroll_height: 0,
        scroll_up: false,
    });

    // Todo: get frame -> smooth the scroll top
    function onscroll() {
        if (root === undefined) return;
        const { scrollTop, scrollHeight } = root;
        scroll_properties.scroll_up = scrollTop < scroll_properties.scroll_top;
        scroll_properties.scroll_top = scrollTop;
        scroll_properties.scroll_bottom = scrollTop + scroll_properties.viewport_height;
        scroll_properties.scroll_height = scrollHeight;
    }

    setContext(SMOOTH_SCROLL_PROPERTIES_KEYWORD, scroll_properties);
    setContext(LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD, inside_root_slots);
    setContext(LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD, outside_root_slots);
</script>

<div
    class="root color-preset font-preset"
    {onscroll}
    bind:this={root}
    bind:clientHeight={scroll_properties.viewport_height}
    bind:clientWidth={scroll_properties.viewport_width}
>
    <SmoothScroll slot={children} fixed_slots={inside_root_slots}></SmoothScroll>
</div>

{#each outside_root_slots as slot}
    {@render slot()}
{/each}

<style>
    .root {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        contain: strict;
        scroll-behavior: smooth;

        display: flex;
        justify-content: center;
    }
</style>
