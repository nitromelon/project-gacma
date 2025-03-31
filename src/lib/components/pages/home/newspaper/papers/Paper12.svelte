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
        <h2 class="paragraph-base">TÌNH HÌNH CĂNG THẲNG TRƯỚC TRẬN GẠC MA</h2>
        <p class="paragraph-base extra-margin-top ninety-percent-width-left">
            Bước sang tháng 3/1988, tình hình tại Trường Sa ngày càng căng thẳng khi cả Việt Nam và
            Trung Quốc đều tìm cách khẳng định quyền kiểm soát trên thực địa. Theo nghiên cứu của
            Viện Nghiên cứu Biển Đông, đến đầu tháng 3, Trung Quốc đã điều thêm tàu chiến và lực
            lượng hải quân xuống khu vực, chuẩn bị cho một cuộc đối đầu quân sự nếu cần thiết
            (thanhnien.vn, 2022).
        </p>

        <p class="paragraph-base extra-margin-top ninety-percent-width-right">
            Trước nguy cơ mất chủ quyền trên các bãi đá chiến lược, Việt Nam điều tàu HQ-604, HQ-505
            và HQ-605 chở công binh ra Trường Sa để bảo vệ các thực thể mà nước ta đang kiểm soát.
            Tuy nhiên, đối diện với lực lượng hải quân mạnh hơn từ phía Trung Quốc, Việt Nam rơi vào
            tình thế bị đe dọa nghiêm trọng. Điều này dẫn đến trận hải chiến bi tráng tại Gạc Ma vào
            ngày 14/3/1988, khi 64 chiến sĩ hải quân Việt Nam hy sinh trong cuộc chiến bảo vệ chủ
            quyền biển đảo (Mỹ Hòa, 2025).
        </p>
    {/snippet}

    <h3 class="small-title" {title}>{title}</h3>

    <div class="wrapper">
        <ProgressScroll progress={limited_range(local_progress, 0.25, 0.875)} content={paper}
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

    .ninety-percent-width-left {
        width: 90%;
    }

    .ninety-percent-width-right {
        position: relative;
        margin: 64px 0;
        width: 90%;
        left: 10%;
    }
</style>
