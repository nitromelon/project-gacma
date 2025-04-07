<script lang="ts">
    // vn
    import Pic1 from "$lib/assets/images/home/comparison/1.svg";
    import Pic2 from "$lib/assets/images/home/comparison/2.svg";
    import Pic3 from "$lib/assets/images/home/comparison/3.svg";
    import Pic4 from "$lib/assets/images/home/comparison/4.svg";
    import Pic5 from "$lib/assets/images/home/comparison/5.svg";
    import Pic6 from "$lib/assets/images/home/comparison/6.svg";
    import Pic7 from "$lib/assets/images/home/comparison/7.svg";
    import Pic8 from "$lib/assets/images/home/comparison/8.svg";
    import Pic9 from "$lib/assets/images/home/comparison/9.svg";

    // en
    import Pic1_EN from "$lib/assets/images/home/comparison/en/1.svg";
    import Pic2_EN from "$lib/assets/images/home/comparison/en/2.svg";
    import Pic3_EN from "$lib/assets/images/home/comparison/en/3.svg";
    import Pic4_EN from "$lib/assets/images/home/comparison/en/4.svg";
    import Pic5_EN from "$lib/assets/images/home/comparison/en/5.svg";
    import Pic6_EN from "$lib/assets/images/home/comparison/en/6.svg";
    import Pic7_EN from "$lib/assets/images/home/comparison/en/7.svg";
    import Pic8_EN from "$lib/assets/images/home/comparison/en/8.svg";
    import Pic9_EN from "$lib/assets/images/home/comparison/en/9.svg";

    import { LAYOUT_OUTSIDE_ROOT_SLOTS_KEYWORD } from "$lib/components/layout/layout";
    import { getContext, onMount, type Snippet } from "svelte";
    import type { SvelteSet } from "svelte/reactivity";
    import language_perference, {
        display_text,
        LayoutLanguage,
    } from "$lib/components/language/config";

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
            "- Giáp bảo vệ: Giáp thép nhẹ",
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

    const HOVERED_INFO_EN = [
        // 0 tau van tai 1
        [
            "- Type of ship: Polnocny-class amphibious transport ship",
            "- (HQ-604, HQ-605, HQ-505)",
            "- Dimensions: 70m long, 10m wide",
            "- Displacement: 800 tons",
            "- Maximum speed: 18 knots (33 km/h)",
            "- Armor protection: No armor",
            "- Role: Transporting supplies, infantry",
            "- Armament: Small-caliber infantry guns",
        ],

        // 1 tau van tai 2
        [
            "- Type of ship: Polnocny-class amphibious transport ship",
            "- Dimensions: 70m long, 10m wide",
            "- Displacement: 800 tons",
            "- Maximum speed: 18 knots (33 km/h)",
            "- Armor protection: Light steel armor",
            "- Role: Transporting supplies, infantry",
            "- Armament: infantry guns",
        ],

        // 2 tau ho ve
        [
            "- Type of ship: Type 053 H1 missile frigate",
            "- (502, 531, 556)",
            "- Dimensions: 103m long, 10m wide",
            "- Displacement: 1,700 tons",
            "- Maximum speed: 26 knots (48 km/h)",
            "- Armor protection: Light steel armor",
            "- Role: Attack warships, sea control",
            "- Armament: 100mm guns, rocket artillery, anti-ship missiles",
        ],

        // 3 ak
        ["AK-47 (7,62mm)", "range 400m"],

        // 4 b40
        ["B40, effective", "range 100m"],

        // 5 ten lua chong ham
        ["SY-1", "(based on P-15 Termit),", "range 40km"],

        // 6 phao phan luc
        ["122mm rocket", "system, range", "20km"],

        // 7 sung 12.7mm
        ["DShK 12.7mm,", "range 2000m"],

        // 8 phao 100mm
        ["100mm gun,", "range 17km"],

        // 9 phao 100mm
        ["37mm anti-", "aircraft gun", "range 3000m"],
    ];

    let info_choice = $derived.by(() => {
        switch ($language_perference.language) {
            case LayoutLanguage.Vietnamese:
                return HOVERED_INFO;
            case LayoutLanguage.English:
                return HOVERED_INFO_EN;
            default:
                return HOVERED_INFO_EN;
        }
    });

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
            {#each info_choice[current_index] as info_list}
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
            <th class="th th1">{display_text($language_perference, `Việt Nam`, `Viet Nam`)}</th>
            <th class="th th2">{display_text($language_perference, `Trung Quốc`, `China`)}</th>
        </tr>
    </thead>
    <tbody>
        <tr></tr>
        <tr>
            <td class="tvh tvh1">{display_text($language_perference, `TÀU CHIẾN`, `SHIPS`)}</td>
            <td>
                <div class="cell-wrapper vn-warship-wrapper">
                    <img
                        src={display_text($language_perference, Pic1, Pic1_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 0)}
                        onmouseout={mouse_out}
                    />
                </div>
            </td>
            <td>
                <div class="cell-wrapper cn-warship-wrapper">
                    <img
                        src={display_text($language_perference, Pic1, Pic1_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 1)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={display_text($language_perference, Pic2, Pic2_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 2)}
                        onmouseout={mouse_out}
                    />
                </div>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td class="tvh tvh2">{display_text($language_perference, `HỎA LỰC`, `FIREPOWER`)}</td>
            <td>
                <div class="cell-wrapper vn-firearm-wrapper">
                    <img
                        src={display_text($language_perference, Pic3, Pic3_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 3)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={display_text($language_perference, Pic4, Pic4_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 4)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={display_text($language_perference, Pic5, Pic5_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 7)}
                        onmouseout={mouse_out}
                    />
                </div>
            </td>
            <td>
                <div class="cell-wrapper cn-firearm-wrapper">
                    <img
                        src={display_text($language_perference, Pic3, Pic3_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 3)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={display_text($language_perference, Pic6, Pic6_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 5)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={display_text($language_perference, Pic7, Pic7_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 6)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={display_text($language_perference, Pic5, Pic5_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 7)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={display_text($language_perference, Pic8, Pic8_EN)}
                        alt=""
                        onmousemove={(e) => mouse_hover(e, 8)}
                        onmouseout={mouse_out}
                    />
                    <img
                        src={display_text($language_perference, Pic9, Pic9_EN)}
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
