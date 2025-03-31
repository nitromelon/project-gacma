<script>
    import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";

    const title = "[Gạc Ma: Vòng tròn bất tử]: Tổng quan về quần đảo Trường Sa";
</script>

<section>
    <div class="wrapper top-wrapper">
        <p>BA ĐẢO</p>
        <p>TỔNG QUAN VỀ QUẦN ĐẢO TRƯỜNG SA</p>
    </div>
    <div class="wrapper center-wrapper">
        <div class="video-wrapper">
            <p>Video | {title}</p>
            <YtbFrame {title} id="zmeXYMxpd-8"></YtbFrame>
        </div>
    </div>
    <div class="wrapper bottom-wrapper">
        <p>GẠC MA</p>
        <p>CÔ LIN</p>
        <p>LEN ĐAO</p>
    </div>
</section>

<style>
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
