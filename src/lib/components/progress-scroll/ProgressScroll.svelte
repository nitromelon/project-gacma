<script lang="ts">
    import type { Snippet } from "svelte";

    const { progress, content }: { progress: number; content: Snippet } = $props();

    let outer_height = $state(0);
    let inner_height = $state(0);

    const offset = $derived(Math.max(inner_height - outer_height, 0) * progress);
</script>

<div class="outer-wrapper" bind:clientHeight={outer_height}>
    <div
        class="inner-wrapper"
        bind:clientHeight={inner_height}
        style:transform="translateY({-offset}px)"
    >
        {@render content()}
    </div>
</div>

<style>
    .outer-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        contain: strict;

        > .inner-wrapper {
            height: fit-content;
            width: 100%;
            will-change: transform;
            transition: var(--scroll-transform-transition);
        }
    }
</style>
