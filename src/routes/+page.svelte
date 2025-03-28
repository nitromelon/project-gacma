<script lang="ts">
    import {
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import { array_remove_element } from "$lib/remove_element";
    import LengthScroll from "$lib/components/length-scroll/LengthScroll.svelte";
    import Intro from "$lib/components/pages/home/intro/Intro.svelte";
    import Newspaper from "$lib/components/pages/home/newspaper/Newspaper.svelte";

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
    <title>Gạc Ma: Vòng tròn bất tử</title>
</svelte:head>

{#snippet outside_root_section()}{/snippet}

{#snippet inside_root_section()}{/snippet}

<div class="intro-heading-wrapper stack-children">
    <h1>GẠC MA</h1>
    <p>vòng tròn bất tử</p>
    <div class="background-patch"></div>
</div>

{#snippet intro(progress: number)}
    <Intro {progress}></Intro>
{/snippet}

<div class="intro-wrapper">
    <LengthScroll slot={intro} slowdown={6} bottom_limit={false}></LengthScroll>
</div>

{#snippet newspaper(progress: number)}
    <Newspaper {progress}></Newspaper>
{/snippet}

<LengthScroll slot={newspaper} slowdown={24} top_limit={false} bottom_limit={false}></LengthScroll>

<p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quo autem dicta nisi nobis,
    laudantium recusandae? Deleniti eos quia expedita aliquam eaque, quas dignissimos eius earum ex
    dolore esse voluptate.
</p>

<style>
    .intro-heading-wrapper {
        position: relative;
        align-items: center;
        justify-items: center;
        background-color: var(--tan);

        > h1 {
            color: var(--red);
            font-size: 216px;
            font-family: var(--paz-time);
        }

        > p {
            color: var(--blue);
            font-size: 54px;
            font-family: var(--huxley-max);
            -webkit-text-stroke: 1px var(--tan);
            transform: translateY(12px);
        }

        > .background-patch {
            position: absolute;
            top: 100%;
            height: 120px;
            width: 100%;
            background-color: var(--tan);
        }
    }

    .intro-wrapper {
        --intro-wrapper-offset-top: 120px;
        margin-top: calc(var(--intro-wrapper-offset-top) * -1);
    }
</style>
