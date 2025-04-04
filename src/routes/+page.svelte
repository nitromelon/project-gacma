<script lang="ts">
    import {
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import { array_remove_element } from "$lib/remove_element";
    import ThreeIslandsPic1 from "$lib/assets/images/home/threeislands/3.png";
    import ComparisonPic10 from "$lib/assets/images/home/comparison/10.png";
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

    const fixed_slots: Snippet[] | undefined = getContext(LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD);
    const fixed_outside_slots: Snippet[] | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    fixed_slots?.push(inside_root_section);
    fixed_outside_slots?.push(outside_root_section);

    onMount(() => {
        if (fixed_slots === undefined || fixed_outside_slots === undefined) {
            return;
        }

        return () => {
            array_remove_element(fixed_slots, inside_root_section);
            array_remove_element(fixed_outside_slots, outside_root_section);
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
    <div class="padding-height"></div>
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
        <h3 class="heading-title padding-left-right">III. Tương quan lực lượng</h3>

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

<div class="progress-wrapper stack-children">
    <!-- <BoatImage></BoatImage> -->
    {#snippet progress_page(progress: number)}
        <ProgressPart1 {progress}></ProgressPart1>
    {/snippet}

    <LengthScroll slot={progress_page} slowdown={6} top_limit={true} bottom_limit={false}
    ></LengthScroll>
</div>

<p>Diễn biến</p>
<p>Kết quả</p>
<p>Ý nghĩa</p>
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
            margin-bottom: 64px;
            font-family: var(--huxley-max);
            color: var(--red);
            font-size: 72px;
        }
    }

    .progress-wrapper {
        background-color: var(--tan);
    }
</style>
