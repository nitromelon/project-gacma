<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper3/1.webp";
    import Pic2 from "$lib/assets/images/home/newspaper/papers/paper3/2.webp";
    import type { SvelteSet } from "svelte/reactivity";
    import { getContext, onMount, type Snippet } from "svelte";
    import { LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD } from "$lib/components/layout/layout";
    import language_perference, { display_text } from "$lib/components/language/config";
    import "./styles/common.css";

    type Props = {
        local_progress: number;
    };

    const fixed_outside_slots: SvelteSet<Snippet> | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    const OIL = $derived(display_text($language_perference, "Dầu mỏ", "Oil"));
    const FOOD = $derived(display_text($language_perference, "Lương thực", "Food"));
    const AID = $derived(display_text($language_perference, "Viện trợ quân sự", "Military aid"));
    const COLS_VALUE_ARRAY = $derived([
        {
            item: OIL,
            year: "1985",
            quantity: 2,
        },
        {
            item: OIL,
            year: "1989",
            quantity: 1,
        },
        {
            item: FOOD,
            year: "1985",
            quantity: 1.2,
        },
        {
            item: FOOD,
            year: "1989",
            quantity: 0.5,
        },
        {
            item: AID,
            year: "1985",
            quantity: 1.5,
        },
        {
            item: AID,
            year: "1989",
            quantity: 0.6,
        },
    ]);

    const million_ton = $derived(display_text($language_perference, "triệu tấn", "million ton"));
    const year = $derived(display_text($language_perference, "năm", "year"));
    const billion = $derived(display_text($language_perference, "tỷ", "billion"));

    const pic1_description = $derived(
        display_text(
            $language_perference,
            "Hai em bé lem luốc nhìn ra ngoài cửa sổ ở một khu khai thác mỏ than đá và sản xuất thép ở vùng Siberia trong thời kỳ kinh tế khó khăn trên diện rộng ở Liên Xô.",
            "Two dirty-faced children look out of a window in a coal mining and steel production area in Siberia during a period of widespread economic hardship in the Soviet Union.",
        ),
    );

    const pic2_description = $derived(
        display_text(
            $language_perference,
            "Công dân Nga xếp hàng để mua thực phẩm khan hiếm, vào tháng 11/1991, chỉ một tháng trước khi siêu cường Liên Xô sụp đổ.",
            "Russian citizens queue to buy scarce food, in November 1991, just a month before the Soviet superpower collapsed.",
        ),
    );

    const { local_progress }: Props = $props();
    const nonzero_progress = $derived(local_progress > 0 ? 1 : 0);
    const position = $state({ x: 0, y: 0 });

    let current_index: number = $state(0);
    let chart_opacity = $state(0);

    onMount(() => {
        if (fixed_outside_slots === undefined) return;
        fixed_outside_slots.add(chart);

        return () => {
            fixed_outside_slots.delete(chart);
        };
    });

    function chart_hover(event: MouseEvent, index: number) {
        position.x = event.clientX;
        position.y = event.clientY;
        chart_opacity = 1;
        current_index = index;
    }

    function chart_out() {
        chart_opacity = 0;
    }
</script>

