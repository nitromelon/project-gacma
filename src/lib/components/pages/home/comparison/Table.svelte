<script lang="ts">
    import Pic1 from "$lib/assets/images/home/comparison/1.svg";
    import Pic2 from "$lib/assets/images/home/comparison/2.svg";
    import Pic3 from "$lib/assets/images/home/comparison/3.svg";
    import Pic4 from "$lib/assets/images/home/comparison/4.svg";
    import Pic5 from "$lib/assets/images/home/comparison/5.svg";
    import Pic6 from "$lib/assets/images/home/comparison/6.svg";
    import Pic7 from "$lib/assets/images/home/comparison/7.svg";
    import Pic8 from "$lib/assets/images/home/comparison/8.svg";
    import Pic9 from "$lib/assets/images/home/comparison/9.svg";
    import { LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import type { SvelteSet } from "svelte/reactivity";

    const HOVERED_INFO = [
        // 0 tau van tai 1
        [
            "- Loại tàu: Tàu vận tải đổ bộ lớp Polnocny:",
            "- (HQ-604, HQ-605, HQ-505)",
            "- Kích thước: dài 70m, rộng 10m",
            "- Lượng giãn nước: 800 tấn",
            "- Tốc độ tối đa: 18 hải lí/giờ (33 km/h)",
            "- Giáp bảo vệ: không có",
            "- Vai trò: Vận tải quân nhu, bộ binh",
            "- Trang bị vũ khí: súng bộ binh cỡ nhỏ",
        ],

        // 1 tau van tai 2
        [
            "- Loại tàu: Tàu vận tải đổ bộ lớp Polnocny",
            "- Kích thước: dài 70m, rộng 10m",
            "- Lượng giãn nước: 800 tấn",
            "- Tốc độ tối đa: 18 hải lí/giờ (33 km/h)",
            "- Giáp bảo vệ: không có",
            "- Vai trò: Vận tải quân nhu, bộ binh",
            "- Trang bị vũ khí: súng bộ binh",
        ],

        // 2 tau ho ve
        [
            "- Loại tàu: Tàu hộ vệ tên lửa Type 053 H1",
            "- (502, 531, 556)",
            "- Kích thước: Dài 103m, rộng 10m",
            "- Lượng giãn nước: 1.700 tấn",
            "- Tốc độ tối đa: 26 hải lý/giờ (48 km/h)",
            "- Giáp bảo vệ: Giáp thép nhẹ",
            "- Vai trò: Tàu chiến tấn công, kiểm soát",
            "- Trang bị vũ khí: Pháo 100mm, pháo phản lực, tên lửa chống hạm",
        ],

        // 3 ak
        ["AK-47 (7,62mm)", "tầm bắn 400m"],

        // 4 b40
        ["B40, tầm bắn", "hiệu quả 100m"],

        // 5 ten lua chong ham
        ["SY-1", "(dựa trên P-15 Termit),", "tầm bắn 40km"],

        // 6 phao phan luc
        ["Hệ thống pháo", "phản lực 122mm", "tầm bắn 20km"],

        // 7 sung 12.7mm
        ["DShK 12.7mm,", "tầm bắn 2000m"],

        // 8 phao 100mm
        ["Pháo 100mm,", "tầm bắn 17km"],

        // 9 phao 100mm
        ["Pháo phòng không 37mm", "tầm bắn 3000m"],
    ];

    const fixed_outside_slots: SvelteSet<Snippet> | undefined = getContext(
        LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD,
    );

    let current_index: null | number = $state(null);
    let position = $state({ x: 0, y: 0 });

    onMount(() => {
        if (fixed_outside_slots === undefined) return;
        fixed_outside_slots.add(interact_on_hover);

        return () => {
            fixed_outside_slots.delete(interact_on_hover);
        };
    });

    function mouse_hover(e: MouseEvent, index: number) {
        position.x = e.clientX;
        position.y = e.clientY;
        current_index = index;
    }

    function mouse_out() {
        current_index = null;
    }
</script>

{#snippet interact_on_hover()}
    <div
        class="hover"
        style:opacity={current_index === null ? 0 : 1}
        style:transform="translate(calc(-50% + {position.x}px),calc(-100% + {position.y - 12}px))
        scale({current_index === null ? 0.9 : 1})"
    >
        {#if current_index !== null}
            {#each HOVERED_INFO[current_index] as info_list}
                <p>{info_list}</p>
            {/each}
        {/if}
    </div>
{/snippet}

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<table class="padding-left-right">
    <thead>
        <tr>
            <th></th>
            <th class="th th1">Việt Nam</th>
            <th class="th th2">Trung Quốc</th>
        </tr>
    </thead>
    <tbody>
        <tr></tr>
        <tr>
            <td class="tvh tvh1">TÀU CHIẾN</td>
            <td>
                <div class="cell-wrapper vn-warship-wrapper">
                    <img
                        src={Pic1}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 0)}
                        onmouseout={mouse_out}
                    />
                </div>
            </td>
            <td>
                <div class="cell-wrapper cn-warship-wrapper">
                    <img
                        src={Pic1}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 1)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={Pic2}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 2)}
                        onmouseout={mouse_out}
                    />
                </div>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td class="tvh tvh2">HỎA LỰC</td>
            <td>
                <div class="cell-wrapper vn-firearm-wrapper">
                    <img
                        src={Pic3}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 3)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={Pic4}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 4)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={Pic5}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 7)}
                        onmouseout={mouse_out}
                    />
                </div>
            </td>
            <td>
                <div class="cell-wrapper cn-firearm-wrapper">
                    <img
                        src={Pic3}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 3)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={Pic6}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 5)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={Pic7}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 6)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={Pic5}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 7)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={Pic8}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 8)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={Pic9}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 9)}
                        onmouseout={mouse_out}
                    />
                </div>
            </td>
        </tr>
    </tbody>
</table>

<style>
    table {
        margin-top: 64px;
    }

    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
        text-align: center;
        vertical-align: middle;
        contain: strict;
    }

    td:not(.tvh) {
        width: 50%;
    }

    .th,
    .tvh {
        font-family: var(--huxley-max);
    }

    .th {
        padding: 16px 0;
        font-size: 36px;
    }

    .tvh {
        white-space: nowrap;
        padding: 0 16px;
        font-size: 24px;
    }

    .th1 {
        color: var(--red);
    }

    .th2 {
        color: var(--blue);
    }

    .cell-wrapper {
        height: 35vh;
        min-height: fit-content;
        display: grid;
        gap: 32px;
        padding: 32px;
        justify-items: center;
        align-items: center;
    }

    .vn-warship-wrapper,
    .cn-warship-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }

    .vn-firearm-wrapper {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .cn-firearm-wrapper {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .cell-wrapper > img {
        will-change: transform;
        transition: transform 1s cubic-bezier(0, 1, 0, 1);
    }

    .cell-wrapper:hover {
        > img:hover {
            transform: scale(1);
        }

        > img {
            transform: scale(0.9);
        }
    }

    .hover {
        position: fixed;
        padding: 12px;
        pointer-events: none;
        background-color: black;
        border: 1px solid #efe4d1;
        color: #efe4d1;
        will-change: transform, opacity;
        transition: opacity 0.5s cubic-bezier(0, 1, 0, 1);
        border-radius: 6px;
        line-height: 1.25;
        font-family: "VlRegular", san-serif;
        max-width: 480px;
        text-align: justify;
    }
</style>
