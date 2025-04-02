<script lang="ts">
    import { limited_range_max, limited_range_min } from "$lib/normalized_limited_range/limited";

    const { progress }: { progress: number } = $props();
    const first_progress = $derived(limited_range_max(progress, 0.5));
    const second_progress = $derived(limited_range_min(progress, 0.5));
</script>

<section>
    <h2 class="heading-title">
        NHỮNG THÁCH THỨC <br />
        HIỆN NAY
    </h2>
    <div class="paragraph-wrapper">
        <div class="wrapper" style:transform="translateY({-100 * first_progress}%)">
            <p>
                Hoạt động quân sự hóa của Trung Quốc là một trong những thách thức đáng lo ngại
                nhất. Bắc Kinh tiếp tục mở rộng và quân sự hóa các đảo nhân tạo tại Trường Sa, làm
                gia tăng căng thẳng và đe dọa an ninh khu vực. Theo PGS.TS. Nguyễn Hồng Quân, chuyên
                gia nghiên cứu Biển Đông, <strong>
                    "Việc Trung Quốc triển khai radar, đường băng và các hệ thống vũ khí trên các
                    thực thể chiếm đóng không chỉ vi phạm luật pháp quốc tế mà còn tạo ra mối đe dọa
                    dài hạn đối với an ninh hàng hải."
                </strong>
            </p>

            <p>
                Bên cạnh yếu tố con người, khí hậu khắc nghiệt cũng là một trở ngại lớn. Khu vực
                Trường Sa thường xuyên hứng chịu bão lớn, sóng cao và hiện tượng nước biển xâm thực,
                khiến việc xây dựng, bảo trì cơ sở hạ tầng gặp nhiều khó khăn. Một kỹ sư từng tham
                gia xây dựng tại đây chia sẻ: <strong>
                    "Chi phí vận chuyển vật liệu và xây dựng ở Trường Sa cao gấp nhiều lần so với
                    đất liền, chưa kể đến các rủi ro do điều kiện thời tiết gây ra."
                </strong>
            </p>
        </div>

        <div
            class="wrapper"
            style:transform="translateY({-100 * first_progress - 100 * second_progress}%)"
        >
            <p>
                Ngoài ra, Việt Nam cũng đang đối mặt với áp lực từ các hoạt động xâm phạm chủ quyền.
                Trung Quốc không chỉ quân sự hóa các đảo chiếm đóng mà còn thường xuyên triển khai
                tàu dân binh, tàu hải cảnh để gây sức ép lên lực lượng bảo vệ đảo của Việt Nam, đồng
                thời cản trở hoạt động đánh bắt của ngư dân. TS. Hoàng Việt, chuyên gia luật quốc
                tế, nhận định: <strong>
                    "Sự hiện diện liên tục của các tàu này tạo ra môi trường căng thẳng, ảnh hưởng
                    đến an ninh biển và tác động trực tiếp đến sinh kế của ngư dân."
                </strong>
            </p>

            <p>
                Việc bảo vệ và duy trì lực lượng trên đảo cũng gặp khó khăn trong tiếp tế và hậu
                cần. Các đảo nhỏ như Cô Lin và Len Đao có diện tích hạn chế, không có nguồn nước
                ngọt tự nhiên, thực phẩm và nhiên liệu phụ thuộc hoàn toàn vào các chuyến tiếp tế từ
                đất liền. Mỗi khi biển động kéo dài, hoạt động vận chuyển bị gián đoạn, ảnh hưởng
                trực tiếp đến đời sống của các chiến sĩ làm nhiệm vụ bảo vệ đảo.
            </p>
        </div>

        <div class="wrapper" style:transform="translateY({-200 * second_progress}%)">
            <p>
                Về mặt đối ngoại, Việt Nam cần duy trì sự ủng hộ của cộng đồng quốc tế trong vấn đề
                Biển Đông, vừa kiên quyết bảo vệ chủ quyền vừa tránh để căng thẳng leo thang thành
                xung đột. Ông Pierre Du Ville, Trưởng đại diện Phái đoàn Wallonie-Bruxelles tại Việt
                Nam, đã đánh giá cao những nỗ lực của Việt Nam trong việc thúc đẩy giải quyết tranh
                chấp một cách hòa bình thông qua biện pháp ngoại giao và đối thoại song phương với
                các nước láng giềng. Ông nhấn mạnh: <strong>
                    "Việt Nam đã thể hiện vai trò tích cực trong việc duy trì hòa bình và ổn định
                    khu vực thông qua các biện pháp ngoại giao khéo léo."
                </strong>
                (TG&VN, 2024)
            </p>

            <p>
                Cuối cùng, nguy cơ xung đột cục bộ luôn hiện hữu trong bối cảnh căng thẳng trên Biển
                Đông ngày càng gia tăng. Việc ứng phó linh hoạt, tránh bị khiêu khích nhưng vẫn đảm
                bảo chủ quyền là một thử thách lớn đối với Việt Nam. Giải pháp đặt ra không chỉ là
                củng cố khả năng phòng thủ mà còn là đẩy mạnh ngoại giao đa phương để bảo vệ lợi ích
                quốc gia một cách hiệu quả và bền vững.
            </p>
        </div>
    </div>
</section>

<style>
    h2 {
        text-align: center;
        text-wrap: balance;
        font-size: 72px;
        font-family: var(--huxley-max);
        color: var(--tan);
    }

    section {
        height: 100vh;
        padding: 64px;
        display: flex;
        gap: 64px;

        > * {
            position: relative;
            flex: 1;
            contain: strict;
        }

        > .heading-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        > .paragraph-wrapper {
            > .wrapper {
                position: relative;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 16px;

                will-change: transform;
                transition: transform var(--scroll-transition-bezier);

                > p {
                    line-height: 1.25;
                    text-align: justify;
                    font-size: 18px;
                    font-family: var(--vl-regular);
                    color: var(--tan);
                    max-width: 720px;

                    > strong {
                        font-weight: 600;
                    }
                }
            }
        }
    }
</style>
