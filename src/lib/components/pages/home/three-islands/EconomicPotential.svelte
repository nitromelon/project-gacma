<script lang="ts">
    import { limited_range_max } from "$lib/normalized_limited_range/limited";

    const { progress }: { progress: number } = $props();
    const INTRO_TEXT_QUOTE =
        '"Quần đảo Trường Sa nói chung và ba đảo Gạc Ma - Cô Lin - Len Đao nói riêng không chỉ có ý nghĩa về mặt an ninh quốc phòng mà còn mang lại giá trị kinh tế lớn."'.split(
            " ",
        );

    const FIRST_INTRO_HEADER_TEXT = "TIỀM NĂNG";
    const SECOND_INTRO_HEADER_TEXT = "KINH TẾ CỦA";
    const THIRD_INTRO_HEADER_TEXT = "BA ĐẢO";

    const END_QUOTE_DISPLAY = 0.8;
    const quote_display_progress = $derived(limited_range_max(progress, END_QUOTE_DISPLAY));
    const current_index = $derived(Math.round(quote_display_progress * INTRO_TEXT_QUOTE.length));

    const header_text_reveal_progress = $derived(limited_range_max(quote_display_progress, 0.75));
    const current_first_intro_header_index = $derived(
        header_text_reveal_progress * FIRST_INTRO_HEADER_TEXT.length,
    );
    const current_second_intro_header_index = $derived(
        header_text_reveal_progress * SECOND_INTRO_HEADER_TEXT.length,
    );
    const current_third_intro_header_index = $derived(
        header_text_reveal_progress * SECOND_INTRO_HEADER_TEXT.length,
    );
</script>

<section class="stack-children">
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
</section>

<style>
    section {
        height: 100vh;
        contain: strict;
    }

    .intro-header {
        height: 100%;
        width: 100%;
        padding: 64px;
        font-size: 156px;
        > .layout {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: var(--vl-regular);
            color: hsl(223, 20%, 42%);

            > .second {
                align-self: center;
            }

            > .third {
                align-self: flex-end;
            }
        }
    }

    .intro-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        > .quote {
            font-family: var(--vl-regular);
            text-align: center;
            text-wrap: balance;
            padding: 0 16px;
            font-size: 2em;
            max-width: 1280px;
            /* color: white;
            mix-blend-mode: difference; */
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
</style>
