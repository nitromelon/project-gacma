<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper10/1.svg";

    type Props = {
        local_progress: number;
    };

    const title =
        "Quan hệ Việt Nam - Trung Quốc trước 1988: Bối cảnh căng thẳng trước trận chiến Gạc Ma (1988)";

    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <p class="paragraph-base large-margin-top">
            Tháng 1/1988, Bắc Kinh đưa tàu chiến đến khu vực đá Chữ Thập và bắt đầu xây dựng công
            trình kiên cố. Trước tình hình đó, Việt Nam buộc phải điều lực lượng công binh và hải
            quân ra Trường Sa để bảo vệ chủ quyền. Tháng 2/1988, Hải quân Nhân dân Việt Nam triển
            khai lực lượng tới một số bãi đá chưa có quân đội đóng giữ, nhằm ngăn chặn sự bành
            trướng của Trung Quốc (VnExpress, 2021).
        </p>

        <div class="image-wrapper">
            <img src={Pic1} alt="" />
        </div>

        <div class="sub-padding"></div>
    {/snippet}

    <h3 class="small-title" {title}>{title}</h3>

    <div class="wrapper">
        <ProgressScroll progress={limited_range(local_progress, 0.25, 0.75)} content={paper}
        ></ProgressScroll>
    </div>

    <div class="image-mask"></div>
</div>

<style>
    .small-title {
        font-family: var(--huxley-max);
        font-size: 12px;
        margin: 16px;
        margin-bottom: 0;
        color: var(--red);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .wrapper {
        position: relative;
        margin: 16px;
        height: calc(100% - 60px);
        width: calc(100% - 32px);
        contain: strict;
    }

    .large-margin-top {
        margin: 64px 0;
    }

    .image-wrapper {
        height: fit-content;
        width: 100%;
        box-sizing: content-box;
        padding-bottom: 64px;
    }
</style>
