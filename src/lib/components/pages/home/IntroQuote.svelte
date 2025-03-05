<script lang="ts">
    import { onMount } from "svelte";
    import IntroTimeline from "./IntroTimeline.svelte";
    import {
        limited_range,
        limited_range_max,
        limited_range_min,
    } from "$lib/normalized_limited_range/limited";
    import { fast_cubic_bezier } from "$lib/map_linear_to_curve/presets";

    // prettier-ignore
    const typewritter_template: [string, boolean][] = [
        ["I",false],["t",false],["'",false],["s",false],[" ",false],
        ["n",false],["o",false],["t",false],[" ",false],
        ["a",false],["b",false],["o",false],["u",false],["t",false],[" ",false],
        ["t",false],["h",false],["e",false],[" ",false],
        ["d",false],["e",false],["s",false],["t",false],["i",false],["n",false],["a",false],["t",false],["i",false],["o",false],["n",false],
        [",",false],[" ",false],
        ["i",false],["t",false],["'",false],["s",false],[" ",false],
        ["a",false],["b",false],["o",false],["u",false],["t",false],[" ",false],
        ["t",false],["h",false],["e",false],[" ",false],
        ["j",true],["o",true],["u",true],["r",true],["n",true],["e",true],["y",true],
        [".",false]
    ];

    const {
        progress,
        typewritter_callback,
    }: {
        progress: number;
        typewritter_callback: (progress: number) => void;
    } = $props();

    const BEGIN_PROCESS = 0.125;
    const END_QUOTE_PROGRESS = 0.5;

    const END_JOURNEY_PROGRESS = 0.6;
    const END_TIMELINE_PORGRESS = 0.975;

    const normalized_progress = $derived(
        limited_range(progress, BEGIN_PROCESS, END_QUOTE_PROGRESS),
    );

    const typewritter_progress = $derived(
        fast_cubic_bezier(limited_range_max(normalized_progress, 0.5))[1],
    );

    const opacity_progress = $derived(limited_range_min(normalized_progress, 0.5));
    const typewritter_current_index = $derived(typewritter_progress * 55 - 1);

    const journey_bottom_progress = $derived(
        fast_cubic_bezier(limited_range(progress, END_QUOTE_PROGRESS, END_JOURNEY_PROGRESS))[1],
    );

    const timeline_progress = $derived(
        limited_range(progress, END_JOURNEY_PROGRESS, END_TIMELINE_PORGRESS),
    );

    let vertical_bar_blink = $state(true);

    onMount(() => {
        let blink_interval = setInterval(() => {
            vertical_bar_blink =
                !vertical_bar_blink && typewritter_progress !== 0 && opacity_progress !== 1;
        }, 500);

        return () => {
            clearInterval(blink_interval);
        };
    });

    $effect(() => {
        typewritter_callback(typewritter_progress);
    });
</script>

<!-- rewrite using css display none? -->
<div class="paragraph" style:transform="translate3d(-{journey_bottom_progress * 100}%, 0, 0)">
    {#each typewritter_template as [char, special], index}
        {@const speedup = (index + 1) / 55}
        {@const finalized_opacity =
            typewritter_progress === 1 ? (1 - opacity_progress) * speedup : 1}

        {@const will_show = index <= typewritter_current_index}
        {@const will_hide = opacity_progress >= speedup && !special}

        {#if will_show !== will_hide}
            {#if char === " "}
                &nbsp;
            {:else if special}
                <span style:color="red" style:opacity={1 - journey_bottom_progress}>
                    {char}
                </span>
            {:else}
                <span style:opacity={finalized_opacity}>
                    {char}
                </span>
            {/if}
        {/if}
    {/each}
</div>

<div
    class="vertical-bar"
    style:visibility={vertical_bar_blink ? "visible" : "hidden"}
    style:order={typewritter_progress === 1 ? "-1" : ""}
></div>

<div class="flex-space" style:flex={journey_bottom_progress}>
    <div class="timeline-wrapper stack-children" style:width="{journey_bottom_progress * 100}%">
        <IntroTimeline progress={timeline_progress}></IntroTimeline>
    </div>
</div>

<style>
    .paragraph {
        position: relative;
        font-size: 3em;
        display: flex;
        align-items: center;
        transition: var(--scroll-transition-bezier);
        content: strict;

        > span {
            font-family: "Quicksand", sans-serif;
            transition: var(--scroll-transition-bezier);
        }
    }

    .vertical-bar {
        height: 3em;
        width: 1px;
        background-color: black;
    }

    .flex-space {
        transition: var(--scroll-transition-bezier);
        height: 100%;
        will-change: flex;

        display: flex;
        justify-content: flex-end;

        > .timeline-wrapper {
            position: absolute;
            height: 100%;
            transition: width var(--scroll-transition-bezier);
            contain: strict;
            align-items: center;
            justify-items: center;
            background-color: white;
        }
    }
</style>
