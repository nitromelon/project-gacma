<script lang="ts">
    import {
        limited_range,
        limited_range_max,
        limited_range_min,
    } from "$lib/normalized_limited_range/limited";
    import { normalized_range } from "$lib/normalized_limited_range/normalized";
    import { fast_cubic_bezier } from "$lib/cubic_bezier/presets";

    const { progress }: { progress: number } = $props();
</script>

<!-- 1 length scroll: Boi canh quoc te, xong thu nho thanh bao -->

<section class="newspaper-section stack-children">
    <div class="box box1">Trang n - 1</div>
    <div class="box box2">Trang n</div>
    <div class="box box3">Trang n + 1</div>
</section>

<style>
    .newspaper-section {
        position: relative;
        contain: strict;
        height: 100vh;

        /* align-items: center; */
        justify-items: center;
    }

    .box {
        width: 40%;
        max-width: 1280px;
        border: 1px solid black;
        transition: 1s;
        color: white;
    }

    .box1 {
        transform-origin: bottom left;
        transform: translateX(-50%) rotate(-10deg) scale(0.85);
        background: var(--blue);
    }

    .box2 {
        z-index: -1;
        background: var(--red);
    }

    .box3 {
        z-index: -2;
        transform-origin: bottom right;
        transform: translateX(50%) rotate(10deg) scale(0.85);
        background: var(--yellow);
    }
</style>
