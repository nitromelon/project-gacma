<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper7/1.jpg";

    type Props = {
        local_progress: number;
    };

    const title =
        "Quan hệ Việt Nam - Trung Quốc trước 1988: Bối cảnh căng thẳng trước trận chiến Gạc Ma (1988)";

    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <h2>
            CHIẾN TRANH BIÊN GIỚI 1979 <br />
            VÀ SỰ LEO THANG CĂNG THẲNG
        </h2>

        <p class="paragraph-base">
            Sau khi đánh bại chế độ diệt chủng Khmer Đỏ vào cuối năm 1978 và đưa quân tình nguyện
            vào Campuchia để giúp đất nước này tái thiết, Việt Nam đã vấp phải phản ứng quyết liệt
            từ Trung Quốc - quốc gia từng là đồng minh thân cận của Khmer Đỏ. Đáp trả động thái của
            Việt Nam, ngày 17/2/1979, Trung Quốc phát động cuộc chiến tranh biên giới, huy động hơn
            600.000 quân tấn công các tỉnh biên giới phía Bắc Việt Nam.
        </p>

        <img src={Pic1} alt="" />

        <p class="paragraph-base">
            Cuộc chiến kéo dài một tháng nhưng để lại hậu quả nặng nề, với hàng chục nghìn người
            thiệt mạng và nhiều thị trấn bị phá hủy hoàn toàn. Theo tài liệu của Viện Nghiên cứu
            Chiến lược Quốc phòng Việt Nam, Trung Quốc đã sử dụng chiến thuật “đánh nhanh, rút
            nhanh” nhưng vấp phải sự kháng cự mạnh mẽ từ quân và dân Việt Nam. Dù chiến sự kết thúc
            vào tháng 3/1979, Trung Quốc vẫn tiếp tục duy trì áp lực bằng các cuộc pháo kích và xung
            đột lẻ tẻ suốt thập niên 1980 (News, 2024). Bên cạnh xung đột trên bộ, Bắc Kinh cũng đẩy
            mạnh các hoạt động gây sức ép trên biển, đặc biệt là tại quần đảo Trường Sa, nơi Việt
            Nam đang kiểm soát nhiều đảo và bãi đá quan trọng.
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

    h2,
    p {
        text-align: center !important;
        text-wrap: balance;
        margin-bottom: 16px;
    }

    h2 {
        font-family: var(--vl-italic) !important;
        font-weight: 600;
    }

    img {
        width: calc(100% - 32px);
        margin: 16px;
    }
</style>
