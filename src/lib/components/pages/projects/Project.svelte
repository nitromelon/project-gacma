<script lang="ts">
    import { limited_range, limited_range_max } from "$lib/normalized_limited_range/limited";
    import { normalized_range } from "$lib/normalized_limited_range/normalized";

    const { progress }: { progress: number } = $props();

    const preview_text = [
        ["Projects", "(Interlude)", "./projects-preview-0.png"],
        ["Prelude!", "2024", "./projects-preview-0.png"],
        ["Unholy Massacre", "2024", "./projects-preview-1.jpg"],
        ["SKUF", "2024", "./projects-preview-2.jpg"],
        ["Seek The Truth", "2024", "./projects-preview-3.jpg"],
        ["Groomed to Death", "2024", "./projects-preview-4.jpg"],
        ["Fragments of the Deep", "2024", "./projects-preview-5.jpg"],
    ];

    const END_PREVIEW_PROGRESS = 0.25;
    const BEGIN_SPACE_RISE_UP_PROGRESS = 0.4;
    const preview_progress = $derived(limited_range_max(progress, END_PREVIEW_PROGRESS));
    const space_rise_up = $derived(
        limited_range(progress, END_PREVIEW_PROGRESS + 0.05, BEGIN_SPACE_RISE_UP_PROGRESS),
    );
    const scale_out_value = $derived(normalized_range(preview_progress, 0.75, 0.5));

    const preview_text_current_index = $derived(
        Math.floor(normalized_range(preview_progress, 0, 6)),
    );

    const intro_description_text = $derived.by(() => {
        const header = preview_text[preview_text_current_index][0];
        let output = "";

        if (header !== "Projects") {
            output += `${header}, `;
        }

        output += preview_text[preview_text_current_index][1];
        return output;
    });
</script>

<section class="project-section">
    <div
        class="fake-home-border"
        style:transform="translate3d(-50%, -50%, 0) scale({scale_out_value})"
    >
        <p class="header">
            <span class="flex" style:flex={preview_progress}></span>
            <span class="content" style:opacity={preview_progress > 0 ? 1 : 0}>
                Loading {Math.floor(preview_progress * 100)}%
            </span>
        </p>
        <div
            class="background"
            style:--background-image-url="url('{preview_text[preview_text_current_index][2]}')"
        >
            <!-- Maybe add noise in here? -->
            <h1 style:font-size="{100 / preview_text[preview_text_current_index][0].length + 4}vw">
                {preview_text[preview_text_current_index][0]}
            </h1>
        </div>
        <p class="description">{intro_description_text}</p>
    </div>
    <div class="space-wrapper" style:opacity={space_rise_up}></div>
</section>

<style>
    .project-section {
        position: relative;
        height: 100vh;
        width: 100%;
        contain: strict;
    }

    .fake-home-border {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        background-size: cover !important;
        contain: strict;

        transition: var(--scroll-transform-transition);

        > * {
            grid-area: 1/1;
        }

        > .header,
        .description {
            font-family: "Quicksand", sans-serif;
            font-size: 1.5em;
        }

        > .header {
            align-self: flex-start;
            margin-top: calc(2em / 1.5);
            display: flex;
            align-items: center;
            /* justify-content: center; */
            width: 100%;

            > .flex {
                position: relative;
                transition: var(--scroll-transition-bezier);
                will-change: flex;
                width: 100%;
                height: 1px;

                &::before {
                    display: block;
                    position: relative;
                    content: "";
                    width: calc(100% - 1em);
                    height: 100%;
                    background-color: black;
                }
            }

            > .content {
                transition: var(--scroll-transition-bezier);
            }
        }

        > .description {
            align-self: flex-end;
            margin-bottom: calc(2em / 1.5);
        }

        > .background {
            position: relative;
            width: 100%;
            aspect-ratio: 21 / 9;
            background: var(--background-image-url) no-repeat center;
            background-blend-mode: multiply;
            background-size: cover !important;
            contain: strict;
            border: 2px solid black;
            image-rendering: pixelated;
            transition: 1s cubic-bezier(0, 1, 0, 1);

            > h1 {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: "Abril Fatface", serif;
                text-wrap: balance;
                text-align: center;

                background: inherit;
                background-clip: text;
                color: transparent;
                filter: contrast(100) sepia(1) grayscale(1) invert(1);
                font-style: italic;
                transition: 1s cubic-bezier(0, 1, 0, 1);
                white-space: nowrap;
            }
        }
    }

    .space-wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        transition: var(--scroll-transition-bezier);
    }
</style>
