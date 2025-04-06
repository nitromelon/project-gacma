<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";

    type Props = {
        local_progress: number;
    };

    const title =
        "Quan hệ Việt Nam - Trung Quốc trước 1988: Bối cảnh căng thẳng trước trận chiến Gạc Ma (1988)";

    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <div class="double-line-break"></div>
        <h2 class="paragraph-base">TRUNG QUỐC GIA TĂNG ÁP LỰC TẠI BIỂN ĐÔNG</h2>
        <p class="paragraph-base extra-margin-top">
            Trước năm 1974, quần đảo Hoàng Sa thuộc quyền kiểm soát của Việt Nam Cộng hòa. Tuy
            nhiên, lợi dụng tình hình chính trị bất ổn tại miền Nam, Trung Quốc đã phát động một
            cuộc tấn công quân sự vào tháng 1/1974, chiếm toàn bộ Hoàng Sa từ tay quân đội Việt Nam
            Cộng hòa (VŨ VIẾT TUÂN, 2017).
        </p>

        <p class="paragraph-base extra-margin-top ninety-percent-width">
            Sau khi kiểm soát Hoàng Sa, Bắc Kinh tiếp tục mở rộng ảnh hưởng xuống Trường Sa. Đến năm
            1987, Trung Quốc bắt đầu triển khai hàng loạt động thái quân sự nhằm gia tăng hiện diện
            trong khu vực này, bao gồm việc đưa tàu chiến xuống quần đảo Trường Sa và tiến hành các
            hoạt động xây dựng trên các thực thể mà họ tuyên bố chủ quyền.
        </p>

        <p class="paragraph-base extra-margin-top border-right-text">
            Trung Quốc đã sử dụng chiến thuật “cắt lát” hay còn được gọi là “salami slicing”, từng
            bước chiếm giữ các bãi đá nhỏ lẻ, tạo tiền đề để mở rộng kiểm soát trên biển (Vũ Hiền,
            2024).
        </p>

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

    h2.paragraph-base {
        font-family: var(--vl-italic) !important;
        -webkit-text-stroke: 0 !important;
        font-weight: 600;
        text-align: center !important;
    }

    .extra-margin-top {
        margin-top: 32px;
    }

    .ninety-percent-width {
        margin: 64px 0;
        width: 90%;
    }

    .border-right-text {
        position: relative;
        left: 20%;
        width: calc(80%);
        padding: 16px;
        border: 1px solid black;
        text-align: center !important;
        text-wrap: balance;
    }
</style>
