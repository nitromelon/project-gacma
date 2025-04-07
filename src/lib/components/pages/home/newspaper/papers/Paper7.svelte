<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper7/1.jpg";
    import language_perference, { display_text } from "$lib/components/language/config";

    type Props = {
        local_progress: number;
    };

    const title = $derived(
        display_text(
            $language_perference,
            "Quan hệ Việt Nam - Trung Quốc trước 1988: Bối cảnh căng thẳng trước trận chiến Gạc Ma (1988)",
            "Vietnam - China relations before 1988: Tensions leading up to the battle of Gạc Ma (1988)",
        ),
    );

    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <h2>
            {display_text(
                $language_perference,
                "CHIẾN TRANH BIÊN GIỚI 1979",
                "THE 1979 BORDER WAR",
            )}
            <br />
            {display_text(
                $language_perference,
                "VÀ SỰ LEO THANG CĂNG THẲNG",
                "AND ESCALATING TENSIONS",
            )}
        </h2>

        <p class="paragraph-base">
            {display_text(
                $language_perference,
                "Sau khi đánh bại chế độ diệt chủng Khmer Đỏ vào cuối năm 1978 và đưa quân tình nguyện vào Campuchia để giúp đất nước này tái thiết, Việt Nam đã vấp phải phản ứng quyết liệt từ Trung Quốc - quốc gia từng là đồng minh thân cận của Khmer Đỏ. Đáp trả động thái của Việt Nam, ngày 17/2/1979, Trung Quốc phát động cuộc chiến tranh biên giới, huy động hơn 600.000 quân tấn công các tỉnh biên giới phía Bắc Việt Nam.",
                "After defeating the genocidal Khmer Rouge regime at the end of 1978 and sending volunteer troops to Cambodia to help rebuild the country, Vietnam faced fierce opposition from China - a country that had been a close ally of the Khmer Rouge. In response to Vietnam’s actions, on February 17, 1979, China launched a border war, mobilizing over 600,000 troops to attack Vietnam’s northern border provinces.",
            )}
        </p>

        <img src={Pic1} alt="" />

        <p class="paragraph-base">
            {display_text(
                $language_perference,
                "Cuộc chiến kéo dài một tháng nhưng để lại hậu quả nặng nề, với hàng chục nghìn người thiệt mạng và nhiều thị trấn bị phá hủy hoàn toàn. Theo tài liệu của Viện Nghiên cứu Chiến lược Quốc phòng Việt Nam, Trung Quốc đã sử dụng chiến thuật “đánh nhanh, rút nhanh” nhưng vấp phải sự kháng cự mạnh mẽ từ quân và dân Việt Nam. Dù chiến sự kết thúc vào tháng 3/1979, Trung Quốc vẫn tiếp tục duy trì áp lực bằng các cuộc pháo kích và xung đột lẻ tẻ suốt thập niên 1980 (News, 2024). Bên cạnh xung đột trên bộ, Bắc Kinh cũng đẩy mạnh các hoạt động gây sức ép trên biển, đặc biệt là tại quần đảo Trường Sa, nơi Việt Nam đang kiểm soát nhiều đảo và bãi đá quan trọng.",
                "The war lasted a month but left devastating consequences, with tens of thousands of people killed and many towns completely destroyed. According to documents from the Institute for Defense Strategic Studies of Vietnam, China employed a “quick strike, quick withdrawal” tactic but encountered strong resistance from the Vietnamese military and civilians. Although the fighting officially ended in March 1979, China continued to maintain pressure through shelling and sporadic conflicts throughout the 1980s (News, 2024). Alongside land-based conflicts, Beijing also intensified its efforts at sea, particularly in the Spratly Islands, where Vietnam was maintaining control over several key islands and reefs.",
            )}
        </p>

        <div class="sub-padding"></div>
    {/snippet}

    <h3 class="small-title" {title}>{title}</h3>

    <div class="news-wrapper">
        <ProgressScroll progress={limited_range(local_progress, 0.25, 0.75)} content={paper}
        ></ProgressScroll>
    </div>

    <div class="image-mask"></div>
</div>

<style>
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
