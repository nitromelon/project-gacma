<script lang="ts">
    import language_perference, { display_text } from "$lib/components/language/config";
    import { LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD } from "$lib/components/layout/layout";
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import { getContext, onMount, type Snippet } from "svelte";
    import type { SvelteSet } from "svelte/reactivity";
    import "./styles/common.css";

    type Props = {
        local_progress: number;
    };

    const fixed_outside_slots: SvelteSet<Snippet> | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    const { local_progress }: Props = $props();
    const position = $state({ x: 0, y: 0 });

    let chinh_sach_hover = $state(0);
    const opacity_class = $derived(chinh_sach_hover === 0 ? "" : "melt");

    function chinh_sach_mouse_hover(event: MouseEvent) {
        position.x = event.clientX;
        position.y = event.clientY;
        chinh_sach_hover = 1;
    }

    function chinh_sach_mouse_out() {
        chinh_sach_hover = 0;
    }

    onMount(() => {
        if (fixed_outside_slots === undefined) return;
        fixed_outside_slots.add(chinh_sach_content);

        return () => {
            fixed_outside_slots.delete(chinh_sach_content);
        };
    });
</script>

{#snippet chinh_sach_content()}
    <div
        class="overlap"
        style:transform="translate(calc(-50% + {position.x}px),calc(-50% + {position.y}px)) scale({chinh_sach_hover ===
        0
            ? 0.9
            : 1})"
        style:opacity={chinh_sach_hover}
    >
        <div class="chinh-sach-wrapper">
            <h4>1985</h4>
            <p>
                {display_text(
                    $language_perference,
                    "Mikhail Gorbachev lên nắm quyền, khởi xướng chính sách Perestroika và Glasnost.",
                    "Mikhail Gorbachev came to power, initiating the policies of Perestroika and Glasnost.",
                )}
            </p>
        </div>
        <div class="chinh-sach-wrapper">
            <h4>1986</h4>
            <p>
                {display_text(
                    $language_perference,
                    "Liên Xô bắt đầu cắt giảm viện trợ kinh tế cho các nước xã hội chủ nghĩa.",
                    "The Soviet Union began reducing economic aid to socialist countries.",
                )}
            </p>
        </div>
        <div class="chinh-sach-wrapper csw-padding-left">
            <h4>1988</h4>
            <p>
                {display_text(
                    $language_perference,
                    "Liên Xô tuyên bố rút quân khỏi Afghanistan, đánh dấu sự suy yếu trong chiến lược đối ngoại.",
                    "The Soviet Union announced its withdrawal from Afghanistan, marking a decline in its foreign policy strategy.",
                )}
            </p>
        </div>
        <div class="chinh-sach-wrapper csw-padding-left">
            <h4>1989</h4>
            <p>
                {display_text(
                    $language_perference,
                    "Viện trợ quân sự và kinh tế cho Việt Nam giảm mạnh, ảnh hưởng nghiêm trọng đến quốc phòng và nền kinh tế.",
                    "Military and economic aid to Vietnam was drastically reduced, severely impacting national defense and the economy.",
                )}
            </p>
        </div>
    </div>
{/snippet}

