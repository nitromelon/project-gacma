<script lang="ts">
    import {
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import ThreeIslandsPic1 from "$lib/assets/images/home/threeislands/3.png";
    import ComparisonPic10 from "$lib/assets/images/home/comparison/10.svg";
    import LengthScroll from "$lib/components/length-scroll/LengthScroll.svelte";
    import Intro from "$lib/components/pages/home/intro/Intro.svelte";
    import Newspaper from "$lib/components/pages/home/newspaper/Newspaper.svelte";
    import ThreeIslandsIntro from "$lib/components/pages/home/three-islands/ThreeIslandsIntro.svelte";
    import EconomicPotential from "$lib/components/pages/home/three-islands/EconomicPotential.svelte";
    import ThreeIslandsPart3 from "$lib/components/pages/home/three-islands/Part3.svelte";
    import ThreeIslandsPart4 from "$lib/components/pages/home/three-islands/Part4.svelte";
    import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";
    import ComparisonTable from "$lib/components/pages/home/comparison/Table.svelte";
    import Quote from "$lib/components/pages/home/comparison/Quote.svelte";
    import ProgressPart1 from "$lib/components/pages/home/progress/Part1.svelte";
    import ProgressPart2 from "$lib/components/pages/home/progress/Part2.svelte";
    import Meaning from "$lib/components/pages/home/meaning/Meaning.svelte";
    import type { SvelteSet } from "svelte/reactivity";

    const fixed_slots: SvelteSet<Snippet> | undefined = getContext(
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    );
    const fixed_outside_slots: SvelteSet<Snippet> | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    fixed_slots?.add(inside_root_section);
    fixed_outside_slots?.add(outside_root_section);

    onMount(() => {
        if (fixed_slots === undefined || fixed_outside_slots === undefined) {
            return;
        }

        return () => {
            fixed_slots.delete(inside_root_section);
            fixed_outside_slots.delete(outside_root_section);
        };
    });
</script>

<svelte:head>
    <title>Gạc Ma: Vòng tròn bất tử</title>
</svelte:head>

{#snippet outside_root_section()}{/snippet}

{#snippet inside_root_section()}{/snippet}

<div class="intro-heading-wrapper stack-children">
    <h1>GẠC MA</h1>
    <p>vòng tròn bất tử</p>
</div>

<div class="intro-wrapper">
    <div class="intro-content-wrapper">
        {#snippet intro(progress: number)}
            <Intro {progress}></Intro>
        {/snippet}

        <LengthScroll slot={intro} slowdown={4} bottom_limit={false}></LengthScroll>
    </div>

    {#snippet newspaper(progress: number)}
        <Newspaper {progress}></Newspaper>
    {/snippet}

    <LengthScroll slot={newspaper} slowdown={16} top_limit={false} bottom_limit={false}
    ></LengthScroll>
</div>

<div class="three-islands-wrapper">
    <ThreeIslandsIntro></ThreeIslandsIntro>
    <div class="padding-height"></div>

    {#snippet three_islands_2nd_content(progress: number)}
        <EconomicPotential {progress}></EconomicPotential>
    {/snippet}

    <LengthScroll slot={three_islands_2nd_content} slowdown={5} top_limit={false}></LengthScroll>

    <ThreeIslandsPart3></ThreeIslandsPart3>

    {#snippet three_islands_4th_content(progress: number)}
        <ThreeIslandsPart4 {progress}></ThreeIslandsPart4>
    {/snippet}

    <LengthScroll slot={three_islands_4th_content} slowdown={3} bottom_limit={false}></LengthScroll>

    <div class="image-wrapper">
        <img src={ThreeIslandsPic1} alt="" />
    </div>

    <div class="image-wrapper">
        <div class="iframe-wrapper">
            <p>Video | [Gạc Ma: Vòng tròn bất tử]: Vị trí chiến lược ba bãi đá</p>
            <YtbFrame
                title="[Gạc Ma: Vòng tròn bất tử]: Vị trí chiến lược ba bãi đá"
                id="MnWBbmNS-tQ"
            ></YtbFrame>
        </div>
    </div>
</div>

<div class="comparison-wrapper">
    <div class="padding-left-right">
        <h3 class="heading-title">III. Thế trận không cân sức</h3>

        <ComparisonTable></ComparisonTable>

        <div class="image-wrapper">
            <img
                src={ComparisonPic10}
                alt="Đánh giá tương quan lực lượng"
                title="Đánh giá tương quan lực lượng"
            />
        </div>
    </div>

    {#snippet quote(progress: number)}
        <Quote {progress}></Quote>
    {/snippet}

    <LengthScroll slot={quote} slowdown={2} top_limit={false} bottom_limit={false}></LengthScroll>

    <div class="padding-left-right">
        <div class="image-wrapper">
            <div class="iframe-wrapper">
                <p>
                    Video | [Gạc Ma: Vòng tròn bất tử]: Chia sẻ của cựu binh Lê Hữu Thảo về Tương
                    Quan Lực Lượng của trận Gạc Ma
                </p>
                <YtbFrame
                    title="[Gạc Ma: Vòng tròn bất tử]: Chia sẻ của cựu binh Lê Hữu Thảo về Tương Quan Lực Lượng của trận Gạc Ma"
                    id="dgSSWmBfgcw"
                ></YtbFrame>
            </div>
        </div>
    </div>
</div>

<div class="progress-wrapper">
    {#snippet progress_page(progress: number)}
        <ProgressPart1 {progress}></ProgressPart1>
    {/snippet}

    <LengthScroll slot={progress_page} slowdown={5} bottom_limit={false}></LengthScroll>

    {#snippet progress_page2(progress: number)}
        <ProgressPart2 {progress}></ProgressPart2>
    {/snippet}

    <LengthScroll slot={progress_page2} slowdown={9} top_limit={false}></LengthScroll>
</div>

<div class="static-wrapper result-wrapper padding-left-right">
    <h1 class="extra-padding-under-header">V. Sau cơn bão</h1>
    <div class="tiny-paragraph-wrapper">
        <p>
            Sau trận chiến khốc liệt, Trung Quốc đã thành công chiếm giữ trái phép đảo Gạc Ma, nhưng
            bằng ý chí chiến đấu kiên cường cùng xương máu của mình, các chiến sĩ hải quân Việt Nam
            đã giữ được Cô Lin và Len Đao.
        </p>
        <p>
            Theo thống kê từ phía Trung Quốc, trong trận giao tranh không cân sức ấy, những người
            lính Việt Nam đã phải hứng chịu hơn 500 quả đạn pháo, cùng với các loại đạn khác. Vì là
            tàu vận tải không được trang bị pháo, hải quân Việt Nam chỉ có thể đáp trả bằng hỏa lực
            của AK47 và B41.
        </p>
        <p>
            Phía Trung Quốc báo cáo có 6 lính Trung Quốc tử vong và 18 lính bị thương sau trận
            chiến, cùng với 3 tàu bị hư hỏng nhẹ. Còn về phía Việt Nam, tổn thất là lớn hơn rất
            nhiều. Hai chiếc tàu HQ604 và HQ605 đã mãi mãi nằm lại nơi biển khơi, còn tàu HQ505, tuy
            bị hư hỏng nặng, nhưng đã được điều khiển phóng lên bãi Cô Lin, trở thành cột mốc chủ
            quyền. Và thương xót hơn, 3 chiến sĩ đã hy sinh, 11 người khác bị thương và 70 người mất
            tích. Sau này, Trung Quốc đã trao trả cho Việt Nam 9 người bị bắt giữ, còn 61 người lính
            mất tích được xem như đã hy sinh. 64 chiến sĩ đã nằm lại mãi nơi biển cả mênh mông, để
            lại cho Tổ quốc, cho gia đình một kí ức xót xa, một nỗi niềm thương tiếc khôn nguôi.
        </p>
    </div>
    <div class="image-wrapper">
        <div class="iframe-wrapper">
            <p>Video | [Gạc Ma - Vòng tròn bất tử]: Sau cơn bão</p>
            <YtbFrame title="[Gạc Ma - Vòng tròn bất tử]: Sau cơn bão" id="nfRnrvfwWcM"></YtbFrame>
        </div>
    </div>
    <div class="tiny-paragraph-wrapper">
        <p>
            Chiến tranh đã lùi xa, đất nước nở hoa độc lập, nhưng những ký ức về những liệt sĩ vẫn
            in sâu trong tâm trí những người ở lại. Đó là những người thân, những người đồng đội,
            những người tới giờ vẫn còn nhớ như in những câu chuyện của người lính giữ đảo ngày ấy,
            vì “tiếng gọi thiêng liêng của Tổ Quốc”, các anh không do dự mà dứt khoát ra đi thực
            hiện nhiệm vụ cao cả, dù biết có thể sẽ nằm mãi nơi biển xa...
        </p>
        <p>
            Để rồi dư âm lòng yêu nước của những con người cao cả ấy vang mãi tới thế hệ hôm nay và
            mai sau, trở thành niềm tự hào, sự biết ơn, kính trọng chân thành. Từ đó, lòng yêu nước
            cứ thế được tiếp bước...
        </p>
    </div>
</div>

<div class="static-wrapper meaning-wrapper">
    <div class="padding-left-right">
        <h1 class="override-heading extra-padding-under-header">
            VI. Khắc tên vào biển <br />
            giữ trọn chủ quyển
        </h1>
        <div class="tiny-paragraph-wrapper">
            <p>
                Biển đảo thiêng liêng quê hương, nơi biết bao thế hệ cha anh đã ngã xuống đổi lấy
                hòa bình cho Tổ Quốc. Ở nơi đó, có những người lính hải quân coi việc xa nhà làm lẽ
                thường, lấy hiểm nguy làm trách nhiệm, lặng lẽ giữa trùng khơi để đất liền bình yên.
            </p>
        </div>
        <div class="image-wrapper">
            <div class="iframe-wrapper">
                <p>Video | [Gạc Ma - Vòng tròn bất tử]: Khắc tên vào biển - Giữ trọn chủ quyển</p>
                <YtbFrame
                    title="[Gạc Ma - Vòng tròn bất tử]: Khắc tên vào biển - Giữ trọn chủ quyển"
                    id="K0ek_NIMOZw"
                ></YtbFrame>
            </div>
        </div>
    </div>

    {#snippet slideshow(progress: number)}
        <Meaning {progress}></Meaning>
    {/snippet}

    <LengthScroll slot={slideshow} slowdown={4} top_limit={false} bottom_limit={false}
    ></LengthScroll>

    <div class="tiny-paragraph-wrapper padding-left-right final-part-wrapper-patch">
        <p>
            Giữ gìn biển đảo hôm nay không chỉ là nối tiếp ý chí cha anh, mà còn là lời hứa với
            tương lai rằng:
        </p>
        <p class="final-part-quote">
            "Có một ngày mai....sóng biển vẫn tiếp tục vỗ vào bờ một màu trong xanh của hòa bình và
            tự do."
        </p>
    </div>
</div>

<p>Credit</p>

<style>
    .intro-heading-wrapper {
        position: relative;
        align-items: center;
        justify-items: center;
        background-color: var(--tan);

        > h1 {
            color: var(--red);
            font-size: 216px;
            font-family: var(--paz-time);
        }

        > p {
            color: var(--blue);
            font-size: 54px;
            font-family: var(--huxley-max);
            -webkit-text-stroke: 1px var(--tan);
            transform: translateY(12px);
        }
    }

    .intro-wrapper {
        background-color: var(--tan);

        > .intro-content-wrapper {
            --intro-wrapper-offset-top: 120px;
            margin-top: calc(var(--intro-wrapper-offset-top) * -1);
        }
    }

    .image-wrapper {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            height: 64%;
            width: 100%;
            object-fit: contain;
        }

        > .iframe-wrapper {
            position: relative;
            height: 64%;
            aspect-ratio: 16/9;
            border: 1px solid black;

            > p {
                position: absolute;
                top: -22px;
                font-size: 11px;
                font-family: var(--vl-regular);
                font-weight: 600;
            }
        }
    }

    .three-islands-wrapper {
        background-color: var(--blue);

        > .padding-height {
            height: 32px;
        }

        .iframe-wrapper > p {
            color: var(--tan);
        }
    }

    .padding-left-right {
        padding: 64px;
    }

    .comparison-wrapper {
        background-color: var(--light-orange);

        .heading-title {
            text-align: center;
            text-wrap: balance;
            font-family: var(--huxley-max);
            color: var(--red);
            font-size: 72px;
        }
    }

    .progress-wrapper {
        background-color: var(--tan);
    }

    .tiny-paragraph-wrapper {
        font-family: var(--vl-regular);
        line-height: 1.25;
        margin: auto;
        max-width: 720px;

        p {
            margin-bottom: 16px;
            text-align: justify;
        }
    }

    .static-wrapper {
        h1 {
            font-size: 144px;
            font-family: var(--huxley-max);
            text-align: center;
        }
    }

    .result-wrapper {
        background-color: var(--blue);
        color: var(--tan);
    }

    .meaning-wrapper {
        background-color: var(--light-orange);
        h1 {
            color: var(--red);
        }

        .override-heading {
            font-size: 72px;
        }
    }

    .final-part-wrapper-patch {
        height: 100vh;
        align-content: center;

        > p {
            -webkit-text-stroke: 0.25px;
            font-size: 24px;
        }

        > .final-part-quote {
            -webkit-text-stroke: 0.5px;
            font-family: var(--vl-italic);
            color: var(--blue);
        }
    }

    .extra-padding-under-header {
        margin-bottom: 32px;
    }
</style>
