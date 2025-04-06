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

    const wrapper_width = $derived(normalized_range(header_resize_progress, 100, 45));
</script>

<div class="wrapper" style:width={wrapper_width === 40 ? "min(45%, 75vh)" : `${wrapper_width}%`}>
    <div class="line"></div>
    <h1>BỐI CẢNH QUỐC TẾ:</h1>
    <h2>Cơ hội từ sự chuyển dịch quyền lực toàn cầu</h2>
    <div class="line"></div>

    <div class="image-mask"></div>
</div>

<style>
    .wrapper {
        position: relative;
        height: 100%;
        background-color: var(--light-orange);
        contain: strict;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        will-change: width, transform;
        transition:
            width var(--scroll-transition-bezier),
            transform var(--scroll-transition-bezier);

        > h1,
        h2 {
            font-size: 48px;
            text-align: center;
            font-family: var(--huxley-max);
            color: var(--red);
            padding: 0 8px;
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

        > .image-mask {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: var(--image-mask) no-repeat center;
            pointer-events: none;
        }
    }
</style>
