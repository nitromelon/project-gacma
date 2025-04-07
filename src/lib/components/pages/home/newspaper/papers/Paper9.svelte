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
                `TRUNG QUỐC GIA TĂNG ÁP LỰC TẠI BIỂN ĐÔNG`,
                `CHINA'S INCREASING PRESSURE IN THE EAST VIETNAM SEA`,
            )}
        </h2>
        <p class="paragraph-base extra-margin-top">
            {display_text(
                $language_perference,
                `Trước năm 1974, quần đảo Hoàng Sa thuộc quyền kiểm soát của Việt Nam Cộng hòa. Tuy nhiên, lợi dụng tình hình chính trị bất ổn tại miền Nam, Trung Quốc đã phát động một cuộc tấn công quân sự vào tháng 1/1974, chiếm toàn bộ Hoàng Sa từ tay quân đội Việt Nam Cộng hòa (VŨ VIẾT TUÂN, 2017).`,
                `Before 1974, the Paracel Islands were under the control of the Republic of Vietnam (South Vietnam). However, taking advantage of the political turmoil in the South, China launched a military attack in January 1974, seizing the entire Paracel Islands from the South Vietnamese military (VŨ VIẾT TUÂN, 2017).`,
            )}
        </p>

        <p class="paragraph-base extra-margin-top ninety-percent-width">
            {display_text(
                $language_perference,
                `Sau khi kiểm soát Hoàng Sa, Bắc Kinh tiếp tục mở rộng ảnh hưởng xuống Trường Sa. Đến năm 1987, Trung Quốc bắt đầu triển khai hàng loạt động thái quân sự nhằm gia tăng hiện diện trong khu vực này, bao gồm việc đưa tàu chiến xuống quần đảo Trường Sa và tiến hành các hoạt động xây dựng trên các thực thể mà họ tuyên bố chủ quyền.`,
                `After gaining control of the Paracels, Beijing continued expanding its influence southward towards the Spratlys. By 1987, China began deploying a series of military maneuvers to increase its presence in the area, including sending warships to the Spratly Islands and conducting construction activities on the features it claimed sovereignty over.`,
            )}
        </p>

        <p class="paragraph-base extra-margin-top border-right-text">
            {display_text(
                $language_perference,
                `Trung Quốc đã sử dụng chiến thuật "cắt lát" hay còn được gọi là "salami slicing", từng bước chiếm giữ các bãi đá nhỏ lẻ, tạo tiền đề để mở rộng kiểm soát trên biển (Vũ Hiền, 2024).`,
                `China employed the "salami-slicing" tactic, gradually seizing smaller reefs to lay the groundwork for broader maritime control (Vũ Hiền, 2024).`,
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
