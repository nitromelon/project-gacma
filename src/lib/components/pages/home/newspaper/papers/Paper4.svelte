<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper4/1.webp";
    import Pic2 from "$lib/assets/images/home/newspaper/papers/paper4/2.jpg";

    type Props = {
        local_progress: number;
    };

    const pic1_description = "Nước Mỹ thời chiến tranh lạnh.";
    const pic2_description = "Hợp tác quan hệ Mỹ - Trung";
    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <div class="double-line-break"></div>

        <h2 class="paper4-heading">
            QUAN HỆ MỸ - TRUNG VÀ SỰ ĐIỀU CHỈNH <br />
            CHÍNH SÁCH CỦA MỸ TẠI CHÂU Á
        </h2>

        <div class="separate-div">
            <div class="left-side">
                <img src={Pic1} alt={pic1_description} title={pic1_description} />
                <p>{pic1_description}</p>
            </div>
            <p class="paragraph-base">
                Bên cạnh sự suy yếu của Liên Xô, sự thay đổi trong quan hệ Mỹ - Trung cũng là một
                yếu tố quan trọng tạo điều kiện để Trung Quốc đẩy mạnh tham vọng tại Biển Đông.
            </p>
        </div>

        <div class="separate-div">
            <p class="paragraph-base">
                Sau khi bình thường hóa quan hệ vào năm 1979, Mỹ và Trung Quốc nhanh chóng trở thành
                đối tác chiến lược trong bối cảnh Chiến tranh Lạnh. Đối với Washington, Bắc Kinh là
                một đối trọng quan trọng nhằm kiềm chế ảnh hưởng của Liên Xô tại châu Á. Mỹ đã tăng
                cường hợp tác quân sự với Trung Quốc, bao gồm cả việc chia sẻ thông tin tình báo và
                hỗ trợ công nghệ quốc phòng, nhằm củng cố vai trò của Trung Quốc như một đối trọng
                trước Liên Xô (Hamilton et al., 1999).
            </p>
            <div class="left-side">
                <img src={Pic2} alt={pic2_description} title={pic2_description} />
                <p>{pic2_description}</p>
            </div>
        </div>
    {/snippet}

    <h3 class="small-title">Bối cảnh quốc tế: Cơ hội từ sự chuyển dịch quyền lực toàn cầu</h3>

    <div class="wrapper">
        <ProgressScroll progress={limited_range(local_progress, 0.25, 0.875)} content={paper}
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

    .double-line-break {
        width: 100%;
        height: 4px;
        border: 1px solid black;
        border-left: none;
        border-right: none;
        margin-bottom: 16px;
    }

    .paper4-heading {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: var(--vl-italic);
        font-weight: 600;
        line-height: 1.25;
        margin-bottom: 16px;
    }

    .separate-div {
        display: flex;
        gap: 16px;
        align-items: center;
        margin-bottom: 16px;

        > * {
            flex: 1;
        }

        > .left-side > p {
            font-family: var(--vl-regular);
            font-size: 11px;
            margin-top: 4px;
            -webkit-text-stroke: 0.25px black;
            text-align: center;
        }
    }
</style>
