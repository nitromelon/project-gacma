<script lang="ts">
    import {
        limited_range,
        limited_range_max,
        limited_range_min,
    } from "$lib/normalized_limited_range/limited";
    import Pic1 from "$lib/assets/images/home/threeislands/1.png";
    import Pic1_EN from "$lib/assets/images/home/threeislands/en/1.svg";
    import language_perference, { display_text } from "$lib/components/language/config";

    const { progress }: { progress: number } = $props();
    const INTRO_TEXT_QUOTE = $derived(
        display_text(
            $language_perference,
            '"Quần đảo Trường Sa nói chung và ba đảo Gạc Ma - Cô Lin - Len Đao nói riêng không chỉ có ý nghĩa về mặt an ninh quốc phòng mà còn mang lại giá trị kinh tế lớn."',
            '"The Spratly Islands in general, and the three islands of Gac Ma, Co Lin, and Len Dao in particular, are not only significant in terms of national defense but also hold great economic value."',
        ).split(" "),
    );

    const FIRST_INTRO_HEADER_TEXT = $derived(
        display_text($language_perference, "PHẦN 2: TIỀM NĂNG", "PART 2: MARITIME"),
    );
    const SECOND_INTRO_HEADER_TEXT = $derived(
        display_text($language_perference, "KINH TẾ CỦA", "ECONOMIC POTENTIAL OF"),
    );
    const THIRD_INTRO_HEADER_TEXT = $derived(
        display_text($language_perference, "BA ĐẢO", "THE THREE ISLANDS"),
    );

    const END_QUOTE_DISPLAY = 0.27;
    const END_MOVING_FROM_QUOTE = 0.7;

    const quote_display_progress = $derived(limited_range_max(progress, END_QUOTE_DISPLAY));
    const current_index = $derived(Math.round(quote_display_progress * INTRO_TEXT_QUOTE.length));

    const header_text_reveal_progress = $derived(limited_range_max(quote_display_progress, END_MOVING_FROM_QUOTE));
    const current_first_intro_header_index = $derived(
        header_text_reveal_progress * FIRST_INTRO_HEADER_TEXT.length,
    );
    const current_second_intro_header_index = $derived(
        header_text_reveal_progress * SECOND_INTRO_HEADER_TEXT.length,
    );
    const current_third_intro_header_index = $derived(
        header_text_reveal_progress * SECOND_INTRO_HEADER_TEXT.length,
    );

    const moving_from_quote_progress = $derived(
        limited_range(progress, END_QUOTE_DISPLAY, END_MOVING_FROM_QUOTE),
    );

    const reversed_moving_from_quote_progress = $derived(1 - moving_from_quote_progress);

    const end_section = $derived(limited_range_min(progress, END_MOVING_FROM_QUOTE));
</script>

<section
    class="section1 stack-children"
    style:transform="translate({-75 * moving_from_quote_progress - 25 * end_section}%, {-25 *
        moving_from_quote_progress}%)"
