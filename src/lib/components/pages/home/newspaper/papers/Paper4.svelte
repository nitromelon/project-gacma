<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper4/1.webp";
    import Pic2 from "$lib/assets/images/home/newspaper/papers/paper4/2.jpg";
    import "./styles/common.css";
    import language_perference, { display_text } from "$lib/components/language/config";
    import "./styles/common.css";

    type Props = {
        local_progress: number;
    };

    const pic1_description = $derived(
        display_text(
            $language_perference,
            "Nước Mỹ thời chiến tranh lạnh.",
            "The United States during the Cold War.",
        ),
    );
    const pic2_description = $derived(
        display_text(
            $language_perference,
            "Hợp tác quan hệ Mỹ - Trung",
            "Cooperative Relations between the United States and China",
        ),
    );
    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <div class="double-line-break"></div>

        <h2 class="paper4-heading">
            {display_text(
                $language_perference,
                "QUAN HỆ MỸ - TRUNG VÀ SỰ ĐIỀU CHỈNH",
                "U.S. - CHINA RELATIONS AND THE",
            )}
            <br />
            {display_text(
                $language_perference,
                "CHÍNH SÁCH CỦA MỸ TẠI CHÂU Á",
                "ADJUSTMENT OF U.S. POLICY IN ASIA",
            )}
        </h2>

        <div class="separate-div">
            <div class="left-side">
                <img src={Pic1} alt={pic1_description} title={pic1_description} />
                <p>{pic1_description}</p>
            </div>
            <p class="paragraph-base">
                {display_text(
                    $language_perference,
                    "Bên cạnh sự suy yếu của Liên Xô, sự thay đổi trong quan hệ Mỹ - Trung cũng là một yếu tố quan trọng tạo điều kiện để Trung Quốc đẩy mạnh tham vọng tại Biển Đông.",
                    "Alongside the decline of the Soviet Union, changes in U.S.- China relations also played a crucial role in enabling China to advance its ambitions in the East Vietnam Sea.",
                )}
            </p>
        </div>

        <div class="separate-div">
            <p class="paragraph-base">
                {display_text(
                    $language_perference,
                    "Sau khi bình thường hóa quan hệ vào năm 1979, Mỹ và Trung Quốc nhanh chóng trở thành đối tác chiến lược trong bối cảnh Chiến tranh Lạnh. Đối với Washington, Bắc Kinh là một đối trọng quan trọng nhằm kiềm chế ảnh hưởng của Liên Xô tại châu Á. Mỹ đã tăng cường hợp tác quân sự với Trung Quốc, bao gồm cả việc chia sẻ thông tin tình báo và hỗ trợ công nghệ quốc phòng, nhằm củng cố vai trò của Trung Quốc như một đối trọng trước Liên Xô (Hamilton et al., 1999).",
                    "After normalizing relations in 1979, the United States and China quickly became strategic partners within the context of the Cold War. For Washington, Beijing was an important player to curb Soviet influence in Asia. The U.S. strengthened military cooperation with China, including intelligence sharing and technological support in defense, aiming to bolster China’s role as a counterweight against the Soviet Union (Hamilton et al., 1999).",
                )}
            </p>
            <div class="left-side">
                <img src={Pic2} alt={pic2_description} title={pic2_description} />
                <p>{pic2_description}</p>
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
        > .left-side > p {
            font-family: var(--vl-regular);
            font-size: 11px;
            margin-top: 4px;
            -webkit-text-stroke: 0.25px black;
            text-align: center;
        }
    }
</style>
