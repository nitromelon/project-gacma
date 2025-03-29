<script lang="ts">
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import { normalized_range } from "$lib/normalized_limited_range/normalized";
    import { BEGIN_HEADER_RESIZE, END_HEADER_RESIZE } from "./timeline";

    type Props = {
        progress: number;
    };

    const { progress }: Props = $props();

    const header_resize_progress = $derived(
        limited_range(progress, BEGIN_HEADER_RESIZE, END_HEADER_RESIZE),
    );
</script>

<div class="wrapper paper-base">
    <div class="line"></div>
    <h1>QUAN HỆ VIỆT NAM - TRUNG QUỐC TRƯỚC 1988:</h1>
    <h2>
        Bối cảnh căng thẳng trước trận chiến Gạc Ma (1988)
    </h2>
    <div class="line"></div>

    <div class="image-mask"></div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > h1,
        h2 {
            font-size: 36px;
            text-align: center;
            font-family: var(--huxley-max);
            color: var(--red);
            line-height: 1.25;
            padding: 0 8px;
        }

        > h2 {
            text-wrap: balance;
        }

        > .line {
            width: calc(100% - 32px);
            max-width: 1280px;
            height: 4px;
            border: 1px solid var(--red);
            border-left: none;
            border-right: none;
            margin: 64px 0;
        }
    }
</style>