>
    <div class="intro-header">
        <div class="layout">
            <h2 class="first">
                {#each FIRST_INTRO_HEADER_TEXT as char, index}
                    {@const opacity = index < current_first_intro_header_index ? 1 : 0.5}
                    <span style:opacity>{char}</span>
                {/each}
            </h2>
            <h2 class="second">
                {#each SECOND_INTRO_HEADER_TEXT as char, index}
                    {@const opacity = index < current_second_intro_header_index ? 1 : 0.5}
                    <span style:opacity>{char}</span>
                {/each}
            </h2>
            <h2 class="third">
                {#each THIRD_INTRO_HEADER_TEXT as char, index}
                    {@const opacity = index < current_third_intro_header_index ? 1 : 0.5}
                    <span style:opacity>{char}</span>
                {/each}
            </h2>
        </div>
    </div>
    <div class="intro-wrapper">
        <p class="quote">
            {#each INTRO_TEXT_QUOTE as char, index}
                {@const transform = index + 0.5 <= current_index ? 0 : 8}
                {@const opacity = index + 0.5 <= current_index ? 1 : 0.5}
                <span style:transform="translateY({transform}px)" style:opacity>{char}</span>
                {#if index !== INTRO_TEXT_QUOTE.length - 1}
                    <span></span>
                {/if}
            {/each}
        </p>
    </div>
    <div class="line"></div>
</section>

<section
    class="section2"
    style:transform="translate({100 * reversed_moving_from_quote_progress}%, {25 *
        reversed_moving_from_quote_progress}%)"
>
    <div class="left">
        <img src={display_text($language_perference, Pic1, Pic1_EN)} alt="" />
        <p>
            {display_text($language_perference, "Nguồn", "Source")}: (Trần et al., 2015), (TTXVN, 2017)
        </p>
    </div>
    <div class="right">
        <div class="wrapper">
            <h3>{display_text($language_perference, `Nguồn lợi thủy sản`, `Marine resources`)}</h3>
            <p>
                {display_text(
                    $language_perference,
                    `Khu vực quanh ba đảo có nguồn hải sản phong phú, là ngư trường quan trọng của ngư dân Việt Nam. Việc bảo vệ chủ quyền cũng đồng nghĩa với việc bảo vệ quyền khai thác hợp pháp của ngư dân.`,
                    `The area around these islands is rich in seafood, serving as an important fishing ground for Vietnamese fishermen. Protecting sovereignty also means safeguarding the legal fishing rights of the fishermen.`,
                )}
            </p>
            <h3>
                {display_text(
                    $language_perference,
                    `Dầu khí và tài nguyên biển`,
                    `Oil and marine resources`,
                )}
            </h3>
            <p>
                {display_text(
                    $language_perference,
                    `Biển Đông được đánh giá là khu vực có trữ lượng dầu khí lớn, là nguồn tài nguyên quan trọng phục vụ phát triển kinh tế Việt Nam.`,
                    `The East Vietnam Sea is considered to have large oil and gas reserves, which are vital resources for Vietnam’s economic development.`,
                )}
            </p>
            <h3>{display_text($language_perference, `Hỗ trợ hàng hải`, `Maritime support`)}</h3>
            <p>
                {display_text(
                    $language_perference,
                    `Các đảo này có thể được phát triển thành các trạm hậu cần nghề cá, cung cấp nhiên liệu, nước ngọt và dịch vụ sửa chữa cho tàu thuyền hoạt động trong khu vực.`,
                    `These islands can be developed into fishery logistics stations, providing fuel, freshwater, and repair services for vessels operating in the area.`,
                )}
            </p>
        </div>
    </div>
</section>

<style>
    section {
        height: 100vh;
        contain: strict;
    }

    .section1,
    .section2 {
        will-change: transform;
        transition: transform var(--scroll-transition-bezier);
    }

    .section1 {
        > .intro-header {
            height: 100%;
            width: 100%;
            padding: 64px;
            font-size: 72px;
            > .layout {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-family: var(--vl-regular);
                color: hsl(223, 20%, 50%);
                gap: 32px;

                > .second {
                    align-self: center;
                }

                > .third {
                    align-self: flex-end;
                }
            }
        }

        > .intro-wrapper {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            > .quote {
                font-family: var(--vl-regular);
                text-align: center;
                text-wrap: balance;
                padding: 0 64px;
                font-size: 2em;
                max-width: 1280px;
                color: var(--tan);

                > span {
                    display: inline-block;
                    will-change: transform, opacity;
                    transition:
                        transform 10s cubic-bezier(0, 1, 0, 1),
                        opacity 0.3s var(--scroll-transition-timing-function);
                }
            }
        }

        > .line {
            height: 8px;
            width: 128px;
            border: 1px solid var(--tan);
            border-right: none;
            border-left: none;
            align-self: flex-end;
            justify-self: center;
            margin-bottom: 64px;
        }
    }

    .section2 {
        position: relative;
        margin-top: -100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 64px;
        padding: 0 64px;

        color: var(--tan);
        font-family: var(--vl-regular);

        > * {
            flex: 1;
        }

        > .left {
            > img {
                margin-bottom: 16px;
                width: 100%;
            }

            > p {
                text-align: center;
            }
        }

        > .right {
            display: flex;
            justify-content: center;
            > .wrapper {
                max-width: 720px;
                > h3 {
                    margin: 16px 0;
                    font-size: 24px;
                    font-weight: 600;
                }

                > p {
                    text-align: justify;
                    line-height: 1.25;
                    margin-bottom: 32px;
                }
            }
        }
    }
</style>
