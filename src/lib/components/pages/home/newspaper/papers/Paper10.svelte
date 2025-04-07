<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper10/1.svg";
    import Pic1_EN from "$lib/assets/images/home/newspaper/papers/paper10/en/1.svg";
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

    const source = $derived(display_text($language_perference, Pic1, Pic1_EN));
</script>

<div class="paper-base">
    {#snippet paper()}
        <p class="paragraph-base large-margin-top">
            {display_text(
                $language_perference,
                `Tháng 1/1988, Bắc Kinh đưa tàu chiến đến khu vực đá Chữ Thập và bắt đầu xây dựng công trình kiên cố. Trước tình hình đó, Việt Nam buộc phải điều lực lượng công binh và hải quân ra Trường Sa để bảo vệ chủ quyền. Tháng 2/1988, Hải quân Nhân dân Việt Nam triển khai lực lượng tới một số bãi đá chưa có quân đội đóng giữ, nhằm ngăn chặn sự bành trướng của Trung Quốc (VnExpress, 2021).`,
                `In January 1988, Beijing sent warships to the area around Fiery Cross Reef and began building permanent structures. Faced with this situation, Vietnam was forced to dispatch engineering and naval forces to the Spratlys to protect its sovereignty. By February 1988, the Vietnamese People’s Navy deployed troops to several unoccupied reefs to prevent China’s expansionist moves (VnExpress, 2021).`,
            )}
        </p>

        <div class="image-wrapper">
            <img src={source} alt="" />
        </div>

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
