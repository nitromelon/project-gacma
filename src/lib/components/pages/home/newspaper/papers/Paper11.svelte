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
        <h2 class="paragraph-base">Ý ĐỒ CHIẾN LƯỢC CỦA TRUNG QUỐC TẠI TRƯỜNG SA</h2>
        <p class="paragraph-base extra-margin-top ninety-percent-width-left">
            Quần đảo Trường Sa không chỉ có vị trí chiến lược quan trọng về quân sự mà còn là khu
            vực có trữ lượng dầu khí dồi dào. Biển Đông có thể chứa đến 11 tỷ thùng dầu và 190 nghìn
            tỷ feet khối khí đốt tự nhiên, khiến khu vực này trở thành điểm nóng tranh chấp giữa
            nhiều quốc gia (The U.S. Geological Survey, 2010).
        </p>

        <p class="paragraph-base extra-margin-top ninety-percent-width-right">
            Bên cạnh đó, Trường Sa nằm trên tuyến hàng hải quan trọng bậc nhất thế giới, nơi lưu
            thông khoảng 30% tổng lượng hàng hóa toàn cầu. Việc kiểm soát khu vực này giúp Trung
            Quốc tăng cường ảnh hưởng trên tuyến đường biển chiến lược, đồng thời tạo điều kiện để
            Bắc Kinh áp đặt yêu sách "đường lưỡi bò" phi pháp tại Biển Đông.
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

    .ninety-percent-width-left {
        position: relative;
        width: 90%;
        left: 10%;
    }

    .ninety-percent-width-right {
        margin: 64px 0;
        width: 90%;
    }
</style>
