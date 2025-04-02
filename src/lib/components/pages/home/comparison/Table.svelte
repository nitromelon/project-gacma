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
</script>

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
                    <img src={Pic1} alt="" />
                </div>
            </td>
            <td>
                <div class="cell-wrapper cn-warship-wrapper">
                    <img src={Pic1} alt="" />
                    <img src={Pic2} alt="" />
                </div>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td class="tvh tvh2">HỎA LỰC</td>
            <td>
                <div class="cell-wrapper vn-firearm-wrapper">
                    <img src={Pic3} alt="" />
                    <img src={Pic4} alt="" />
                    <img src={Pic5} alt="" />
                </div>
            </td>
            <td>
                <div class="cell-wrapper cn-firearm-wrapper">
                    <img src={Pic3} alt="" />
                    <img src={Pic6} alt="" />
                    <img src={Pic7} alt="" />
                    <img src={Pic5} alt="" />
                    <img src={Pic8} alt="" />
                    <img src={Pic9} alt="" />
                </div>
            </td>
        </tr>
    </tbody>
</table>

<style>
    table {
        margin-bottom: 64px;
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
</style>
