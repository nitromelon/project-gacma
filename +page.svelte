<script lang="ts">
    import {
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import ThreeIslandsPic1 from "$lib/assets/images/home/threeislands/3.png";
    import ThreeIslandsPic1_EN from "$lib/assets/images/home/threeislands/en/3.svg";
    import ComparisonPic10 from "$lib/assets/images/home/comparison/10.svg";
    import ComparisonPic10_EN from "$lib/assets/images/home/comparison/en/10.svg";
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
    import language_perference, {
        display_text,
        LayoutLanguage,
    } from "$lib/components/language/config";

    const fixed_slots: SvelteSet<Snippet> | undefined = getContext(
        LAYOUT_INSIDE_ROOT_SLOTS_KEYWORD,
    );
    const fixed_outside_slots: SvelteSet<Snippet> | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    fixed_slots?.add(inside_root_section);
    fixed_outside_slots?.add(outside_root_section);

    const MENU_STRUCTURE = $derived([
        {
            heading: `I. ${display_text($language_perference, "Sóng ngầm", "Background")}`,
            target: "songngam",
        },
        {
            heading: `II. ${display_text($language_perference, "Nơi đầu sóng", "The forefront")}`,
            target: "noidausong",
        },
        {
            heading: `III. ${display_text($language_perference, `Thế trận không cân sức`, `An unequal battle`)}`,
            target: "ttkcs",
        },
        {
            heading: `IV. ${display_text($language_perference, `Diễn biến`, `Process`)}`,
            target: "dienbien",
        },
        {
            heading: `V. ${display_text($language_perference, `Sau cơn bão`, `After the storm`)}`,
            target: "sauconbao",
        },
        {
            heading: `VI. ${display_text(
                $language_perference,
                "Khắc tên vào biển",
                "Engraving names into the sea",
            )}`,
            heading2: `${display_text(
                $language_perference,
                "Giữ trọn chủ quyền",
                "Retaining full sovereighty",
            )}`,
            target: "ktvb",
        },
        {
            heading: `VII. ${display_text($language_perference, `Thực hiện bởi`, `Credits`)}`,
            target: "thuchienboi",
        },
    ]);

    const three_islands_video1_title = $derived(
        display_text(
            $language_perference,
            `[Gạc Ma: Vòng tròn bất tử]: Vị trí chiến lược ba bãi đá`,
            `[Gac Ma: Immortal circle]: Strategic location of three rock islands`,
        ),
    );

    const comparison_pic10_title = $derived(
        display_text(
            $language_perference,
            "Đánh giá tương quan lực lượng",
            "Assessment of force correlation",
        ),
    );

    const comparison_video1_title = $derived(
        display_text(
            $language_perference,
            `[Gạc Ma: Vòng tròn bất tử]: Chia sẻ của cựu binh Lê Hữu Thảo về Tương Quan Lực Lượng của trận Gạc Ma`,
            `[Gac Ma: Immortal Circle]: Veteran Le Huu Thao sharing about the Correlation of Forces`,
        ),
    );

    const comparison_video1_id = $derived(
        display_text($language_perference, `dgSSWmBfgcw`, `IXOKwnWn8b4`),
    );

    const result_video1_title = $derived(
        display_text(
            $language_perference,
            "[Gạc Ma - Vòng tròn bất tử]: Sau cơn bão",
            "[Gạc Ma - Immortal Circle]: After the storm",
        ),
    );

    const meaning_video1_title = $derived(
        display_text(
            $language_perference,
            "[Gạc Ma - Vòng tròn bất tử]: Khắc tên vào biển - Giữ trọn chủ quyền",
            "[Gạc Ma - Immortal Circle]: Engraving names into the sea - Retaining full sovereighty",
        ),
    );

    let menu_button_pressed = $state(false);

    const menu_backdrop_blur = $derived(menu_button_pressed ? 10 : 0);

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

{#snippet outside_root_section()}
    <nav
        class="menu-nav"
        style:pointer-events={menu_button_pressed ? "auto" : "none"}
        style:backdrop-filter="blur(min({menu_backdrop_blur}vh, {menu_backdrop_blur}vw))"
        style:opacity={menu_button_pressed ? 1 : 0}
        style:transform="translateX({menu_button_pressed ? 0 : 15}%) scale({menu_button_pressed
            ? 1
            : 0.95})"
    >
        <button class="close-button" onclick={() => (menu_button_pressed = false)}>
            {display_text($language_perference, `Đóng`, `Close`)}
        </button>
        <div class="menu-section-wrapper">
            {#each MENU_STRUCTURE as item}
                <a class="link" href="#{item.target}" onclick={() => (menu_button_pressed = false)}>
                    {item.heading}
                    {#if item.heading2 !== undefined}
                        <br />
                        <span style:visibility="hidden">VI.</span>
                        <span>{item.heading2}</span>
                    {/if}
                </a>
            {/each}
        </div>
    </nav>
{/snippet}

{#snippet inside_root_section()}
    <button class="menu-button" onclick={() => (menu_button_pressed = true)}>
        {display_text($language_perference, `Mục lục`, `Menu`)}
    </button>
{/snippet}

<div class="translate-wrapper">
    <button
        onclick={() => {
            let language: LayoutLanguage;

            switch ($language_perference.language) {
                case LayoutLanguage.English:
                    language = LayoutLanguage.Vietnamese;
                    break;
                case LayoutLanguage.Vietnamese:
                    language = LayoutLanguage.English;
                    break;
                default:
                    language = LayoutLanguage.Vietnamese;
                    break;
            }

            $language_perference.language = language;
        }}
    >
        {display_text(
            $language_perference,
            "This page is also available in English. Read this page in English.",
            "Trang này cũng có phiên bản tiếng Việt. Đọc trang này bằng tiếng Việt.",
        )}
    </button>
</div>

<div class="intro-heading-wrapper stack-children">
    <h1>GẠC MA</h1>
    <p>
        {display_text($language_perference, "vòng tròn bất tử", "immortal circle")}
    </p>
</div>

<div class="intro-wrapper">
    <div class="intro-content-wrapper">
        {#snippet intro(progress: number)}
            <Intro {progress}></Intro>
        {/snippet}
        <div class="dummy" id="songngam"></div>

        <LengthScroll slot={intro} slowdown={4} bottom_limit={false}></LengthScroll>
    </div>

    {#snippet newspaper(progress: number)}
        <Newspaper {progress}></Newspaper>
    {/snippet}

    <LengthScroll slot={newspaper} slowdown={10} top_limit={false} bottom_limit={false}
    ></LengthScroll>
</div>

<div class="three-islands-wrapper">
    <div class="dummy" id="noidausong"></div>
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
        <img
            src={display_text($language_perference, ThreeIslandsPic1, ThreeIslandsPic1_EN)}
            alt=""
        />
    </div>

    <div class="image-wrapper">
        <div class="iframe-wrapper">
            <p>Video | {three_islands_video1_title}</p>
            <YtbFrame title={three_islands_video1_title} id="MnWBbmNS-tQ"></YtbFrame>
        </div>
    </div>
</div>

<div class="comparison-wrapper">
    <div class="dummy" id="ttkcs"></div>
    <div class="padding-left-right">
        <h3 class="heading-title">
            III. {display_text($language_perference, `Thế trận không cân sức`, `An unequal battle`)}
        </h3>

        <ComparisonTable></ComparisonTable>

        <div class="image-wrapper">
            <img
                src={display_text($language_perference, ComparisonPic10, ComparisonPic10_EN)}
                alt={comparison_pic10_title}
                title={comparison_pic10_title}
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
                    Video | {comparison_video1_title}
                </p>
                <YtbFrame title={comparison_video1_title} id={comparison_video1_id}></YtbFrame>
            </div>
        </div>
    </div>
</div>

<div class="progress-wrapper">
    {#snippet progress_page(progress: number)}
        <ProgressPart1 {progress}></ProgressPart1>
    {/snippet}

    <div class="dummy" id="dienbien"></div>

    <LengthScroll slot={progress_page} slowdown={5} bottom_limit={false}></LengthScroll>

    {#snippet progress_page2(progress: number)}
        <ProgressPart2 {progress}></ProgressPart2>
    {/snippet}

    <LengthScroll slot={progress_page2} slowdown={9} top_limit={false}></LengthScroll>
</div>

<div class="static-wrapper result-wrapper padding-left-right">
    <h1 class="extra-padding-under-header" id="sauconbao">
        V. {display_text($language_perference, `Sau cơn bão`, `After the storm`)}
    </h1>
    <div class="tiny-paragraph-wrapper">
        <p>
            {display_text(
                $language_perference,
                `Sau trận chiến khốc liệt, Trung Quốc đã thành công chiếm giữ trái phép đảo Gạc Ma, nhưng bằng ý chí chiến đấu kiên cường cùng xương máu của mình, các chiến sĩ hải quân Việt Nam đã giữ được Cô Lin và Len Đao.`,
                `After a fierce battle, China successfully occupied Gac Ma Island illegally, but with a strong fighting spirit and blood, Vietnamese naval soldiers were able to keep Co Lin and Len Dao.`,
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                `Theo thống kê từ phía Trung Quốc, trong trận giao tranh không cân sức ấy, những người lính Việt Nam đã phải hứng chịu hơn 500 quả đạn pháo, cùng với các loại đạn khác. Vì là tàu vận tải không được trang bị pháo, hải quân Việt Nam chỉ có thể đáp trả bằng hỏa lực của AK47 và B41.`,
                `According to statistics from the Chinese, in that unequal battle, the Vietnamese soldiers had to endure more than 500 artillery shells, along with other types of ammunition. Because the transport ship was not equipped with artillery, the Vietnamese navy could only respond with AK47 and B41 firepower.`,
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                `Phía Trung Quốc báo cáo có 6 lính Trung Quốc tử vong và 18 lính bị thương sau trận chiến, cùng với 3 tàu bị hư hỏng nhẹ. Còn về phía Việt Nam, tổn thất là lớn hơn rất nhiều. Hai chiếc tàu HQ604 và HQ605 đã mãi mãi nằm lại nơi biển khơi, còn tàu HQ505, tuy bị hư hỏng nặng, nhưng đã được điều khiển phóng lên bãi Cô Lin, trở thành cột mốc chủ quyền. Và thương xót hơn, 3 chiến sĩ đã hy sinh, 11 người khác bị thương và 70 người mất tích. Sau này, Trung Quốc đã trao trả cho Việt Nam 9 người bị bắt giữ, còn 61 người lính mất tích được xem như đã hy sinh. 64 chiến sĩ đã nằm lại mãi nơi biển cả mênh mông, để lại cho Tổ quốc, cho gia đình một kí ức xót xa, một nỗi niềm thương tiếc khôn nguôi.`,
                `The Chinese side reported that 6 Chinese soldiers died and 18 soldiers were injured after the battle, along with 3 ships slightly damaged. As for Vietnam, the losses were much greater. The two ships HQ604 and HQ605 remained forever in the open sea, while the ship HQ505, although heavily damaged, was steered to Co Lin Shoal, becoming a sovereignty marker. And more tragically, 3 soldiers were killed, 11 others were injured and 70 were missing. Later, China returned 9 of the captured soldiers to Vietnam, while the 61 missing soldiers were considered dead. 64 soldiers remained forever in the vast ocean, leaving the Motherland and their families with a painful memory and an inconsolable grief.`,
            )}
        </p>
    </div>
    <div class="image-wrapper">
        <div class="iframe-wrapper">
            <p>Video | {result_video1_title}</p>
            <YtbFrame title={result_video1_title} id="nfRnrvfwWcM"></YtbFrame>
        </div>
    </div>
    <div class="tiny-paragraph-wrapper">
        <p>
            {display_text(
                $language_perference,
                `Chiến tranh đã lùi xa, đất nước nở hoa độc lập, nhưng những ký ức về những liệt sĩ vẫn in sâu trong tâm trí những người ở lại. Đó là những người thân, những người đồng đội, những người tới giờ vẫn còn nhớ như in những câu chuyện của người lính giữ đảo ngày ấy, vì “tiếng gọi thiêng liêng của Tổ Quốc”, các anh không do dự mà dứt khoát ra đi thực hiện nhiệm vụ cao cả, dù biết có thể sẽ nằm mãi nơi biển xa...`,
                `The war has receded into the past, and the country is blossoming with independence, yet the memories of the martyrs remain deeply etched in the minds of those left behind. These are the relatives, the comrades-in-arms, who still vividly recall the stories of the soldiers who defended the islands in those days. Heeding the "sacred call of the Fatherland," they did not hesitate but resolutely departed to carry out their noble mission, even knowing they might lie forever in the distant sea...`,
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                `Để rồi dư âm lòng yêu nước của những con người cao cả ấy vang mãi tới thế hệ hôm nay và mai sau, trở thành niềm tự hào, sự biết ơn, kính trọng chân thành. Từ đó, lòng yêu nước cứ thế được tiếp bước...`,
                `And so, the resonance of patriotism from those noble souls echoes on to today's and future generations, becoming a source of pride, gratitude, and sincere respect. From this, the spirit of patriotism continues to be passed down...`,
            )}
        </p>
    </div>
</div>

<div class="static-wrapper meaning-wrapper">
    <div class="padding-left-right">
        <h1 class="override-heading extra-padding-under-header" id="ktvb">
            VI. {display_text(
                $language_perference,
                "Khắc tên vào biển",
                "Engraving names into the sea",
            )}
            <br />
            {display_text($language_perference, "Giữ trọn chủ quyền", "Retaining full sovereighty")}
        </h1>
        <div class="tiny-paragraph-wrapper">
            <p>
                {display_text(
                    $language_perference,
                    `Biển đảo thiêng liêng quê hương, nơi biết bao thế hệ cha anh đã ngã xuống đổi lấy hòa bình cho Tổ Quốc. Ở nơi đó, có những người lính hải quân coi việc xa nhà làm lẽ thường, lấy hiểm nguy làm trách nhiệm, lặng lẽ giữa trùng khơi để đất liền bình yên.`,
                    `The sacred sea and islands of our homeland — where countless generations of forefathers have fallen in exchange for peace for the nation. There, naval soldiers consider being far from home a norm, embrace danger as duty, and quietly stand guard in the vast ocean so that the mainland may remain peaceful.`,
                )}
            </p>
        </div>
        <div class="image-wrapper">
            <div class="iframe-wrapper">
                <p>Video | {meaning_video1_title}</p>
                <YtbFrame title={meaning_video1_title} id="K0ek_NIMOZw"></YtbFrame>
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
            {display_text(
                $language_perference,
                `Giữ gìn biển đảo hôm nay không chỉ là nối tiếp ý chí cha anh, mà còn là lời hứa với tương lai rằng:`,
                `Preserving our seas and islands today is more than just following the determined spirit of  those patriotic soldiers, who laid down their lives for the nation peace, it's a heartfelt vow to the generations to come:`,
            )}
        </p>
        <p class="final-part-quote">
            {display_text(
                $language_perference,
                `"Có một ngày mai....sóng biển vẫn tiếp tục vỗ vào bờ một màu trong xanh của hòa bình và tự do."`,
                `"That a new dawn will break...and the waves will still embrace our coasts with the serene blue of peace and liberty."`,
            )}
        </p>
    </div>
</div>

<div class="credit-wrapper padding-left-right">
    <h1 class="override-heading extra-padding-under-header" id="thuchienboi">
        VII. {display_text($language_perference, `Thực hiện bởi`, `Credits`)}
    </h1>
    <div class="tiny-paragraph-wrapper">
        <p>
            {display_text(
                $language_perference,
                "Thực hiện (Production team): Đào Bảo Trâm, Nguyễn Đình Duy Anh, Lê Hà Tú Anh, Lê Trần Phương Trà",
                "Production team: Đào Bảo Trâm, Nguyễn Đình Duy Anh, Lê Hà Tú Anh, Lê Trần Phương Trà",
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                "Thiết kế website (Website layout designer): Đào Bảo Trâm, Nguyễn Đình Duy Anh",
                "Website layout designer: Đào Bảo Trâm, Nguyễn Đình Duy Anh",
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                "Phụ trách truyền thông (Social media): Lê Hà Tú Anh, Lê Trần Phương Trà",
                "Social media: Lê Hà Tú Anh, Lê Trần Phương Trà",
            )}
        </p>
        <br />
        <p class="credit-header">
            {display_text($language_perference, "Âm nhạc (Music)", "Music")}
        </p>
        <p>
            {display_text(
                $language_perference,
                "Bay qua biển Đông (Bản đánh đàn organ)",
                "Flying across the East Sea (Organ version)",
            )}
            <br />
            {display_text(
                $language_perference,
                "Sáng tác: Lê Việt Khánh",
                "Composer: Lê Việt Khánh",
            )}
        </p>
        <p>
            {display_text($language_perference, "Tự nguyện", "Voluntary")}
            <br />
            {display_text(
                $language_perference,
                "Sáng tác: Trương Quốc Khánh",
                "Composer: Trương Quốc Khánh",
            )}
            <br />
            {display_text(
                $language_perference,
                "Thể hiện: Hồ Quỳnh Hương",
                "Performed by: Hồ Quỳnh Hương",
            )}
        </p>
        <p>
            {display_text($language_perference, "Những trái tim Việt Nam", "Vietnamese Hearts")}
            <br />
            {display_text($language_perference, "Sáng tác: Phương Uyên", "Composer: Phương Uyên")}
            <br />
            {display_text(
                $language_perference,
                "Thể hiện: 100 văn nghệ sĩ",
                "Performed by: 100 artists",
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                "Nơi đảo xa (bản instrumental)",
                "Faraway Island (instrumental version)",
            )}
            <br />
            {display_text($language_perference, "Sáng tác: Thế Song", "Composer: Thế Song")}
        </p>
        <br />
        <p class="credit-header">
            {display_text(
                $language_perference,
                "Xin chân thành cảm ơn (Special thanks)",
                "Special thanks",
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                "- Bà Mai Thị Đào - Em gái liệt sĩ Mai Văn Tuyến (Ms. Mai Thi Dao - Fallen soldier Mai Van Tuyen’s sister)",
                "- Ms. Mai Thi Dao - Fallen soldier Mai Van Tuyen’s sister",
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                "- Ông Phạm Hữu Xuyết - Em trai liệt sĩ Phạm Hữu Doan (Mr. Pham Huu Xuyet - Fallen soldier Pham Huu Doan’s brother)",
                "- Mr. Pham Huu Xuyet - Fallen soldier Pham Huu Doan’s brother",
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                "- Anh Phùng Văn Khải - Người kết nối (Mr. Phung Van Khai - intermediary)",
                "- Mr. Phung Van Khai - intermediary",
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                "- Chị Lại Thị Huệ - Hướng dẫn viên Bảo tàng Hải quân, Hải Phòng (Ms. Lai Thi Hue - Naval Museum's tour guide, Hai Phong)",
                "- Ms. Lai Thi Hue - Naval Museum's tour guide, Hai Phong",
            )}
        </p>
        <p>
            {display_text(
                $language_perference,
                "- Các nhân vật phỏng vấn tại Bảo tàng Lịch sử quân sự, Hà Nội (Interview characters at the Military History Museum, Hanoi)",
                "- Interview characters at the Military History Museum, Hanoi",
            )}
        </p>
        <div class="link-wrapper">
            <a href="https://www.instagram.com/gacma_14.03.1988">
                <span>
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        />
                    </svg>
                </span>
                <span>Instagram</span>
            </a>
            <a href="https://www.threads.net/@gacma_14.03.1988">
                <span>
                    <svg viewBox="0 0 192 192" width="24" height="24" fill="currentColor">
                        <path
                            class="x19hqcy"
                            d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
                        ></path>
                    </svg>
                </span>
                <span>Threads</span>
            </a>
        </div>
        <p>
            {display_text(
                $language_perference,
                "@nitromelon - Hỗ trợ thiết kế website",
                "@nitromelon - Website design support",
            )}
        </p>
    </div>
</div>

<style>
    .translate-wrapper {
        padding: 16px;
        background-color: var(--light-orange);
        color: var(--red);
        font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            "Open Sans",
            "Helvetica Neue",
            sans-serif;

        button {
            text-decoration: underline;
            cursor: pointer;
        }
    }

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

    .credit-wrapper {
        background-color: var(--blue);
        color: var(--tan);

        > h1 {
            font-size: 72px;
            font-family: var(--huxley-max);
            text-align: center;
            color: var(--light-orange);
        }

        .credit-header {
            font-size: 24px;
            color: var(--light-orange);
        }
    }

    .link-wrapper {
        margin-bottom: 16px;
        > a {
            text-decoration: underline;
            display: flex;
            gap: 8px;
            box-sizing: content-box;
            padding: 8px 0;
            align-items: center;
        }
    }

    .menu-button {
        position: absolute;
        right: 32px;
        top: 32px;
        color: white;
        mix-blend-mode: difference;
    }

    .close-button,
    .menu-button {
        font-family: var(--vl-regular);
        font-size: 24px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    .menu-nav {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: fit-content;
        background-color: rgba(20, 20, 20, 0.5);
        will-change: backdrop-filter, pointer-events, opacity, transform;
        transition:
            backdrop-filter 1s cubic-bezier(0, 1, 0, 1),
            opacity 1s cubic-bezier(0, 1, 0, 1),
            transform 1s cubic-bezier(0, 1, 0, 1);

        padding: 32px;
        color: #efe4d1;

        > .close-button {
            align-self: flex-start;
            justify-self: flex-start;
            font-family: "VlRegular", sans-serif;
            z-index: 1;
        }

        > .menu-section-wrapper {
            height: calc(100% - 32px);
            overflow: hidden;

            align-content: center;
            > .link {
                display: block;
                font-family: "HuxleyMax", sans-serif;
                font-size: 36px;
                -webkit-text-stroke: 0.25px;
                padding: 16px 0;

                &:hover {
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }
</style>
