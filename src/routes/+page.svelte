<script lang="ts">
    import {
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import { array_remove_element } from "$lib/remove_element";
    import LengthScroll from "$lib/components/length-scroll/LengthScroll.svelte";

    const fixed_slots: Snippet[] | undefined = getContext(LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD);
    const fixed_outside_slots: Snippet[] | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    fixed_slots?.push(inside_root_section);
    fixed_outside_slots?.push(outside_root_section);

    onMount(() => {
        if (fixed_slots === undefined || fixed_outside_slots === undefined) {
            return;
        }

        return () => {
            array_remove_element(fixed_slots, inside_root_section);
            array_remove_element(fixed_outside_slots, outside_root_section);
        };
    });
</script>

<svelte:head>
    <title>Project</title>
</svelte:head>

{#snippet outside_root_section()}{/snippet}

{#snippet inside_root_section()}{/snippet}

{#snippet test()}
    <p class="test2">Placeholder</p>
{/snippet}

<LengthScroll slot={test} slowdown={2} bottom_limit={false}></LengthScroll>
{#each Array(100)}
    <p>Hi</p>
{/each}

<style>
    .test2 {
        height: 100vh;
    }
</style>
