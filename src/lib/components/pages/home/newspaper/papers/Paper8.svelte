<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper8/1.png";
    import Pic2 from "$lib/assets/images/home/newspaper/papers/paper8/2.png";
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

    const pic1_description = $derived(
        display_text(
            $language_perference,
            "Cựu binh: PHẠM QUANG LUYỆN",
            "Veteran PHẠM QUANG LUYỆN",
        ),
    );

    const pic1_description2 = $derived(
        display_text($language_perference, "Sĩ quan sư đoàn 356", "Officer, 356th Division"),
    );

    const pic2_description = $derived(
        display_text(
            $language_perference,
            "Trung Tướng: NGUYỄN QUỐC THƯỚC",
            "Lieutenant General NGUYỄN QUỐC THƯỚC",
        ),
    );

    const pic2_description2 = $derived(
        display_text(
            $language_perference,
            "Nguyên Tư lệnh quân khu 4",
            "Former Commander of Military Region 4",
        ),
    );

    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <div class="double-line-break red-line"></div>
        <h2 class="heading">
            {display_text($language_perference, "HỒI ỨC NGƯỜI CHIẾN SĨ", "MEMOIRS OF A SOLDIER")}
        </h2>

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
                {display_text(
                    $language_perference,
                    '"Những năm tháng gian khổ với đạn pháo bắn phá liên tục suốt ngày đêm, những bữa cơm trắng với muối, tấm áo ấm thay phiên nhau mặc khi canh gác..."',
                    '"These were years of immense hardship, with relentless artillery fire day and night. Meals consisted of plain rice with salt, and warm clothing was shared in shifts during guard duty..."',
                )}
            </p>
        </div>

        <div class="double-line-break red-line"></div>

        <div class="separate-div">
            <p class="paragraph-base">
                {display_text(
                    $language_perference,
                    `"Việc gọi cuộc chiến do Trung Quốc gây ra là 'xung đột biên giới' là ngụy biện, lừa dối, vì đó thực chất là cuộc chiến tranh xâm lược."`,
                    `"Referring to the war initiated by China as a 'border conflict' is a deceptive and misleading euphemism. In reality, it was a war of aggression."`,
                )}
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
