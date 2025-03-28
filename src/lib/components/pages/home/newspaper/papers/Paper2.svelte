<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";

    type Props = {
        local_progress: number;
    };

    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper2()}
        <h2 class="title">
            SỰ SUY YẾU CỦA LIÊN XÔ <br />
            VÀ ẢNH HƯỞNG ĐẾN VIỆT NAM
        </h2>

        <p class="para1">
            Bước vào giai đoạn cuối thập niên 1980, Liên Xô rơi vào khủng hoảng nghiêm trọng về kinh
            tế và chính trị. Dưới sự lãnh đạo của nhà lãnh đạo thứ 8 của Liên Xô Mikhail Gorbachev,
            <span>chính sách Perestroika “Cải tổ” và Glasnost “Công khai hóa”</span>
            được triển khai với hy vọng cải cách nền kinh tế và hệ thống chính trị của Liên Xô. Tuy nhiên,
            những cải cách này lại vô tình làm suy yếu khả năng kiểm soát của chính quyền trung ương,
            khiến nền kinh tế kiệt quệ và ảnh hưởng của Liên Xô đối với các nước đồng minh dần suy giảm.
        </p>

        <p class="para2">
            Theo các tài liệu lịch sử, viện trợ quân sự và kinh tế của Liên Xô dành cho Việt Nam
            giảm mạnh trong giai đoạn này. Cụ thể, Liên Xô đã cắt giảm đáng kể nguồn cung cấp dầu
            mỏ, lương thực và hỗ trợ tài chính cho Việt Nam, gây khó khăn lớn trong duy trì hoạt
            động quân sự và phát triển kinh tế (CIA, 1988).
        </p>
    {/snippet}

    <h3 class="small-title">Bối cảnh quốc tế: Cơ hội từ sự chuyển dịch quyền lực toàn cầu</h3>

    <div class="wrapper">
        <ProgressScroll progress={limited_range(local_progress, 0.25, 0.75)} content={paper2}
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

        > span {
            text-decoration: var(--red) underline;
        }
    }

    .para2 {
        margin-top: 16px;
        position: relative;
        left: 40%;
        width: 60%;
    }
</style>
