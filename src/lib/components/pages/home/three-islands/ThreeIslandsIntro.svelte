<script lang="ts">
    import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";
    import language_perference, { display_text } from "$lib/components/language/config";

    const title = $derived(
        display_text(
            $language_perference,
            "[Gạc Ma: Vòng tròn bất tử]: Tổng quan về quần đảo Trường Sa",
            "[Gac Ma: Immortal Circle]: Overview of the Spratly Islands",
        ),
    );

    const video_url = $derived(display_text($language_perference, "zmeXYMxpd-8", "Vl8wWqx703M"));
</script>

<h2 class="intro-header">
    II. {display_text($language_perference, "Nơi đầu sóng", "The forefront")}
</h2>

<section>
    <div class="wrapper top-wrapper">
        <p>{display_text($language_perference, `Phần`, `Part`)} 1</p>
        <p>
            {display_text(
                $language_perference,
                `TỔNG QUAN VỀ QUẦN ĐẢO TRƯỜNG SA`,
                `OVERVIEW OF THE SPARTLY ISLANDS`,
            )}
        </p>
    </div>
    <div class="wrapper center-wrapper">
        <div class="video-wrapper">
            <p>Video | {title}</p>
            <YtbFrame {title} id={video_url}></YtbFrame>
        </div>
    </div>
    <div class="wrapper bottom-wrapper">
        <p>{display_text($language_perference, `GẠC MA`, `GAC MA`)}</p>
        <p>{display_text($language_perference, `CÔ LIN`, `CO LIN`)}</p>
        <p>{display_text($language_perference, `LEN ĐAO`, `LEN DAO`)}</p>
    </div>
</section>

<style>
    .intro-header {
        text-align: center;
        font-size: 144px;
        font-family: var(--huxley-max);
        color: var(--tan);
        padding-bottom: 16px;
        padding-top: 64px;
    }

    section {
        position: relative;
        height: 100vh;
        width: 100%;
        contain: strict;

        > .wrapper {
            position: relative;
        }
    }

    .top-wrapper,
    .bottom-wrapper {
        contain: strict;
        height: 10%;
        padding: 0 64px;
    }

    .center-wrapper {
        height: 80%;
    }

    .top-wrapper,
    .bottom-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: var(--huxley-max);
        color: var(--tan);
        font-size: 18px;
    }

    .center-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        > .video-wrapper {
            position: relative;
            height: 80%;
            aspect-ratio: 16 / 9;
            border: 1px solid black;

            > p {
                position: absolute;
                transform: translateY(calc(-100% - 11px));
                font-size: 11px;
                color: var(--tan);
                font-family: var(--vl-regular);
            }
        }
    }
</style>
