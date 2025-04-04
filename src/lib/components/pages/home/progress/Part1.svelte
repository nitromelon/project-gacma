<script lang="ts">
    import Vid1 from "$lib/assets/videos/home/progress/1.mov";
    import Pic1 from "$lib/assets/images/home/progress/1.png";
    import Pic2 from "$lib/assets/images/home/progress/2.png";
    import Pic3 from "$lib/assets/images/home/progress/3.png";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import { onMount } from "svelte";
    import { minmax } from "$lib/minmax";

    const SVG_ORIGINAL_WIDTH = 4218;
    const CIRCLE_X_VALUES = [452.9, 1010.4, 1889, 2345.3, 3355.6];
    const CIRCLE_Y_VALUES = [537.6, 415.9, 576.4, 435.9, 539.4];
    const CIRCLE_LINE_POSITIONS = [69, 640, 1547, 2024, 3060];

    const { progress }: { progress: number } = $props();
    const svg_progress = $derived(limited_range(progress, 0.1, 1));

    let section_width = $state(0);
    let section_height = $state(0);
    let svg_width = $state(0);

    let svg_path: SVGPathElement;
    let svg_path_length = $state(0);

    const svg_line_progress = $derived(svg_path_length * svg_progress);

    const pass_circle_values = $derived(
        CIRCLE_LINE_POSITIONS.map((value) => minmax(svg_line_progress - value, 0, 1)),
    );

    const svg_width_ratio = $derived(svg_width / SVG_ORIGINAL_WIDTH);

    const ratioed_circle_x_values = $derived(
        CIRCLE_X_VALUES.map((value) => value * svg_width_ratio),
    );

    const ratioed_circle_y_values = $derived(
        CIRCLE_Y_VALUES.map((value) => value * svg_width_ratio),
    );

    const line_styles = $derived(
        CIRCLE_X_VALUES.map((_, index) =>
            get_line_style(ratioed_circle_x_values[index], ratioed_circle_y_values[index], index),
        ),
    );

    onMount(() => {
        svg_path_length = svg_path.getTotalLength();
    });

    function get_line_style(x: number, y: number, circle_line_position_index: number): string {
        const element = CIRCLE_LINE_POSITIONS[circle_line_position_index];
        const element_x = ratioed_circle_x_values[circle_line_position_index];
        const next_element_x = ratioed_circle_x_values[circle_line_position_index + 1] ?? svg_width;
        const width = next_element_x - element_x;
        const height = y - 80;

        if (svg_line_progress < element) {
            return `transform: translate(${x}px, ${64 + height * 0.25}px); height: ${height * 0.75}px; opacity: 0; width: ${width}px`;
        }

        return `transform: translate(${x}px, 64px); height: ${height}px; opacity: 1; width: ${width}px`;
    }
</script>

