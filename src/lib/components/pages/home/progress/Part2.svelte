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
    import { LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import type { SvelteSet } from "svelte/reactivity";
    import YtbFrame from "$lib/components/iframe-youtube/YtbFrame.svelte";
    import language_perference, { display_text } from "$lib/components/language/config";

    const { progress }: { progress: number } = $props();

    const IMAGE4_TEXT = $derived(
        display_text(
            $language_perference,
            "Thuyền trưởng Vũ Huy Lễ và thủy thủ tàu HQ-505",
            "Captain Vu Huy Le and the crew of the ship HQ-505",
        ),
    );

    const IMAGE5_TEXT = $derived(
        display_text($language_perference, "Tàu HQ-505", "The ship HQ-505"),
    );

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

    const fixed_outside_slots: SvelteSet<Snippet> | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    // svelte-ignore non_reactive_update
    let video_frame_wrapper: HTMLDivElement | undefined;
    let current_youtube_id: string | null = $state(null);

    onMount(() => {
        if (fixed_outside_slots === undefined) return;
        fixed_outside_slots.add(section_on_hover);

        return () => {
            fixed_outside_slots.delete(section_on_hover);
        };
    });

    function video_wrapper_onclick(e: MouseEvent) {
        if (video_frame_wrapper === undefined) {
            current_youtube_id = null;
        }

        if (e.target === video_frame_wrapper) {
            current_youtube_id = null;
        }
    }
</script>

{#snippet section_on_hover()}
    {#if current_youtube_id !== null}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="video-frame-wrapper"
            onclick={video_wrapper_onclick}
            bind:this={video_frame_wrapper}
        >
            <div class="video-content">
                <YtbFrame title="" id={current_youtube_id} autoplay={true}></YtbFrame>
                <p class="end">
                    {display_text(
                        $language_perference,
                        `Ấn bên ngoài khu vực video để đóng video`,
                        `Click outside the video area to close the video`,
                    )}
                </p>
            </div>
        </div>
    {/if}
{/snippet}

<section class="stack-children">
    <video muted autoplay loop class="part1-video" preload="auto">
        <source src={Vid1} type="video/mp4" />
    </video>
    <div class="mask"></div>

    <h3 class="header-title" style:opacity={header_title_opacity}>
        2. {display_text($language_perference, `Bão biển`, `Sea storm`)}
    </h3>

    {#snippet part1()}
        <h4 class="heading">
            {display_text($language_perference, `Chiều 13/03/1988`, `Afternoon of March 13, 1988`)}.
        </h4>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `Ba con tàu HQ-604, HQ-605, HQ-505 rời cảng, lặng lẽ rẽ sóng tiến về Trường Sa. Trên boong tàu, những người lính trẻ chăm chú nhìn về phía chân trời, nơi có ba rạn san hô Gạc Ma, Cô Lin, Len Đao - những mảnh đất thiêng liêng của Tổ quốc giữa biển khơi.`,
                `Three ships, HQ-604, HQ-605, HQ-505, left the port, silently cutting through the waves toward the Spratly Islands. On the deck, young soldiers gazed intently toward the horizon, where three sacred coral reefs awaited: Gac Ma, Co Lin, and Len Dao - hallowed territories of the homeland amidst the open sea.`,
            )}
        </p>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `Họ mang theo cờ Tổ quốc, vật liệu xây dựng, và một nhiệm vụ thiêng liêng: cắm mốc chủ quyền. Tiếng động cơ tàu rì rầm trong đêm, hòa cùng tiếng sóng vỗ, như một khúc nhạc khắc sâu vào lòng người.`,
                `They carried with them the national flag, construction materials, and a sacred mission: to mark sovereignty. The rumble of the ship’s engines resonated through the night, blending with the sound of crashing waves, like a song engraved deep in their hearts.`,
            )}
        </p>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `Tối cùng ngày, biển động nhẹ, bầu trời tối sẫm, chỉ còn ánh đèn từ những con tàu hắt xuống mặt nước. Lực lượng Việt Nam cảnh giác cao độ khi những dấu hiệu bất thường từ hải quân Trung Quốc xuất hiện. Trên mặt biển xa, ánh sáng từ các tàu hộ vệ lấp ló, những con tàu lạ lùng lặng lẽ tiếp cận.`,
                `That evening, the sea was slightly rough, the sky darkened, with only the lights from the ships reflecting on the water. The Vietnamese forces remained on high alert as unusual signs from the Chinese navy emerged. In the far-off sea, lights from escort ships flickered, and mysterious vessels approached quietly.`,
            )}
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
        <h4 class="heading">
            {display_text($language_perference, `Rạng sáng 14/03/1988`, `Dawn of March 14, 1988`)}.
        </h4>
        <h4 class="heading">{display_text($language_perference, `Tại Gạc Ma.`, `At Gac Ma.`)}</h4>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `02:00 - Tàu HQ-604 cập Gạc Ma. Những người lính hối hả vận chuyển vật liệu, từng khối bê tông được đưa xuống đảo. Gió biển lạnh buốt nhưng không làm chùn bước những chiến sĩ đang ngày đêm giữ đảo.`,
                `02:00 - Ship HQ-604 arrived at Gac Ma. The soldiers hurriedly transported materials, with each block of concrete being brought to the island. The cold sea wind did not deter those soldiers, tirelessly defending the island day and night.`,
            )}
        </p>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `04:30 - Tiếng loa phóng thanh từ tàu chiến Trung Quốc xé toang màn đêm: "Rời khỏi đây ngay lập tức!". Trên boong tàu HQ-604, những chiến sĩ siết chặt tay nhau. Họ biết cuộc đối đầu không thể tránh khỏi.`,
                `04:30 - The loudspeakers from Chinese warships tore through the darkness: "Leave here immediately!" On the deck of HQ-604, the soldiers clenched their hands tightly. They knew that confrontation was inevitable.`,
            )}
        </p>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `06:00 - Những bóng áo lính Trung Quốc nhảy xuống đảo, áp sát lá cờ đỏ sao vàng đang tung bay. Thiếu úy Trần Văn Phương lao đến, ôm chặt lá cờ vào lòng. "Thà hy sinh chứ không để mất đảo!" - tiếng hô dõng dạc của anh vang lên giữa tiếng sóng dữ. Một loạt súng nổ vang. Anh ngã xuống, máu loang trên cát trắng.`,
                `06:00 - Chinese soldiers jumped onto the island, closing in on the red flag with a golden star fluttering in the wind. Lieutenant Tran Van Phuong rushed forward, embracing the flag against his chest. "Better to die than to lose the island!" - his powerful shout echoed amid the raging waves. A burst of gunfire erupted. He fell, blood staining the white sand.`,
            )}
        </p>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `06:30 - Pháo từ tàu Trung Quốc rền vang. HQ-604 trúng đạn, bốc cháy dữ dội. Những người lính trên tàu bị hất văng xuống biển. Sóng cuộn đỏ màu máu. 64 chiến sĩ Việt Nam đã nằm lại giữa lòng biển xanh, hóa thành những tượng đài bất tử.`,
                `06:30 - The cannons from Chinese ships roared. HQ-604 was hit and engulfed in fierce flames. The soldiers on the ship were thrown into the sea. Waves swirled with the crimson of blood. Sixty-four Vietnamese soldiers perished in the depths of the blue ocean, transformed into eternal monuments.`,
            )}
        </p>
    {/snippet}

    {#snippet part3()}
        <h4 class="heading">{display_text($language_perference, `Tại Cô Lin.`, `At Co Lin.`)}</h4>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `07:00 - Tiếng gầm rú của động cơ. Thuyền trưởng Vũ Huy Lễ hạ lệnh: "Lao tàu lên đảo!". HQ-505 tăng tốc, lao thẳng lên bãi san hô Cô Lin trong làn đạn dày đặc. Con tàu biến thành cột mốc chủ quyền sống. Những chiến sĩ trên tàu không ai nao núng, súng trên tay sẵn sàng chiến đấu.`,
                `07:00 - The roar of engines filled the air. Captain Vu Huy Le ordered: "Drive the ship onto the island!" HQ-505 accelerated, charging straight onto the Co Lin reef amid a barrage of gunfire. The ship became a living sovereignty marker. The soldiers on board showed no fear, weapons in hand, ready to fight.`,
            )}
        </p>
    {/snippet}

    {#snippet part4()}
        <h4 class="heading">{display_text($language_perference, `Tại Len Đao.`, `At Len Dao.`)}</h4>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `07:15 - HQ-605 tiếp cận Len Đao, lá cờ Việt Nam được cắm xuống. Ngay sau đó, pháo từ tàu Trung Quốc trút xuống như mưa. HQ-605 trúng đạn, bùng cháy giữa biển. Nhưng Len Đao vẫn thuộc về Việt Nam.`,
                `07:15 - HQ-605 approached Len Dao, and the Vietnamese flag was planted. Immediately after, Chinese artillery rained down like a storm. HQ-605 was struck, engulfed in flames in the middle of the sea. But Len Dao remained in Vietnamese hands.`,
            )}
        </p>
        <h3 class="heading">
            {display_text($language_perference, `Sáng 14/03/1988`, `Morning of March 14, 1988`)}.
        </h3>
        <p class="paragraph">
            {display_text(
                $language_perference,
                `08:00 - Trung Quốc chiếm Gạc Ma, cắm cờ lên đảo. Nhưng Cô Lin và Len Đao vẫn nằm trong tay những người lính Việt Nam kiên cường. Biển lặng lại sau những trận pháo, nhưng nỗi đau và sự hy sinh vẫn còn đó. Những chiến sĩ ngã xuống ngày hôm ấy đã hóa thành sóng nước, thành những ngọn gió hát mãi bản hùng ca về lòng quả cảm và tinh thần bất khuất của dân tộc.`,
                `08:00 - China occupied Gac Ma, raising its flag on the island. But Co Lin and Len Dao remained held by the steadfast Vietnamese soldiers. The sea grew calm after the artillery barrages, but the pain and sacrifice lingered. The soldiers who fell that day became the waves and the winds, singing forever the epic of courage and the indomitable spirit of the nation.`,
            )}
        </p>
    {/snippet}

    <PageBase
        progress={first_part_progress}
        place="-"
        date={display_text($language_perference, `Chiều 13/03/1988`, `Afternoon of March 13, 1988`)}
        content={part1}
    ></PageBase>

    <PageBase
        progress={second_part_progress}
        place={display_text($language_perference, `Tại Gạc Ma.`, `At Gac Ma.`)}
        date={display_text($language_perference, `Rạng sáng 14/03/1988`, `Dawn of March 14, 1988`)}
        content={part2}
        times={[120, 390]}
    ></PageBase>

    <PageBase
        progress={third_part_progress}
        place={display_text($language_perference, `Tại Cô Lin.`, `At Co Lin.`)}
        date={display_text($language_perference, `Rạng sáng 14/03/1988`, `Dawn of March 14, 1988`)}
        content={part3}
        times={[420, 420]}
    ></PageBase>

    <PageBase
        progress={forth_part_progress}
        place={display_text($language_perference, `Tại Len Đao.`, `At Len Dao.`)}
        date={display_text($language_perference, `Sáng 14/03/1988`, `Morning, March 14, 1988`)}
        content={part4}
        times={[435, 480]}
    ></PageBase>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="video-section-wrapper"
        style:z-index={forth_part_progress === 1 ? 1 : -1}
        style:opacity={final_part_transition}
        style:transform="translateY({final_part_transform}px)"
    >
        <h3 class="video-header-title">
            3. {display_text(
                $language_perference,
                `Phỏng vấn các cựu chiến binh`,
                `Interview with veterans`,
            )}
        </h3>

        <div
            class="img-wrapper image-wrapper1"
            onclick={() => {
                current_youtube_id = display_text(
                    $language_perference,
                    "UNNRGKUnru8",
                    "34435RmQjYo",
                );
            }}
        >
            <img src={Pic6} alt="" />
            <h5>
                {display_text($language_perference, `Cựu binh Lê Văn Đông`, `Veteran Le Van Dong`)}
            </h5>
            <p>
                ({display_text(
                    $language_perference,
                    `Cựu chiến sĩ Gạc Ma`,
                    `Veteran of the Gac Ma battle`,
                )})
            </p>
        </div>
        <div
            class="img-wrapper image-wrapper2"
            onclick={() => {
                current_youtube_id = display_text(
                    $language_perference,
                    "14LAszAefYc",
                    "f9N_N9h-dkQ",
                );
            }}
        >
            <img src={Pic7} alt="" />
            <h5>
                {display_text(
                    $language_perference,
                    `Cựu binh Nguyễn Văn Thống`,
                    `Veteran Nguyen Van Thong`,
                )}
            </h5>
            <p>
                ({display_text(
                    $language_perference,
                    `Cựu chiến sĩ Gạc Ma`,
                    `Veteran of the Gac Ma battle`,
                )})
            </p>
        </div>
        <div
            class="img-wrapper image-wrapper3"
            onclick={() => {
                current_youtube_id = display_text(
                    $language_perference,
                    "z2QxJn00hCE",
                    "gVGbk4DQwRg",
                );
            }}
        >
            <img src={Pic8} alt="" />
            <h5>{display_text($language_perference, `Đại tá Vũ Huy Lễ`, `Colonel Vu Huy Le`)}</h5>
            <p>
                ({display_text(
                    $language_perference,
                    `Nguyên thuyền trưởng tàu HQ-505`,
                    `Former Captain of the ship HQ-505`,
                )})
            </p>
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
        font-size: 72px;
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
        grid-template-rows: 64px auto 1fr 64px;
        will-change: z-index, opacity, transform;
        transition:
            opacity 0.5s var(--scroll-transition-timing-function),
            transform var(--scroll-transition-bezier);

        > .image-wrapper1 {
            grid-area: 3/2;
        }

        > .image-wrapper2 {
            grid-area: 3/3;
        }

        > .image-wrapper3 {
            grid-area: 3/4;
        }

        > .img-wrapper {
            cursor: pointer;
            will-change: transform;
            align-content: center;
            transition: transform 1s cubic-bezier(0, 1, 0, 1);

            > img {
                transform: scale(0.8);
            }

            > h5,
            > p {
                text-align: center;
                font-family: var(--vl-regular);
                color: var(--tan);
                text-wrap: balance;
            }

            > h5 {
                font-weight: 600;
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

        > .video-header-title {
            grid-row: 2;
            grid-column: 2 / span 3;
            font-size: 72px;
            font-family: var(--huxley-max);
            color: var(--tan);
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .video-frame-wrapper {
        position: fixed;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(50px);

        > .video-content {
            position: relative;
            height: 64%;
            aspect-ratio: 16/9;
            background-color: rgba(0, 0, 0, 0.7);

            > .end {
                position: absolute;
                font-family: "VlRegular", san-serif;
                color: #efe4d1;
                bottom: -36px;
                text-align: center;
                width: 100%;
            }
        }
    }
</style>