<div class="paper-base">
    {#snippet paper2()}
        <h2 class="title {opacity_class}">
            {display_text(
                $language_perference,
                "SỰ SUY YẾU CỦA LIÊN XÔ",
                "THE DECLINE OF THE SOVIET UNION",
            )}
            <br />
            {display_text(
                $language_perference,
                "VÀ ẢNH HƯỞNG ĐẾN VIỆT NAM",
                "AND ITS IMPACT ON VIETNAM",
            )}
        </h2>

        <p class="para1">
            <span class={opacity_class}>
                {display_text(
                    $language_perference,
                    "Bước vào giai đoạn cuối thập niên 1980, Liên Xô rơi vào khủng hoảng nghiêm trọng về kinh tế và chính trị. Dưới sự lãnh đạo của nhà lãnh đạo thứ 8 của Liên Xô Mikhail Gorbachev,",
                    "Entering the late 1980s, the Soviet Union was in the midst of a severe economic and political crisis. Under the leadership of the Soviet Union’s 8th leader, Mikhail Gorbachev,",
                )}
            </span>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
            <span
                onmousemove={chinh_sach_mouse_hover}
                onmouseout={chinh_sach_mouse_out}
                class="chinh-sach"
            >
                {display_text(
                    $language_perference,
                    'chính sách Perestroika "Cải tổ" và Glasnost "Công khai hóa"',
                    'the policies of Perestroika "Restructuring" and Glasnost "Openness"',
                )}
            </span>
            <span class={opacity_class}>
                {display_text(
                    $language_perference,
                    "được triển khai với hy vọng cải cách nền kinh tế và hệ thống chính trị của Liên Xô. Tuy nhiên, những cải cách này lại vô tình làm suy yếu khả năng kiểm soát của chính quyền trung ương, khiến nền kinh tế kiệt quệ và ảnh hưởng của Liên Xô đối với các nước đồng minh dần suy giảm.",
                    "were implemented with the hope of reforming the Soviet Union’s economic and political systems. However, these reforms inadvertently weakened the central government's control, leading to economic exhaustion and diminishing the Soviet Union's influence over its allies.",
                )}
            </span>
        </p>

        <p class="para2 {opacity_class}">
            {display_text(
                $language_perference,
                "Theo các tài liệu lịch sử, viện trợ quân sự và kinh tế của Liên Xô dành cho Việt Nam giảm mạnh trong giai đoạn này. Cụ thể, Liên Xô đã cắt giảm đáng kể nguồn cung cấp dầu mỏ, lương thực và hỗ trợ tài chính cho Việt Nam, gây khó khăn lớn trong duy trì hoạt động quân sự và phát triển kinh tế (CIA, 1988).",
                "According to historical documents, Soviet military and economic aid to Vietnam significantly decreased during this period. Specifically, the Soviet Union drastically cut supplies of oil, food, and financial support to Vietnam, creating substantial difficulties in maintaining military operations and economic development (CIA, 1988).",
            )}
        </p>

        <div class="sub-padding"></div>
    {/snippet}

    <h3 class="small-title {opacity_class}">
        {display_text(
            $language_perference,
            "Bối cảnh quốc tế: Cơ hội từ sự chuyển dịch quyền lực toàn cầu",
            "International context: opportunities from the global power shift",
        )}
    </h3>

    <div class="news-wrapper">
        <ProgressScroll progress={limited_range(local_progress, 0.25, 0.75)} content={paper2}
        ></ProgressScroll>
    </div>

    <div class="image-mask"></div>
</div>

<style>
    .paper-base {
        * {
            will-change: opacity;
            transition: opacity 0.5s cubic-bezier(0.5, 1, 0.5, 1);
        }
    }

    .title {
        font-family: var(--vl-italic);
        font-weight: 600;
        margin-bottom: 16px;
    }

    .para1,
    .para2 {
        text-align: justify;
        font-family: var(--vl-regular);
        -webkit-text-stroke: 0.25px black;
        line-height: 1.25;
    }

    .para1 {
        width: 60%;

        > .chinh-sach {
            text-decoration: var(--red) underline;
            cursor: pointer;
        }
    }

    .para2 {
        margin-top: 16px;
        position: relative;
        left: 40%;
        width: 60%;
    }

    .overlap {
        position: fixed;
        padding: 24px;
        pointer-events: none;
        background-color: rgba(239, 228, 209, 0.75);
        border: 1px solid #543214;
        backdrop-filter: blur(2px);
        will-change: transform, opacity;
        transition: opacity 0.5s cubic-bezier(0, 1, 0, 1);

        > .chinh-sach-wrapper {
            display: flex;
            gap: 12px;
            width: 480px;
            margin: 12px 0;

            > h4 {
                font-family: "HuxleyMax", san-serif;
                font-size: 36px;
                color: #881d1b;
            }

            > p {
                font-family: "VlRegular", san-serif;
                -webkit-text-stroke: 0.25px;
                line-height: 1.25;
                text-align: justify;
            }
        }

        > .csw-padding-left {
            margin-left: 86px;
        }

        > .chinh-sach-wrapper:first-child {
            margin-top: 0;
        }

        > .chinh-sach-wrapper:last-child {
            margin-bottom: 0;
        }
    }

    :global(.melt) {
        opacity: 0;
    }
</style>
