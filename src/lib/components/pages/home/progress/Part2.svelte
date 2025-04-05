<script lang="ts">
    import Vid1 from "$lib/assets/videos/home/progress/1.mov";
    import {
        limited_range,
        limited_range_max,
        limited_range_min,
    } from "$lib/normalized_limited_range/limited";
    import PageBase from "./part2-pages/PageBase.svelte";
    import Pic4 from "$lib/assets/images/home/progress/4.jpg";
    import Pic5 from "$lib/assets/images/home/progress/5.jpg";
    import Pic6 from "$lib/assets/images/home/progress/6.png";
    import Pic7 from "$lib/assets/images/home/progress/7.png";
    import Pic8 from "$lib/assets/images/home/progress/8.png";
    import { normalized_range } from "$lib/normalized_limited_range/normalized";

    const { progress }: { progress: number } = $props();

    const IMAGE4_TEXT = "Thuyền trưởng Vũ Huy Lễ và thủy thủ tàu HQ-505";
    const IMAGE5_TEXT = "Tàu HQ-505";
    const END_HEADER_INTRO = 0.0625;
    const END_FIRST_PART = 0.3125;
    const END_SECOND_PART = 0.46875;
    const END_THIRD_PART = 0.625;
    const END_FORTH_PART = 0.78125;

    const first_part_progress = $derived(limited_range(progress, END_HEADER_INTRO, END_FIRST_PART));
    const second_part_progress = $derived(limited_range(progress, END_FIRST_PART, END_SECOND_PART));
    const third_part_progress = $derived(limited_range(progress, END_SECOND_PART, END_THIRD_PART));
    const forth_part_progress = $derived(limited_range(progress, END_THIRD_PART, END_FORTH_PART));
    const three_vids_appeared = $derived(limited_range_min(progress, END_FORTH_PART));

    const header_title_opacity = $derived(1 - limited_range_max(first_part_progress, 0.25));

    const final_part_transition = $derived(limited_range_max(three_vids_appeared, 0.025));
    const final_part_transform = $derived(normalized_range(final_part_transition, 32, 0));
</script>

