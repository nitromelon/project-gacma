<script lang="ts">
    import Pic11 from "$lib/assets/images/home/comparison/11.png";
    import language_perference, { display_text } from "$lib/components/language/config";

    const { progress }: { progress: number } = $props();
    const quote = $derived(
        display_text(
            $language_perference,
            '"Trong thời điểm khó khăn của đất nước, lực lượng hải quân mỏng, tàu thuyền chủ yếu do Trung Quốc viện trợ hoặc là chiến lợi phẩm từ thời Việt Nam Cộng hòa đã quá cũ. Lực lượng đi ra đảo dù đã chuẩn bị nhưng tàu bị hỏng máy không thể đi được."',
            '"In a period of national hardship, our naval forces were severely limited. The fleet primarily consisted of vessels provided by China or older, outdated war prizes from the former Republic of Vietnam. Despite preparations, the vessels were prone to mechanical failures, rendering them incapable of deployment."',
        ).split(" "),
    );

    const current_index = $derived(progress * quote.length);
</script>

<section class="stack-children">
    <p class="quote">
        {#each quote as char, index}
            {@const opacity = index < current_index ? 1 : 0.5}
            {@const translate_y = index < current_index ? 0 : 8}

            <span style:opacity style:transform="translateY({translate_y}px)">{char}</span>

            {#if index !== quote.length - 1}
                <span></span>
            {/if}
        {/each}
    </p>

    <div class="image-wrapper">
        <p>
            -{display_text(
                $language_perference,
                `Chuẩn Đô đốc Lê Kế Lâm`,
                `Rear Admiral Le Ke Lam`,
            )}-
        </p>
        <img class="bottom-right-image" src={Pic11} alt="" />
    </div>
</section>

<style>
    section {
        position: relative;
        height: 100vh;
        left: -1px;
        background-color: var(--light-orange);
    }

    .quote {
        padding: 64px;
        align-self: center;
        justify-self: center;
        max-width: 1280px;
        text-align: center;
        font-family: var(--vl-italic);
        font-size: 2em;
        color: white;
        mix-blend-mode: difference;
        line-height: 1.25;
        z-index: 1;

        > span {
            display: inline-block;
            will-change: opacity, transform;
            transition:
                transform 10s cubic-bezier(0, 1, 0, 1),
                opacity 0.3s var(--scroll-transition-timing-function);
        }
    }

    .image-wrapper {
        justify-self: flex-end;
        align-self: flex-end;
        display: flex;
        align-items: center;
        justify-content: center;

        > p,
        > img {
            will-change: opacity;
        }

        > p {
            font-family: var(--vl-regular);
            font-weight: 600;
            transition: opacity 1s var(--scroll-transition-timing-function);
        }

        > img {
            transition: opacity 0.5s var(--scroll-transition-timing-function);
        }
    }

    @media (hover: hover) {
        .quote:hover + .image-wrapper {
            > * {
                opacity: 0;
            }
        }
    }
</style>
