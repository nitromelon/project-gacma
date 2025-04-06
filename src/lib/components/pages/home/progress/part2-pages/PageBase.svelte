<script lang="ts">
    import {
        limited_range,
        limited_range_max,
        limited_range_min,
    } from "$lib/normalized_limited_range/limited";
    import { normalized_range } from "$lib/normalized_limited_range/normalized";
    import type { Snippet } from "svelte";

    type Props = {
        progress: number;
        place: string;
        date: string;
        times?: [number, number];
        content: Snippet;
    };

    const { progress, place, date, content, times }: Props = $props();

    let content_wrapper_height = $state(0);
    let content_height = $state(0);

    const END_FADE_IN = 0.025;
    const BEGIN_FADE_OUT = 0.975;
    const fade_in_progress = $derived(limited_range_max(progress, END_FADE_IN));
    const real_progress = $derived(limited_range(progress, END_FADE_IN, BEGIN_FADE_OUT));
    const fade_out_progress = $derived(limited_range_min(progress, BEGIN_FADE_OUT));

    const fade_in_translate_value = $derived(normalized_range(fade_in_progress, 32, 0));
    const fade_out_translate_value = $derived(normalized_range(fade_out_progress, 0, -32));

    const background_text_translate_value = $derived(normalized_range(real_progress, 50, -50));
    const content_translate_value = $derived(
        Math.max(0, content_height - content_wrapper_height) * real_progress,
    );

    function times_to_string(times?: [number, number]): string {
        if (times === undefined) return "-:--";
        const raw_minute = Math.floor(normalized_range(real_progress, times[0], times[1]));
        return `${Math.floor(raw_minute / 60)}:${(raw_minute % 60).toString().padStart(2, "0")}`;
    }
</script>

<div
    class="page"
    style:opacity={fade_in_progress - fade_out_progress}
    style:transform="translateY({fade_in_translate_value + fade_out_translate_value}px)"
>
    <div class="text-section-wrapper">
        <div
            class="background-text-section-wrapper"
            style:transform="translateY({background_text_translate_value}px)"
        >
            <p class="sub-text">{place}</p>
            <p class="sub-text">{date}</p>
            <p class="large-text">{times_to_string(times)}</p>
        </div>

        <div class="content-wrapper" bind:clientHeight={content_wrapper_height}>
            <div
                class="content"
                bind:clientHeight={content_height}
                style:transform="translateY({-content_translate_value}px)"
            >
                <div class="padding-placeholder"></div>
                {@render content()}
                <div class="padding-placeholder"></div>
            </div>
        </div>
    </div>
</div>

<style>
    .page {
        height: 100%;
        width: 100%;
        contain: strict;
        padding: 64px;
        will-change: transform, opacity;
        transition:
            transform var(--scroll-transition-bezier),
            opacity 0.5s var(--scroll-transition-timing-function);
    }

    .text-section-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;

        .background-text-section-wrapper {
            align-self: center;
            width: 360px;
            font-family: var(--vl-regular);
            color: #a79f91;
            will-change: transform;
            transition: transform var(--scroll-transition-bezier);

            > .large-text {
                font-size: 128px;
                white-space: nowrap;
            }

            > .sub-text {
                font-size: 24px;
                margin-left: 12px;
                line-height: 1.25;
            }
        }

        > .content-wrapper {
            max-width: 720px;
            align-content: center;
            width: 100%;
            contain: strict;

            > .content {
                height: fit-content;
                will-change: transform;
                transition: transform var(--scroll-transition-bezier);

                > .padding-placeholder {
                    height: 32px;
                }
            }
        }
    }
</style>