<section class="stack-children" bind:clientWidth={section_width} bind:clientHeight={section_height}>
    <!-- Not actually used but preload for next section -->
    <video muted class="part1-video" preload="auto" aria-hidden="true">
        <source src={Vid1} type="video/mp4" />
    </video>

    <div class="progress-image-wrapper stack-children">
        <div class="svg-wrapper" style:transform="translate({-66 * svg_progress}%)">
            <div
                class="overlay-wrapper background-overlay"
                style:width="{section_width}px"
                style:transform="translate({100 * svg_progress}%)"
            >
                <h2>IV. DIỄN BIẾN</h2>
            </div>

            <svg viewBox="0 0 4218 791" bind:clientWidth={svg_width}>
                <defs>
                    <style>
                        .cls-4 {
                            fill: var(--red);
                        }

                        .cls-5 {
                            fill: var(--blue);
                        }

                        .part1-path1 {
                            stroke: #f69220;
                        }
                    </style>
                </defs>
                <g id="Layer_1">
                    <image
                        width="906"
                        height="573"
                        transform="translate(331.78 117.89) scale(.88 .97)"
                        href={Pic1}
                    />
                    <image
                        width="591"
                        height="441"
                        transform="translate(1698.27 174.4) scale(1.33 1.3)"
                        href={Pic2}
                    />
                    <image
                        class="cls-3"
                        width="837"
                        height="517"
                        transform="translate(3048.53 220.67) scale(.96 1.02)"
                        href={Pic3}
                    />
                    <path
                        fill="none"
                        class="part1-path1"
                        stroke-width="2.5"
                        d="M387 558c144-58 568-151 688-147 232 7 631 211 759 181 144-34 407-147 533-160 362-36 573 163 829 148l505-130"
                        style:stroke-dasharray={svg_path_length}
                        style:stroke-dashoffset={svg_path_length * (1 - svg_progress)}
                        bind:this={svg_path}
                    />
                    <!-- 69 -->
                    <circle
                        cx={CIRCLE_X_VALUES[0]}
                        cy={CIRCLE_Y_VALUES[0]}
                        r={12 * pass_circle_values[0]}
                        style:opacity={pass_circle_values[0]}
                        class="cls-4"
                    />
                    <!-- 640 -->
                    <circle
                        cx={CIRCLE_X_VALUES[1]}
                        cy={CIRCLE_Y_VALUES[1]}
                        r={12 * pass_circle_values[1]}
                        style:opacity={pass_circle_values[1]}
                        class="cls-5"
                    />
                    <!-- 1547 -->
                    <circle
                        cx={CIRCLE_X_VALUES[2]}
                        cy={CIRCLE_Y_VALUES[2]}
                        r={12 * pass_circle_values[2]}
                        style:opacity={pass_circle_values[2]}
                        class="cls-4"
                    />
                    <!-- 2024 -->
                    <circle
                        cx={CIRCLE_X_VALUES[3]}
                        cy={CIRCLE_Y_VALUES[3]}
                        r={12 * pass_circle_values[3]}
                        style:opacity={pass_circle_values[3]}
                        class="cls-5"
                    />
                    <!-- 3060 -->
                    <circle
                        cx={CIRCLE_X_VALUES[4]}
                        cy={CIRCLE_Y_VALUES[4]}
                        r={12 * pass_circle_values[4]}
                        style:opacity={pass_circle_values[4]}
                        class="cls-4"
                    />
                </g>
            </svg>

            <div class="overlay-wrapper stack-children">
                <h3 class="header-title" style:opacity={svg_progress > 0 ? 0 : 1}>
                    Diễn biến trước <br />
                    trận Gạc Ma
                </h3>

                <div class="line" style={line_styles[0]}>
                    <h4>1986</h4>
                    <p>
                        Năm 1986, Trung Quốc đã gửi các tàu quân sự ngụy trang thành tàu đánh cá để
                        trinh sát các rạn san hô và bí mật đặt một số cột bê tông để "đánh dấu chủ
                        quyền". Hải quân Trung Quốc liên tục gửi các tàu chiến giả dạng tàu dân sự
                        để tiến hành khảo sát và trinh sát nhằm thăm dò quần đảo Trường Sa với mục
                        đích âm mưu xâm chiếm các đảo chìm.
                    </p>
                </div>

                <div class="line" style={line_styles[1]}>
                    <h4>06/11/1987</h4>
                    <p>
                        Bộ Quốc phòng Việt Nam giao nhiệm vụ cho Bộ Tư lệnh Hải quân điều động lực
                        lượng ra bảo vệ các bãi cạn, ban đầu là bảo vệ các đảo Đá Tây, Chữ Thập, Đá
                        Lớn và Tiên Nữ.
                    </p>
                </div>

                <div class="line" style={line_styles[2]}>
                    <h4>02/01/1988</h4>
                    <p>
                        Trung Quốc đã gửi 1 tàu hộ vệ tên lửa, 1 tàu khu trục, 1 tàu đổ bộ, 1 tàu
                        chở dầu và một số tàu hậu cần xuống phía Nam.
                    </p>
                </div>

                <div class="line" style={line_styles[3]}>
                    <h4>Đầu tháng 3, 1988</h4>
                    <p>
                        Hải quân Việt Nam thành lập một đơn vị đồn trú để bảo vệ Gạc Ma, Cô Lin và
                        Len Đao, bao gồm: 3 tàu vận tải quân sự thuộc Lữ đoàn 125 (HQ-604, HQ-605,
                        HQ-505); 2 đơn vị xây đảo thuộc Lữ đoàn 83 Công binh Hải quân và các đơn vị
                        bảo vệ thuộc Lữ đoàn 146. Toàn bộ lực lượng do Trung tá Trần Đức Thông, Phó
                        Tư lệnh Lữ đoàn 146 chỉ huy.
                    </p>
                </div>

                <div class="line" style={line_styles[4]}>
                    <h4>12/03/1988</h4>
                    <p>
                        Tàu vận tải HQ-605 của Hải quân Việt Nam rời Đá Đông để thiết lập sự hiện
                        diện quân sự tại bãi Len Đao. Tàu đến nơi vào 5 giờ sáng ngày 14 tháng 3 và
                        đã đổ bộ quân thành công, cắm cờ Việt Nam để khẳng định chủ quyền đối với
                        bãi cạn..
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        height: 100vh;
        contain: strict;
    }

    .part1-video {
        width: 100%;
        visibility: hidden;
    }

    .progress-image-wrapper {
        height: 100%;
        contain: strict;

        > .svg-wrapper {
            position: relative;
            height: 100%;
            width: fit-content;

            will-change: transform;
            transition: transform var(--scroll-transition-bezier);

            > svg {
                position: relative;
                height: 100%;

                .part1-path1 {
                    will-change: stroke-dashoffset;
                    transition: stroke-dashoffset var(--scroll-transition-bezier);
                }

                circle {
                    will-change: r, opacity;
                    transition:
                        r 1s cubic-bezier(0, 1, 0, 1),
                        opacity 0.3s var(--scroll-transition-timing-function);
                }
            }

            > .background-overlay {
                padding: 64px;
                display: flex;
                align-items: center;
                justify-content: center;
                will-change: transform;
                transition: transform var(--scroll-transition-bezier);

                > h2 {
                    font-size: 144px;
                    font-family: var(--huxley-max);
                    color: hsl(38, 48%, 78%);
                    white-space: nowrap;
                }
            }

            > .overlay-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                contain: strict;

                > .header-title {
                    transform: translate(64px, 64px);
                    font-size: 48px;
                    font-family: var(--huxley-max);
                    color: var(--dark-red2);

                    will-change: opacity;
                    transition: opacity var(--scroll-transition-bezier);
                }

                > .line {
                    height: 0;
                    max-width: 720px;
                    padding-left: 16px;
                    padding-right: 64px;
                    border-left: 2.5px dashed var(--brown);

                    contain: strict;

                    will-change: height, transform, opacity;
                    transition:
                        height var(--scroll-transition-bezier),
                        transform var(--scroll-transition-bezier),
                        opacity var(--scroll-transition-bezier);

                    > h4 {
                        font-size: 32px;
                        margin-bottom: 16px;
                        font-family: var(--huxley-max);
                        color: var(--blue);
                    }

                    > p {
                        font-family: var(--vl-regular);
                        text-align: justify;
                        color: var(--red);
                        -webkit-text-stroke: 0.25px var(--red);
                    }
                }
            }
        }
    }
</style>
