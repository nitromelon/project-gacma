<script lang="ts">
    import GacMaIntro1 from "$lib/assets/images/home/intro/intro1.png";
    import Date1 from "$lib/assets/images/home/intro/intro-date1-modified.jpg";
    import Date2 from "$lib/assets/images/home/intro/intro-date2-modified.jpg";
    import {
        limited_range,
        limited_range_max,
        limited_range_min,
    } from "$lib/normalized_limited_range/limited";
    import { normalized_range } from "$lib/normalized_limited_range/normalized";
    import { fast_cubic_bezier } from "$lib/cubic_bezier/presets";

    const { progress }: { progress: number } = $props();
    const END_FULLFILLED_TAN_BACKGROUND = 0.1;
    const END_SEA_BACKGROUND = 0.5;

    const number_array = [8, 7, 6, 5, 4, 3, 2, 1, 0];

    // Todo: preprocess this
    const quote =
        '"Sự suy yếu của Liên Xô đã tạo điều kiện cho Mỹ tăng cường quan hệ với Trung Quốc, đồng thời làm gia tăng căng thẳng Việt-Trung sau chiến tranh biên giới năm 1979, dẫn đến trận hải chiến Gạc Ma 1988"'.split(
            " ",
        );

    const fullfilled_tan_background_progress = $derived(
        limited_range_max(progress, END_FULLFILLED_TAN_BACKGROUND),
    );

    const inverted_fullfilled_tan_bg_progress = $derived(
        normalized_range(fullfilled_tan_background_progress, 1, 0),
    );

    const sea_background_progress = $derived(
        limited_range(progress, END_FULLFILLED_TAN_BACKGROUND + 0.1, END_SEA_BACKGROUND),
    );

    const inverted_sea_background_progress = $derived(
        normalized_range(sea_background_progress, 1, 0),
    );

    const fast_inverted_sea_progress = $derived(
        fast_cubic_bezier(inverted_sea_background_progress)[0],
    );

    const year_transition_progress = $derived(limited_range_min(progress, END_SEA_BACKGROUND));

    const current_number_index = $derived(
        Math.floor(year_transition_progress * (number_array.length - 1)),
    );
    const current_quote_char = $derived(year_transition_progress * quote.length - 1);

    let gacma_image_height = $state(0);

    const sea_wrapper_initial_top = $derived(
        (gacma_image_height - 125) * fast_inverted_sea_progress,
    );
</script>

