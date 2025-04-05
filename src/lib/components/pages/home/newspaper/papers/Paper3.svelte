<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper3/1.webp";
    import Pic2 from "$lib/assets/images/home/newspaper/papers/paper3/2.webp";

    type Props = {
        local_progress: number;
    };

    const pic1_description =
        "Hai em bé lem luốc nhìn ra ngoài cửa sổ ở một khu khai thác mỏ than đá và sản xuất thép ở vùng Siberia trong thời kỳ kinh tế khó khăn trên diện rộng ở Liên Xô.";
    const pic2_description =
        "Công dân Nga xếp hàng để mua thực phẩm khan hiếm, vào tháng 11/1991, chỉ một tháng trước khi siêu cường Liên Xô sụp đổ.";

    const { local_progress }: Props = $props();
    const nonzero_progress = $derived(local_progress > 0 ? 1 : 0);
</script>

<div class="paper-base">
    {#snippet paper()}
        <div class="double-line-break"></div>
        <h2 class="header">
            BIỂU ĐỒ SO SÁNH ĐỊNH LƯỢNG <br />
            VIỆN TRỢ CỦA LIÊN XÔ DÀNH CHO VIỆT NAM
            <br />
            (1985 VÀ 1989)
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

                <div class="chart-columns">
                    <div class="lines">
                        {#each Array(5)}
                            <div class="line"></div>
                        {/each}
                    </div>

                    <div class="column">
                        <div class="sub-column">
                            <div class="value" style:height="{100 * nonzero_progress}%"></div>
                        </div>
                        <div class="sub-column">
                            <div class="value" style:height="{50 * nonzero_progress}%"></div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="sub-column">
                            <div class="value" style:height="{60 * nonzero_progress}%"></div>
                        </div>
                        <div class="sub-column">
                            <div class="value" style:height="{25 * nonzero_progress}%"></div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="sub-column">
                            <div class="value" style:height="{75 * nonzero_progress}%"></div>
                        </div>
                        <div class="sub-column">
                            <div class="value" style:height="{30 * nonzero_progress}%"></div>
                        </div>
                    </div>
                </div>
                <div class="name-columns">
                    <p>Dầu mỏ</p>
                    <p>Lương thực</p>
                    <p>Viện trợ quân sự</p>
                    <div class="tooltip">
                        <div class="box red"></div>
                        <p class="para1">: 1996</p>
                        <div class="box brown"></div>
                        <p>: 1989</p>
                    </div>
                </div>
            </div>

            <div class="right-info">
                <h3>Dầu mỏ</h3>
                <p>1985: 2.0 triệu tấn/năm</p>
                <p>1989: 1.0 triệu tấn/năm (giảm 50%)</p>
                <br />
                <h3>Lương thực:</h3>
                <p>1985: 1.2 triệu tấn</p>
                <p>1989: 0.5 triệu tấn (giảm 58%)</p>
                <br />
                <h3>Viện trợ quân sự:</h3>
                <p>1985: 1,5 tỷ USD</p>
                <p>1989: 0,6 tỷ USD (giảm 60%)</p>
            </div>
        </div>

        <div class="paragraph-with-images">
            <p class="paper-para1 paragraph-base">
                Bên cạnh đó, sự suy yếu của Liên Xô khiến Việt Nam mất đi một chỗ dựa chiến lược
                quan trọng, buộc Hà Nội phải tìm kiếm các giải pháp tự chủ hơn trong quốc phòng và
                ngoại giao. Đây chính là lý do khiến Việt Nam gặp nhiều khó khăn khi đối mặt với các
                hành động gây hấn của Trung Quốc trên Biển Đông (Timo Kivimaki et al., 2002).
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

    <h3 class="small-title">Bối cảnh quốc tế: Cơ hội từ sự chuyển dịch quyền lực toàn cầu</h3>

    <div class="wrapper">
        <ProgressScroll progress={limited_range(local_progress, 0.25, 0.75)} content={paper}
        ></ProgressScroll>
    </div>

    <div class="image-mask"></div>
</div>

<style>
    .small-title {
        font-family: var(--huxley-max);
        font-size: 12px;
        margin: 16px;
        margin-bottom: 0;
        color: var(--red);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .wrapper {
        position: relative;
        margin: 16px;
        height: calc(100% - 60px);
        width: calc(100% - 32px);
        contain: strict;
    }

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
                    transform: translateY(32px);
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
</style>
