<script lang="ts">
    import ProgressScroll from "$lib/components/progress-scroll/ProgressScroll.svelte";
    import { limited_range } from "$lib/normalized_limited_range/limited";
    import "./styles/common.css";
    import Pic1 from "$lib/assets/images/home/newspaper/papers/paper5/1.png";
    import Pic2 from "$lib/assets/images/home/newspaper/papers/paper5/2.jpg";
    import Pic3 from "$lib/assets/images/home/newspaper/papers/paper5/3.jpg";
    import language_perference, { display_text } from "$lib/components/language/config";
    import "./styles/common.css";

    type Props = {
        local_progress: number;
    };

    const pic2_description = $derived(
        display_text(
            $language_perference,
            "Sự suy yếu của Liên Xô rút khỏi Afghanistan (1988-1989)",
            "The Soviet Union's Withdrawal from Afghanistan (1988-1989)",
        ),
    );

    const pic3_description = $derived(
        display_text(
            $language_perference,
            "Trung Quốc mở rộng kiểm soát ở Biển Đông",
            "China's Expanding Control in the East Vietnam Sea",
        ),
    );

    const { local_progress }: Props = $props();
</script>

<div class="paper-base">
    {#snippet paper()}
        <div class="double-line-break"></div>
        <div class="separate-div">
            <p class="paragraph-base">
                {display_text(
                    $language_perference,
                    "Chính quyền của",
                    "During the 1980s, the administration of",
                )}
                <span>
                    {display_text($language_perference, "Tổng thống", "President")} Ronald Reagan
                </span>
                {display_text(
                    $language_perference,
                    'trong những năm 1980 tiếp tục duy trì chính sách tăng cường hợp tác với Trung Quốc, xem đây là một nhân tố chủ chốt trong chiến lược đối đầu với khối Xô Viết. Mỹ trong giai đoạn này đã lựa chọn cách tiếp cận "ưu tiên Trung Quốc hơn Đông Nam Á", khiến Việt Nam gần như không thể trông cậy vào sự hỗ trợ của Mỹ trong việc bảo vệ chủ quyền biển đảo (Shambaugh, 2021).',
                    "continued to pursue a policy of enhancing cooperation with China, viewing it as a key element in the strategy against the Soviet bloc. The U.S. during this period adopted an approach of “prioritizing China over Southeast Asia,” which left Vietnam with virtually no hope of U.S. support in safeguarding its maritime sovereignty (Shambaugh, 2021).",
                )}
            </p>
            <div class="side">
                <img src={Pic1} alt="Ảnh 1" />
            </div>
        </div>

        <div class="separate-div">
            <p class="paragraph-base">
                {display_text(
                    $language_perference,
                    "Nhận thấy sự thờ ơ của Mỹ và sự suy yếu của Liên Xô, Trung Quốc coi đây là thời điểm lý tưởng để mở rộng kiểm soát trên Biển Đông.",
                    "Recognizing the US's indifference and the Soviet Union's weakening, China considered this an ideal time to expand its control in the East Vietnam Sea.",
                )}
            </p>

            <div class="side side2">
                <img src={Pic2} alt={pic2_description} title={pic2_description} />
                <p>{pic2_description}</p>
            </div>
        </div>

        <div class="separate-div">
            <div class="side side2">
                <img src={Pic3} alt={pic3_description} title={pic3_description} />
                <p>{pic3_description}</p>
            </div>

            <p class="paragraph-base">
                {display_text(
                    $language_perference,
                    "Báo cáo của Bộ Quốc phòng Mỹ cho thấy, vào năm 1987-1988, Trung Quốc đã đẩy mạnh các hoạt động quân sự tại Biển Đông, bao gồm khảo sát địa hình và triển khai tàu chiến nhằm giành quyền kiểm soát các thực thể quan trọng (Office of the Secretary of Defense, 2007).",
                    "Reports from the US Department of Defense indicate that in 1987-1988, China intensified military activities in the East Vietnam Sea, including conducting topographical surveys and deploying warships to seize control of key features (Office of the Secretary of Defense, 2007).",
                )}
            </p>
        </div>

        <h1 class="big-text">
            {display_text(
                $language_perference,
                "TIỀN ĐỀ DẪN ĐẾN TRẬN HẢI CHIẾN GẠC MA (14/03/1988)",
                "THIS WAS THE PRECURSOR TO THE GAC MA (JOHNSON SOUTH REEF) NAVAL BATTLE ON MARCH 14, 1988.",
            )}
        </h1>

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
    .separate-div > .paragraph-base > span {
        text-decoration: underline var(--red);
    }

    .side > img {
        display: block;
        margin: auto;
    }

    .side2 > p {
        font-family: var(--vl-regular);
        font-size: 11px;
        margin-top: 4px;
        -webkit-text-stroke: 0.25px black;
        text-align: center;
        text-wrap: balance;
    }

    h1.big-text {
        position: relative;
        font-family: var(--vl-italic);
        text-align: center;
        font-weight: 600;
        margin-top: 32px;
        box-sizing: content-box;
        padding-bottom: 16px;
    }
</style>
