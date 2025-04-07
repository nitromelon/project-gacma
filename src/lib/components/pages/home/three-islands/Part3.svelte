<script lang="ts">
    import Pic1 from "$lib/assets/images/home/threeislands/2.jpg";
    import language_perference, { display_text } from "$lib/components/language/config";

    const pic1_description = $derived(
        display_text(
            $language_perference,
            `Đảm bảo an ninh quốc phòng biển, đảo (Tạp chí cộng sản, 2018)`,
            `Safeguarding maritime national defense and island security (Tạp chí cộng sản, 2018)`,
        ),
    );
</script>

<h2 class="heading-title">
    {display_text(
        $language_perference,
        `PHẦN 3: NƠI TIỀN TIÊU TỔ QUỐC`,
        `PART 3: STRATEGIC ROLE IN NATIONAL DEFENSE AND SECURITY`,
    )}
</h2>

<section>
    <div class="paragraph-wrapper">
        <p>
            {display_text(
                $language_perference,
                `Về mặt quân sự, ba đảo này giữ vai trò quan trọng trong việc bảo vệ tuyến phòng thủ biển đảo của Việt Nam. Với vị trí chiến lược của mình, Cô Lin và Len Đao là các cứ điểm giúp duy trì sự hiện diện của Việt Nam tại khu vực phía tây Trường Sa. Nếu để mất hai đảo này, nguy cơ mở rộng chiếm đóng từ nước ngoài sẽ trở nên nghiêm trọng hơn.`,
                `From a military standpoint, these three islands are essential for defending Vietnam’s maritime and island defense line. With their strategic positions, Co Lin and Len Dao act as strongholds to maintain Vietnam’s presence in the Western Spratly region. If these two islands are lost, the risk of expanded occupation by foreign forces would become more serious.`,
            )}
        </p>

        <p>
            {display_text(
                $language_perference,
                `Ngoài ra, việc duy trì sự kiểm soát tại hai đảo còn giúp Việt Nam có cơ sở để giám sát các hoạt động hàng hải và bảo vệ tuyến giao thương quan trọng đi qua Biển Đông. Việt Nam cũng tăng cường các biện pháp phòng thủ tại các đảo này để ngăn chặn những hành động gây mất ổn định từ bên ngoài.`,
                `Furthermore, maintaining control over these islands provides Vietnam with a base to monitor maritime activities and protect critical trade routes passing through the East Vietnam Sea. Vietnam is also enhancing defensive measures on these islands to prevent destabilizing actions from external forces.`,
            )}
        </p>
    </div>
    <div class="image-wrapper">
        <img src={Pic1} alt={pic1_description} title={pic1_description} />
        <p>{pic1_description}</p>
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
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
        }

        p {
            font-family: var(--vl-regular);
            color: var(--tan);
            max-width: 720px;
        }

        > .paragraph-wrapper {
            > p {
                line-height: 1.25;
                text-align: justify;
            }
        }

        > .image-wrapper {
            > img {
                width: 100%;
            }
        }
    }
</style>
