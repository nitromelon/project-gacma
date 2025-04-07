<script lang="ts">
    import language_perference, { display_text } from "$lib/components/language/config";
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";

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
        <div class="double-line-break"></div>
        <h2 class="paragraph-base">
            {display_text(
                $language_perference,
                `TÌNH HÌNH CĂNG THẲNG TRƯỚC TRẬN GẠC MA`,
                `RISING TENSIONS BEFORE THE BATTLE OF GAC MA`,
            )}
        </h2>
        <p class="paragraph-base extra-margin-top ninety-percent-width-left">
            {display_text(
                $language_perference,
                `Bước sang tháng 3/1988, tình hình tại Trường Sa ngày càng căng thẳng khi cả Việt Nam và Trung Quốc đều tìm cách khẳng định quyền kiểm soát trên thực địa. Theo nghiên cứu của Viện Nghiên cứu Biển Đông, đến đầu tháng 3, Trung Quốc đã điều thêm tàu chiến và lực lượng hải quân xuống khu vực, chuẩn bị cho một cuộc đối đầu quân sự nếu cần thiết (thanhnien.vn, 2022).`,
                `By March 1988, the situation in the Spratlys had grown increasingly tense as both Vietnam and China sought to assert control over the disputed territories. According to research by the East Vietnam Sea Research Institute, by early March, China had sent more warships and naval forces to the area, preparing for a military confrontation if necessary (thanhnien.vn, 2022).`,
            )}
        </p>

        <p class="paragraph-base extra-margin-top ninety-percent-width-right">
            {display_text(
                $language_perference,
                `Trước nguy cơ mất chủ quyền trên các bãi đá chiến lược, Việt Nam điều tàu HQ-604, HQ-505 và HQ-605 chở công binh ra Trường Sa để bảo vệ các thực thể mà nước ta đang kiểm soát. Tuy nhiên, đối diện với lực lượng hải quân mạnh hơn từ phía Trung Quốc, Việt Nam rơi vào tình thế bị đe dọa nghiêm trọng. Điều này dẫn đến trận hải chiến bi tráng tại Gạc Ma vào ngày 14/3/1988, khi 64 chiến sĩ hải quân Việt Nam hy sinh trong cuộc chiến bảo vệ chủ quyền biển đảo (Mỹ Hòa, 2025).`,
                `Facing the risk of losing sovereignty over strategic reefs, Vietnam dispatched ships HQ-604, HQ-505, and HQ-605 carrying engineers to the Spratlys to secure the features under its control. However, confronted by the superior naval forces of China, Vietnam found itself in a severely threatened position. This situation ultimately led to the tragic naval battle at Gac Ma on March 14, 1988 (Mỹ Hòa, 2025).`,
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
