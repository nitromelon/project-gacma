<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper8/1.png";
    import Pic2 from "$lib/assets/images/home/newspaper/papers/paper8/2.png";

    type Props = {
        local_progress: number;
    };

    const title =
        "Quan hệ Việt Nam - Trung Quốc trước 1988: Bối cảnh căng thẳng trước trận chiến Gạc Ma (1988)";

    const pic1_description = "Cựu binh: PHẠM QUANG LUYỆN";
    const pic1_description2 = "sĩ quan sư đoàn 356";
    const pic2_description = "Trung Tướng: NGUYỄN QUỐC THƯỚC";
    const pic2_description2 = "nguyên Tư lệnh quân khu 4";
    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <div class="double-line-break red-line"></div>
        <h2 class="heading">HỒI ỨC NGƯỜI CHIẾN SĨ</h2>

        <div class="separate-div">
            <div class="base">
                <img
                    src={Pic1}
                    alt="{pic1_description}: {pic1_description2}"
                    title="{pic1_description}, {pic1_description2}"
                />
                <p class="paragraph-base small-text">{pic1_description}</p>
                <p class="paragraph-base small-text">{pic1_description2}</p>
            </div>
            <p class="paragraph-base">
                "Những năm tháng gian khổ với đạn pháo bắn phá liên tục suốt ngày đêm, những bữa cơm
                trắng với muối, tấm áo ấm thay phiên nhau mặc khi canh gác."
            </p>
        </div>

        <div class="double-line-break red-line"></div>

        <div class="separate-div">
            <p class="paragraph-base">
                "Việc gọi cuộc chiến do Trung Quốc gây ra là 'xung đột biên giới' là ngụy biện, lừa
                dối, vì đó thực chất là cuộc chiến tranh xâm lược."
            </p>
            <div class="base">
                <img
                    src={Pic2}
                    alt="{pic2_description}: {pic2_description2}"
                    title="{pic2_description}, {pic2_description2}"
                />
                <p class="paragraph-base small-text">{pic2_description}</p>
                <p class="paragraph-base small-text">{pic2_description2}</p>
            </div>
        </div>
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

    .red-line {
        border-color: var(--red);
    }

    h2.heading {
        font-family: var(--vl-regular);
        text-align: center;
        font-size: 18px;
        color: var(--red);
        font-weight: 600;
        margin-bottom: 16px;
    }

    .base > img {
        margin-bottom: 8px;
    }

    .small-text {
        font-size: 11px;
        font-family: var(--vl-italic) !important;
        text-align: center !important;
    }
</style>
