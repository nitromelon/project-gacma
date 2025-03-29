<script lang="ts">
    import { getContext, type Component } from "svelte";
    import { get_status_opacity, number_to_status, PaperStatus } from "./status";
    import { CURRENT_PAGE_KEY } from "./config";
    import { minmax } from "$lib/minmax";
    import NewspaperBackground from "$lib/assets/images/home/newspaper/background.png";

    type Props = {
        progress: number;
        Paper: Component<any>;
        this_page: number;
    };

    const { progress, Paper, this_page }: Props = $props();
    const current_page: () => number = getContext(CURRENT_PAGE_KEY);
    const status = $derived(number_to_status(Math.round(current_page()), this_page));

    // Todo: fix me
    const local_progress = $derived(minmax((current_page() - this_page + 0.5) * 2, 0, 1));

    function get_transform_from_status(status: PaperStatus): string {
        return `translateX(${status * 25}%) rotate(${status * 5}deg) scale(${1 - Math.abs(status) * 0.125})`;
    }
</script>

<div
    class="wrapper stack-children"
    style:opacity={get_status_opacity(status)}
    style:transform={get_transform_from_status(status)}
    style:z-index={status === PaperStatus.Center ? 1 : "auto"}
    style:filter={status !== PaperStatus.Center ? "blur(2px)" : ""}
    style:--image-mask="url('{NewspaperBackground}')"
>
    <Paper {progress} {local_progress}></Paper>
</div>

<style>
    .wrapper {
        position: relative;
        width: calc(100% - 16px);
        height: calc(100% - 16px);
        contain: strict;
        justify-items: center;
        transform-origin: bottom center;
        will-change: opacity, transform, z-index, filter;
        transition:
            opacity var(--scroll-transition-bezier),
            transform var(--scroll-transition-bezier),
            filter var(--scroll-transition-bezier);

        > :global(.paper-base) {
            position: relative;
            width: min(45%, 75vh);
            height: 100%;
            contain: strict;
            background-color: var(--light-orange);

            > :global(.image-mask) {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                pointer-events: none;
                background: var(--image-mask) no-repeat center;
                /* background-size: cover; */
            }

            :global(.paragraph-base) {
                font-family: var(--vl-regular);
                -webkit-text-stroke: 0.25px black;
                line-height: 1.25;
                text-align: justify;
            }
        }
    }
</style>
