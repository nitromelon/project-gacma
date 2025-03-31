<script lang="ts">
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import { setContext } from "svelte";
    import { CURRENT_PAGE_KEY, NUMBER_OF_PAGES } from "./papers/config";
    import { END_HEADER_RESIZE } from "./papers/timeline";
    import PaperBase from "./papers/PaperBase.svelte";
    import Paper1 from "./papers/Paper1.svelte";
    import Paper2 from "./papers/Paper2.svelte";
    import Paper3 from "./papers/Paper3.svelte";
    import Paper4 from "./papers/Paper4.svelte";
    import Paper5 from "./papers/Paper5.svelte";
    import Paper6 from "./papers/Paper6.svelte";
    import Paper7 from "./papers/Paper7.svelte";
    import Paper8 from "./papers/Paper8.svelte";
    import Paper9 from "./papers/Paper9.svelte";
    import Paper10 from "./papers/Paper10.svelte";
    import Paper11 from "./papers/Paper11.svelte";
    import Paper12 from "./papers/Paper12.svelte";
    import { fast_cubic_bezier } from "$lib/cubic_bezier/presets";
    import { normalized_range } from "$lib/normalized_limited_range/normalized";
    import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";

    const { progress }: { progress: number } = $props();
    const paper_list = [
        Paper1,
        Paper2,
        Paper3,
        Paper4,
        Paper5,
        Paper6,
        Paper7,
        Paper8,
        Paper9,
        Paper10,
        Paper11,
        Paper12,
    ];

    const VIDEO_TITLE = "[Gạc Ma: Vòng tròn bất tử]: Tình hình căng thẳng trước trận Gạc Ma";
    const END_PAPER = 0.975;
    const END_VIDEO_WRAPPER_UP = 0.9875;

    const paper_progress = $derived(limited_range(progress, END_HEADER_RESIZE, END_PAPER));
    const video_progress = $derived(
        fast_cubic_bezier(limited_range(progress, END_PAPER, END_VIDEO_WRAPPER_UP))[1],
    );
    const current_page = $derived(NUMBER_OF_PAGES * paper_progress);

    const video_scale_value = $derived(normalized_range(video_progress, 0.9, 1));
    const reversed_video_scale_value = $derived(normalized_range(video_progress, 1, 0.9));
    const video_translate_value = $derived(normalized_range(video_progress, -75, -100));
    const reversed_video_translate_value = $derived(normalized_range(video_progress, 0, -25));
    const video_blur_value = $derived(normalized_range(video_progress, 0, 10));

    setContext(CURRENT_PAGE_KEY, () => current_page);
</script>

<section
    class="newspaper-section stack-children"
    style:transform="translateY({reversed_video_translate_value}vh) scale({reversed_video_scale_value})"
    style:opacity={1 - video_progress}
    style:filter="blur({video_blur_value}px)"
>
    {#each paper_list as paper, index}
        <PaperBase {progress} Paper={paper} this_page={index}></PaperBase>
    {/each}
</section>

<section
    class="video-wrapper-section stack-children"
    style:transform="translateY({video_translate_value}%) scale({video_scale_value})"
    style:opacity={video_progress}
    style:filter="blur({10 - video_blur_value}px)"
    style:visibility={video_progress === 0 ? "hidden" : "visible"}
>
    <div class="video-wrapper">
        <p class="title">Video | {VIDEO_TITLE}</p>
        <YtbFrame title={VIDEO_TITLE} id={"r_t5t7G1YpE"}></YtbFrame>
    </div>
</section>

<style>
    .newspaper-section,
    .video-wrapper-section {
        will-change: opacity, transform, visibility;
        transition:
            transform var(--scroll-transition-bezier),
            opacity var(--scroll-transition-bezier),
            visibility var(--scroll-transition-bezier);
        transform-origin: top center;
    }

    .newspaper-section {
        position: relative;
        height: 100vh;

        align-items: center;
        justify-items: center;
    }

    .video-wrapper-section {
        transform: translateY(-100%);
        height: 100vh;
        background-color: var(--tan);
        display: flex;
        justify-content: center;
        align-items: center;

        > .video-wrapper {
            position: relative;
            height: 64%;
            aspect-ratio: 16/9;
            border: 1px solid black;

            > .title {
                position: absolute;
                transform: translateY(calc(-100% - 11px));
                font-family: var(--vl-regular);
                font-weight: 600;
                font-size: 11px;
            }
        }
    }
</style>
