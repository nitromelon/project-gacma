<script lang="ts">
    import {
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import LengthScroll from "$lib/components/length-scroll/LengthScroll.svelte";
    import Intro from "$lib/components/pages/home/Intro.svelte";
    import { array_remove_element } from "$lib/remove_element";
    import Menu from "$lib/components/pages/home/Menu.svelte";
    import Project from "$lib/components/pages/projects/Project.svelte";

    const fixed_slots: Snippet[] | undefined = getContext(LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD);
    const fixed_outside_slots: Snippet[] | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    let intro_scroll_progress = $state(0);

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
    <title>Tony's Portfolio</title>
</svelte:head>

{#snippet outside_root_section()}{/snippet}

{#snippet inside_root_section()}
    <Menu scroll_progress={intro_scroll_progress}></Menu>
{/snippet}

<div id="home">
    {#snippet home_section(progress: number)}
        <Intro {progress}></Intro>
    {/snippet}

    <!-- 8 -> 16 -->
    <LengthScroll
        slot={home_section}
        slowdown={16}
        bottom_limit={false}
        progress_callback={(progress) => (intro_scroll_progress = progress)}
    ></LengthScroll>
</div>

<div id="projects">
    {#snippet projects_section(progress: number)}
        <Project {progress}></Project>
    {/snippet}

    <LengthScroll slot={projects_section} slowdown={12} top_limit={false} bottom_limit={false}
    ></LengthScroll>
</div>

<style>
</style>