{#snippet chart()}
    <div
        class="chart-hover"
        style:opacity={chart_opacity}
        style:transform="translate(calc(-50% + {position.x}px),calc(-100% + {position.y - 12}px))
        scale({chart_opacity === 0 ? 0.9 : 1})"
    >
        <h4>{COLS_VALUE_ARRAY[current_index].item}</h4>
        <p>{COLS_VALUE_ARRAY[current_index].year}: {COLS_VALUE_ARRAY[current_index].quantity}</p>
    </div>
{/snippet}

<div class="paper-base">
    {#snippet paper()}
        <div class="double-line-break"></div>
        <h2 class="header">
            {display_text(
                $language_perference,
                "BIỂU ĐỒ SO SÁNH ĐỊNH LƯỢNG",
                "QUANTITATIVE COMPARISON CHART",
            )}
            <br />
            {display_text(
                $language_perference,
                "VIỆN TRỢ CỦA LIÊN XÔ DÀNH CHO VIỆT NAM",
                "SOVIET AID TO VIETNAM  (1985 AND 1989)",
            )}

            <br />
            (1985 {display_text($language_perference, "VÀ", "AND")}
            1989)
        </h2>

        <div class="chart-wrapper">
            <div class="left-chart">
                <div class="number-columns">
                    <p>2.0</p>
                    <p>1.5</p>
                    <p>1.0</p>
                    <p>0.5</p>
                    <p>0.0</p>
                </div>

                <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="chart-columns" onmouseout={chart_out}>
                    <div class="lines">
                        {#each Array(5)}
                            <div class="line"></div>
                        {/each}
                    </div>

                    <div class="column">
                        <div class="sub-column" onmousemove={(e) => chart_hover(e, 0)}>
                            <div class="value" style:height="{100 * nonzero_progress}%"></div>
                        </div>
                        <div class="sub-column" onmousemove={(e) => chart_hover(e, 1)}>
                            <div class="value" style:height="{50 * nonzero_progress}%"></div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="sub-column" onmousemove={(e) => chart_hover(e, 2)}>
                            <div class="value" style:height="{60 * nonzero_progress}%"></div>
                        </div>
                        <div class="sub-column" onmousemove={(e) => chart_hover(e, 3)}>
                            <div class="value" style:height="{25 * nonzero_progress}%"></div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="sub-column" onmousemove={(e) => chart_hover(e, 4)}>
                            <div class="value" style:height="{75 * nonzero_progress}%"></div>
                        </div>
                        <div class="sub-column" onmousemove={(e) => chart_hover(e, 5)}>
                            <div class="value" style:height="{30 * nonzero_progress}%"></div>
                        </div>
                    </div>
                </div>
                <div class="name-columns">
                    <p>{OIL}</p>
                    <p>{FOOD}</p>
                    <p>{AID}</p>
                    <div class="tooltip">
                        <div class="box red"></div>
                        <p class="para1">: 1985</p>
                        <div class="box brown"></div>
                        <p>: 1989</p>
                    </div>
                </div>
            </div>

            <div class="right-info">
                <h3>{OIL}:</h3>
                <p>1985: 2.0 {million_ton}/{year}</p>
                <p>
                    1989: 1.0 {million_ton}/{year} ({display_text(
                        $language_perference,
                        "giảm 50%",
                        "50% decrease",
                    )})
                </p>
                <br />
                <h3>{FOOD}:</h3>
                <p>1985: 1.2 {million_ton}</p>
                <p>
                    1989: 0.5 {million_ton} ({display_text(
                        $language_perference,
                        "giảm 58%",
                        "58% decrease",
                    )})
                </p>
                <br />
                <h3>{AID}:</h3>
                <p>1985: 1,5 {billion} USD</p>
                <p>
                    1989: 0,6 {billion} USD ({display_text(
                        $language_perference,
                        "giảm 60%",
                        "60% decrease",
                    )})
                </p>
            </div>
        </div>

        <div class="paragraph-with-images">
            <p class="paper-para1 paragraph-base">
                {display_text(
                    $language_perference,
                    "Bên cạnh đó, sự suy yếu của Liên Xô khiến Việt Nam mất đi một chỗ dựa chiến lược quan trọng, buộc Hà Nội phải tìm kiếm các giải pháp tự chủ hơn trong quốc phòng và ngoại giao. Đây chính là lý do khiến Việt Nam gặp nhiều khó khăn khi đối mặt với các hành động gây hấn của Trung Quốc trên Biển Đông (Timo Kivimaki et al., 2002).",
                    "Furthermore, the weakening of the Soviet Union caused Vietnam to lose a critical strategic ally, forcing Hanoi to seek more autonomous solutions in defense and diplomacy. This situation posed significant challenges for Vietnam when facing Chinese aggressions in the East Vietnam Sea (Timo Kivimaki et al., 2002).",
                )}
            </p>
            <div class="images">
                <img src={Pic1} alt="Ảnh 1: {pic1_description}" title={pic1_description} />
                <p class="small paragraph-base">{pic1_description}</p>
                <img src={Pic2} alt="Ảnh 2: {pic2_description}" title={pic2_description} />
                <p class="small paragraph-base">{pic2_description}</p>
            </div>
        </div>

        <div class="sub-padding"></div>
    {/snippet}

    <h3 class="small-title">
        {display_text(
            $language_perference,
            "Bối cảnh quốc tế: Cơ hội từ sự chuyển dịch quyền lực toàn cầu",
            "International context: opportunities from the global power shift",
        )}
    </h3>

    <div class="news-wrapper">
        <ProgressScroll progress={limited_range(local_progress, 0.25, 0.75)} content={paper}
        ></ProgressScroll>
    </div>

    <div class="image-mask"></div>
</div>

<style>
    .chart-wrapper {
        width: 100%;
        aspect-ratio: 3/2;
        background-color: var(--tan);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        margin-bottom: 16px;

        > .left-chart {
            /* position: relative; */
            width: calc(50% - 16px);
            height: calc(100% - 128px);
            display: grid;
            grid-template-columns: 32px 1fr;
            grid-template-rows: 1fr 16px;

            > .number-columns,
            > .name-columns {
                > p,
                > .tooltip > p {
                    font-size: 12px;
                    font-family: var(--vl-regular);
                    letter-spacing: -1px;
                    -webkit-text-stroke: 0.25px black;
                }
            }

            > .number-columns {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-end;

                > p {
                    height: 0;
                    transform: translate(-8px, -6px);
                }
            }

            > .chart-columns {
                position: relative;
                grid-area: 1/2;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 4px;

                > .lines {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    > .line {
                        height: 2px;
                        background-color: rgba(26, 26, 26, 0.05);
                    }
                }

                > .column {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2px;

                    > .sub-column {
                        display: flex;
                        align-items: end;
                        contain: strict;

                        > .value {
                            width: 100%;
                            border-radius: 4px 4px 0 0;

                            will-change: height;
                            transition: height 1s cubic-bezier(1, 0, 0, 1);
                        }
                    }

                    > .sub-column:nth-child(odd) > .value {
                        background-color: var(--red);
                    }

                    > .sub-column:nth-child(even) > .value {
                        background-color: var(--brown);
                    }
                }
            }

            > .name-columns {
                position: relative;
                grid-area: 2/2;
                display: grid;
                grid-template-columns: repeat(3, 1fr);

                > p {
                    margin-top: 4px;
                    text-align: center;
                }

                > .tooltip {
                    position: absolute;
                    width: 100%;
                    transform: translateY(36px);
                    display: flex;
                    justify-content: center;

                    .box {
                        height: 16px;
                        aspect-ratio: 16 / 9;
                    }

                    > .red {
                        background-color: var(--red);
                    }

                    > .brown {
                        background-color: var(--brown);
                    }

                    > .para1 {
                        margin-right: 16px;
                    }
                }
            }
        }

        > .right-info {
            font-family: var(--vl-regular);
            letter-spacing: -2px;
            line-height: 1.25;
            font-size: 12px;
            -webkit-text-stroke: 0.25px black;
        }
    }

    .double-line-break {
        width: 100%;
        height: 4px;
        border: 1px solid var(--red);
        border-left: none;
        border-right: none;
        margin-bottom: 16px;
    }

    h2.header {
        margin-bottom: 16px;
        text-align: center;
        font-family: var(--vl-regular);
        font-size: 18px;
        color: var(--red);
        font-weight: 600;
    }

    .paragraph-with-images {
        display: flex;
        gap: 16px;

        > * {
            flex: 1;
        }

        > .images > .small {
            font-size: 11px;
            text-align: center;
            margin: 4px 0;
        }
    }

    .chart-columns {
        .sub-column {
            will-change: opacity;
            transition: opacity 0.5s cubic-bezier(0, 1, 0, 1);
        }
    }

    .chart-columns:hover {
        .sub-column:not(:hover) {
            opacity: 0.25;
        }

        .sub-column:hover {
            opacity: 1;
        }
    }

    .chart-hover {
        position: fixed;
        padding: 12px;
        pointer-events: none;
        background-color: black;
        border-radius: 6px;
        color: #efe4d1;
        font-size: 11px;
        font-family: "VlRegular", san-serif;
        will-change: transform, opacity;
        transition: opacity 0.5s cubic-bezier(0, 1, 0, 1);

        > h4 {
            margin-bottom: 4px;
        }

        > * {
            text-align: center;
        }
    }
</style>
