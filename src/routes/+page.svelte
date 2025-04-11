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
            heading: "I. Sóng ngầm",
            target: "songngam",
        },
        {
            heading: "II. Nơi đầu sóng",
            target: "noidausong",
        },
        {
            heading: "III. Thế trận không cân sức",
            target: "ttkcs",
        },
        {
            heading: "IV. Diễn biến",
            target: "dienbien",
        },
        {
            heading: "V. Sau cơn bão",
            target: "sauconbao",
        },
        {
            heading: "VI. Khắc tên vào biển",
            heading2: "Giữ trọn chủ quyền",
            target: "ktvb",
        },
        {
            heading: "VII. Thực hiện bởi",
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

    let menu_button_pressed = $state(!false);

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
        <button class="close-button" onclick={() => (menu_button_pressed = false)}>Đóng</button>
        <div class="menu-section-wrapper">
            {#each MENU_STRUCTURE as item}
                <a class="link" href="#{item.target}">
                    {item.heading}
                    {#if item.heading2 !== undefined}
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.heading2}</span>
                    {/if}
                </a>
            {/each}
        </div>
    </nav>
{/snippet}

{#snippet inside_root_section()}
    <button class="menu-button" onclick={() => (menu_button_pressed = true)}>Mục lục</button>
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

    <LengthScroll slot={newspaper} slowdown={16} top_limit={false} bottom_limit={false}
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
            VI. Khắc tên vào biển <br />
            giữ trọn chủ quyền
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
            Thực hiện (Production team): Đào Bảo Trâm, Nguyễn Đình Duy Anh, Lê Hà Tú Anh, Lê Trần
            Phương Trà
        </p>
        <p>Thiết kế website (Website layout designer): Đào Bảo Trâm, Nguyễn Đình Duy Anh</p>
        <p>Phụ trách truyền thông (Social media): Lê Hà Tú Anh, Lê Trần Phương Trà</p>
        <br />
        <p class="credit-header">Âm nhạc (Music)</p>
        <p>
            Bay qua biển Đông (Bản đánh đàn organ) <br />
            Sáng tác: Lê Việt Khánh
        </p>
        <p>
            Tự nguyện <br />
            Sáng tác: Trương Quốc Khánh
            <br />
            Thể hiện: Hồ Quỳnh Hương
        </p>
        <p>
            Những trái tim Việt Nam <br />
            Sáng tác: Phương Uyên
            <br />
            Thể hiện: 100 văn nghệ sĩ
        </p>
        <p>
            Nơi đảo xa (bản instrumental)
            <br />
            Sáng tác: Thế Song
        </p>
        <br />

        <p class="credit-header">Xin chân thành cảm ơn (Special thanks)</p>

        <p>
            - Bà Mai Thị Đào - Em gái liệt sĩ Mai Văn Tuyến (Ms. Mai Thi Dao - Fallen soldier Mai
            Van Tuyen’s sister)
        </p>

        <p>
            - Ông Phạm Hữu Xuyết - Em trai liệt sĩ Phạm Hữu Doan (Mr. Pham Huu Xuyet - Fallen
            soldier Pham Huu Doan’s brother)
        </p>

        <p>- Anh Phùng Văn Khải - Người kết nối (Mr. Phung Van Khai - intermediary)</p>

        <p>
            - Chị Lại Thị Huệ - Hướng dẫn viên Bảo tàng Hải quân, Hải Phòng (Ms. Lai Thi Hue - Naval
            Museum's tour guide, Hai Phong)
        </p>

        <p>
            - Các nhân vật phỏng vấn tại Bảo tàng Lịch sử quân sự, Hà Nội (Interview characters at
            the Military History Museum, Hanoi)
        </p>

        <div class="link-wrapper">
            <a href="https://www.instagram.com/gacma_14.03.1988">Instagram</a>
            <a href="https://www.threads.net/@gacma_14.03.1988">Threads</a>
        </div>

        <p>@nitromelon - Hỗ trợ thiết kế website</p>
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