<section class="intro-section">
    <div class="gacma-image-wrapper stack-children">
        <img
            src={GacMaIntro1}
            alt=""
            style:transform="translateY({-gacma_image_height * sea_background_progress}px)"
            bind:clientHeight={gacma_image_height}
        />
        <div
            class="sea-background-wrapper stack-children"
            style:transform="translateY({sea_wrapper_initial_top}px)"
        >
            <div
                class="fake-quote-wrapper"
                style:transform="translateY(calc({-sea_wrapper_initial_top +
                    125 * fast_inverted_sea_progress}px + var(--intro-wrapper-offset-top) / 2))"
            >
                <div class="fake-quote" style:opacity={sea_background_progress}>
                    <span>198</span>
                    <div class="number-wrapper stack-children">
                        {#each number_array as number, index}
                            {@const offset_top = (index - current_number_index) * 100}
                            <span style:transform="translateY({offset_top}%)">{number}</span>
                        {/each}
                    </div>
                </div>
            </div>

            <p
                class="quote"
                style:opacity={year_transition_progress > 0 ? 1 : 0}
                style:transform="translateY({year_transition_progress > 0 ? 0 : 32}px)"
            >
                {#each quote as char, index}
                    {@const effect = current_quote_char >= index ? 0 : 1}
                    <span
                        class="char"
                        style:transform="translateY({effect * 8}px)"
                        style:opacity={1 - effect * 0.75}
                    >
                        {char}
                    </span>

                    {#if index < quote.length - 1}
                        <span></span>
                    {/if}
                {/each}
            </p>

            <p
                class="quote quote-title"
                style:opacity={year_transition_progress > 0 ? 0 : 1}
                style:transform="translateY({year_transition_progress > 0 ? -32 : 0}px)"
            >
                I. Bối cảnh
            </p>
        </div>
        <div
            class="background-wrapper"
            style:transform="translateY(calc(var(--intro-wrapper-offset-top) * {inverted_fullfilled_tan_bg_progress}))"
            style:height="calc(100% - var(--intro-wrapper-offset-top) * {inverted_fullfilled_tan_bg_progress})"
        >
            <div
                class="quote-wrapper"
                style:transform="translateY(calc(var(--intro-wrapper-offset-top) * {fullfilled_tan_background_progress}))"
                style:opacity={fast_inverted_sea_progress}
            >
                <h1 class="main-quote quote1" style:background-image="url('{Date1}')">14.03</h1>
                <h1 class="main-quote quote2" style:background-image="url('{Date2}')">1988</h1>
                <p class="sub-quote quote1 sub-quote1">
                    "Khắc tên <br />
                    &nbsp;&nbsp;vào biển
                </p>
                <p class="sub-quote quote2 sub-quote2">
                    Giữ trọn&nbsp; <br />
                    chủ quyền"
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .intro-section {
        position: relative;
        contain: strict;
        height: 100vh;

        > .gacma-image-wrapper {
            height: fit-content;
            justify-items: center;

            > img {
                max-width: 1280px;
                width: 100%;
                z-index: 2;
                will-change: transform;
                transition: transform var(--scroll-transition-bezier);
            }

            > .background-wrapper {
                width: 100%;
                background-color: var(--tan);

                will-change: transform, height;
                transition:
                    height var(--scroll-transition-bezier),
                    transform var(--scroll-transition-bezier);

                > .quote-wrapper {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    column-gap: 200px;
                    height: 360px;
                    contain: strict;

                    will-change: transform, opacity;
                    transition:
                        transform var(--scroll-transition-bezier),
                        opacity var(--scroll-transition-bezier);

                    > .main-quote {
                        font-size: 180px;
                        font-family: var(--huxley-max);
                        height: fit-content;
                        background: no-repeat center;
                        background-size: cover;
                        color: rgba(239, 228, 209, 0.5);
                        background-clip: text;
                        background-blend-mode: multiply;
                        transform: scaleY(2);
                        transform-origin: top center;
                    }

                    > .quote1 {
                        grid-area: 1/1;
                        justify-self: flex-end;
                    }

                    > .quote2 {
                        grid-area: 1/2;
                        justify-self: flex-start;
                    }

                    > .sub-quote {
                        align-self: center;
                        z-index: 1;
                        font-size: 30px;
                        font-family: var(--vl-italic);
                        -webkit-text-stroke-width: 0.25px;
                    }

                    > .sub-quote1 {
                        transform: translate(-32px, -48px);
                        color: var(--blue);
                        -webkit-text-stroke-color: var(--blue);
                    }

                    > .sub-quote2 {
                        text-align: right;
                        transform: translate(32px, 48px);
                        color: var(--red);
                        -webkit-text-stroke-color: var(--red);
                    }
                }
            }

            > .sea-background-wrapper {
                position: relative;
                background-color: var(--blue);
                height: 100vh;
                width: 100%;
                z-index: 1;
                will-change: transform;
                transition: transform var(--scroll-transition-bezier);
                contain: strict;

                > .fake-quote-wrapper {
                    height: 360px;
                    width: 100%;
                    will-change: transform;
                    transition: transform var(--scroll-transition-bezier);
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);

                    > .fake-quote {
                        grid-area: 1/2;
                        font-size: 180px;
                        font-family: var(--huxley-max);
                        height: 1em;
                        width: fit-content;
                        overflow: hidden;
                        background: no-repeat center;
                        background-size: cover;
                        color: rgba(239, 228, 209, 0.5);
                        transform: translateX(100px) scaleY(2);
                        transform-origin: top center;

                        display: flex;

                        will-change: opacity;
                        transition: opacity var(--scroll-transition-bezier);

                        > .number-wrapper {
                            > span {
                                will-change: transform;
                                transition: transform 0.5s cubic-bezier(0, 1, 0, 1);
                            }
                        }
                    }
                }

                > .quote {
                    justify-self: center;
                    align-self: center;
                    max-width: 1280px;
                    padding: 0 16px;
                    text-align: center;
                    text-wrap: balance;
                    z-index: 1;

                    color: white;
                    mix-blend-mode: difference;

                    font-size: 2em;
                    font-family: var(--vl-regular);

                    will-change: transform, opacity;
                    transition:
                        opacity var(--scroll-transition-bezier),
                        transform var(--scroll-transition-bezier);

                    > .char {
                        display: inline-block;
                        will-change: transform, opacity;
                        transition:
                            transform 10s cubic-bezier(0, 1, 0, 1),
                            opacity 0.3s var(--scroll-transition-timing-function);
                    }
                }

                > .quote-title {
                    font-size: 144px;
                    font-family: var(--huxley-max);
                }
            }
        }
    }
</style>