<section class="stack-children">
    <video muted autoplay loop class="part1-video" preload="auto">
        <source src={Vid1} type="video/mp4" />
    </video>
    <div class="mask"></div>

    <h3 class="header-title" style:opacity={header_title_opacity}>
        Diễn biến trong <br />
        trận Gạc Ma
    </h3>

    {#snippet part1()}
        <h4 class="heading">Chiều 13/03/1988.</h4>
        <p class="paragraph">
            Ba con tàu HQ-604, HQ-605, HQ-505 rời cảng, lặng lẽ rẽ sóng tiến về Trường Sa. Trên
            boong tàu, những người lính trẻ chăm chú nhìn về phía chân trời, nơi có ba rạn san hô
            Gạc Ma, Cô Lin, Len Đao - những mảnh đất thiêng liêng của Tổ quốc giữa biển khơi.
        </p>
        <p class="paragraph">
            Họ mang theo cờ Tổ quốc, vật liệu xây dựng, và một nhiệm vụ thiêng liêng: cắm mốc chủ
            quyền. Tiếng động cơ tàu rì rầm trong đêm, hòa cùng tiếng sóng vỗ, như một khúc nhạc
            khắc sâu vào lòng người.
        </p>
        <p class="paragraph">
            Tối cùng ngày, biển động nhẹ, bầu trời tối sẫm, chỉ còn ánh đèn từ những con tàu hắt
            xuống mặt nước. Lực lượng Việt Nam cảnh giác cao độ khi những dấu hiệu bất thường từ hải
            quân Trung Quốc xuất hiện. Trên mặt biển xa, ánh sáng từ các tàu hộ vệ lấp ló, những con
            tàu lạ lùng lặng lẽ tiếp cận.
        </p>

        <div class="image-wrapper">
            <img src={Pic4} alt={IMAGE4_TEXT} srcset="" />
            <p>{IMAGE4_TEXT}</p>
        </div>

        <div class="image-wrapper">
            <img src={Pic5} alt={IMAGE5_TEXT} srcset="" />
            <p>{IMAGE5_TEXT}</p>
        </div>
    {/snippet}

    {#snippet part2()}
        <h4 class="heading">Rạng sáng 14/03/1988.</h4>
        <h4 class="heading">Tại Gạc Ma.</h4>
        <p class="paragraph">
            02:00 - Tàu HQ-604 cập Gạc Ma. Những người lính hối hả vận chuyển vật liệu, từng khối bê
            tông được đưa xuống đảo. Gió biển lạnh buốt nhưng không làm chùn bước những chiến sĩ
            đang ngày đêm giữ đảo.
        </p>
        <p class="paragraph">
            04:30 - Tiếng loa phóng thanh từ tàu chiến Trung Quốc xé toang màn đêm: "Rời khỏi đây
            ngay lập tức!". Trên boong tàu HQ-604, những chiến sĩ siết chặt tay nhau. Họ biết cuộc
            đối đầu không thể tránh khỏi.
        </p>
        <p class="paragraph">
            06:00 - Những bóng áo lính Trung Quốc nhảy xuống đảo, áp sát lá cờ đỏ sao vàng đang tung
            bay. Thiếu úy Trần Văn Phương lao đến, ôm chặt lá cờ vào lòng. "Thà hy sinh chứ không để
            mất đảo!" - tiếng hô dõng dạc của anh vang lên giữa tiếng sóng dữ. Một loạt súng nổ
            vang. Anh ngã xuống, máu loang trên cát trắng.
        </p>
        <p class="paragraph">
            06:30 - Pháo từ tàu Trung Quốc rền vang. HQ-604 trúng đạn, bốc cháy dữ dội. Những người
            lính trên tàu bị hất văng xuống biển. Sóng cuộn đỏ màu máu. 64 chiến sĩ Việt Nam đã nằm
            lại giữa lòng biển xanh, hóa thành những tượng đài bất tử.
        </p>
    {/snippet}

    {#snippet part3()}
        <h4 class="heading">Tại Cô Lin.</h4>
        <p class="paragraph">
            07:00 - Tiếng gầm rú của động cơ. Thuyền trưởng Vũ Huy Lễ hạ lệnh: "Lao tàu lên đảo!".
            HQ-505 tăng tốc, lao thẳng lên bãi san hô Cô Lin trong làn đạn dày đặc. Con tàu biến
            thành cột mốc chủ quyền sống. Những chiến sĩ trên tàu không ai nao núng, súng trên tay
            sẵn sàng chiến đấu.
        </p>
    {/snippet}

    {#snippet part4()}
        <h4 class="heading">Tại Len Đao.</h4>
        <p class="paragraph">
            07:15 - HQ-605 tiếp cận Len Đao, lá cờ Việt Nam được cắm xuống. Ngay sau đó, pháo từ tàu
            Trung Quốc trút xuống như mưa. HQ-605 trúng đạn, bùng cháy giữa biển. Nhưng Len Đao vẫn
            thuộc về Việt Nam.
        </p>
        <h3 class="heading">Sáng 14/03/1988.</h3>
        <p class="paragraph">
            08:00 - Trung Quốc chiếm Gạc Ma, cắm cờ lên đảo. Nhưng Cô Lin và Len Đao vẫn nằm trong
            tay những người lính Việt Nam kiên cường. Biển lặng lại sau những trận pháo, nhưng nỗi
            đau và sự hy sinh vẫn còn đó. Những chiến sĩ ngã xuống ngày hôm ấy đã hóa thành sóng
            nước, thành những ngọn gió hát mãi bản hùng ca về lòng quả cảm và tinh thần bất khuất
            của dân tộc.
        </p>
    {/snippet}

    <PageBase progress={first_part_progress} place="-" date="Chiều 13/03/1988" content={part1}
    ></PageBase>

    <PageBase
        progress={second_part_progress}
        place="Tại Gạc Ma"
        date="Rạng sáng 14/03/1988"
        content={part2}
        times={[120, 390]}
    ></PageBase>

    <PageBase
        progress={third_part_progress}
        place="Tại Cô Lin"
        date="Rạng sáng 14/03/1988"
        content={part3}
        times={[420, 420]}
    ></PageBase>

    <PageBase
        progress={forth_part_progress}
        place="Tại Len Đao"
        date="Sáng 14/03/1988"
        content={part4}
        times={[435, 480]}
    ></PageBase>

    <div
        class="video-section-wrapper"
        style:z-index={forth_part_progress === 1 ? 1 : -1}
        style:opacity={final_part_transition}
        style:transform="translateY({final_part_transform}px)"
    >
        <div class="img-wrapper image-wrapper1">
            <h4>Video 1</h4>
            <img src={Pic6} alt="" />
            <h5>Cựu binh Lê Văn Đông</h5>
            <p>(Cựu chiến sĩ Gạc Ma)</p>
        </div>
        <div class="img-wrapper image-wrapper2">
            <h4>Video 1</h4>
            <img src={Pic7} alt="" />
            <h5>Cựu binh Nguyễn Văn Thống</h5>
            <p>(Cựu chiến sĩ Gạc Ma)</p>
        </div>
        <div class="img-wrapper image-wrapper3">
            <h4>Video 3</h4>
            <img src={Pic8} alt="" />
            <h5>Đại tá Vũ Huy Lễ</h5>
            <p>(Nguyên thuyền trưởng tàu HQ-505)</p>
        </div>
    </div>
</section>

<style>
    section {
        height: 100vh;
        contain: strict;
        align-items: center;
        justify-items: center;

        > video {
            height: 100%;
            width: 100%;
            object-fit: cover;
            overflow: hidden;
        }

        > .mask {
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    .image-wrapper {
        width: 100%;
        max-width: 480px;
        margin: auto;

        > img {
            width: 100%;
        }

        > p {
            padding: 0 64px;
            font-size: 11px;
            text-align: center;
            text-wrap: balance;
            margin-top: 5px;
        }
    }

    .header-title {
        align-self: flex-start;
        justify-self: flex-start;
        transform: translate(64px, 64px);
        font-size: 48px;
        font-family: var(--huxley-max);
        color: var(--tan);

        will-change: opacity;
        transition: opacity var(--scroll-transition-bezier);
    }

    .heading,
    .paragraph,
    .image-wrapper {
        font-family: var(--vl-regular);
        margin-bottom: 16px;
        color: var(--tan);
    }

    .heading {
        font-size: 24px;
        font-weight: 600;
    }

    .paragraph {
        line-height: 1.25;
        text-align: justify;
    }

    .video-section-wrapper {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 64px repeat(3, 1fr) 64px;
        grid-template-rows: 64px 1fr 64px;
        will-change: z-index, opacity, transform;
        transition:
            opacity 0.5s var(--scroll-transition-timing-function),
            transform var(--scroll-transition-bezier);

        align-items: center;

        > .image-wrapper1 {
            grid-area: 2/2;
        }

        > .image-wrapper2 {
            grid-area: 2/3;
        }

        > .image-wrapper3 {
            grid-area: 2/4;
        }

        > .img-wrapper {
            cursor: pointer;
            will-change: transform;
            transition: transform 1s cubic-bezier(0, 1, 0, 1);

            > img {
                transform: scale(0.8);
            }

            > h4,
            > h5,
            > p {
                text-align: center;
                font-family: var(--vl-regular);
                color: var(--tan);
                text-wrap: balance;
            }

            > h4,
            > h5 {
                font-weight: 600;
            }

            > h4 {
                font-size: 36px;
            }

            > h5 {
                margin-bottom: 4px;
            }
        }

        @media (hover: hover) {
            .img-wrapper:hover {
                transform: scale(1.1);
            }
        }

        .img-wrapper:active {
            transform: scale(1);
        }
    }
</style>
