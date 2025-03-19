<script lang="ts">
    import GacMaIntro1 from "$lib/assets/images/home/intro/intro1.png";
    import Date1 from "$lib/assets/images/home/intro/intro-date1.jpg";
    import Date2 from "$lib/assets/images/home/intro/intro-date2.jpg";
</script>

<section class="intro-section">
    <div class="heading-wrapper stack-children">
        <h1>GẠC MA</h1>
        <p>vòng tròn bất tử</p>
    </div>
    <div class="heading2-wrapper">
        <p class="day-month big-text" style:background-image="url('{Date1}')">14.03</p>
        <p class="year big-text" style:background-image="url('{Date2}')">1988</p>
        <img
            class="hero-image"
            src={GacMaIntro1}
            alt="Gạc ma - vòng tròn bất tử: Ảnh 1"
            srcset=""
        />

        <div class="quote-wrapper">
            <p class="quote quote1">
                Khắc tên&nbsp; <br />
                vào biển
            </p>
            <p class="quote quote2">
                Giữ trọn <br />
                chủ quyền
            </p>
        </div>
    </div>
</section>

<style>
    .intro-section {
        min-height: 100vh;
        background-color: var(--tan);
        display: flex;
        flex-direction: column;
        align-items: center;

        > .heading-wrapper {
            align-items: center;
            justify-items: center;

            > h1 {
                color: var(--red);
                font-size: 216px;
                font-family: var(--paz-time);
            }

            > p {
                margin-top: 24px;
                color: var(--blue);
                font-size: 54px;
                font-family: var(--huxley-max);
                -webkit-text-stroke: 1px var(--tan);
            }
        }

        > .heading2-wrapper {
            --side-padding: 16px;
            --grid-template-columns: 1fr 194px 1fr;
            --date-text-size: 240px;

            position: relative;
            width: 100%;

            /* Todo: make breakpoints */
            /* max-width: 1673px; */
            max-width: 1280px;

            min-height: calc(var(--date-text-size) * 2);
            padding: 0 16px;

            display: grid;
            grid-template-columns: var(--grid-template-columns);

            > .day-month {
                grid-area: 1/1;
                justify-self: flex-end;
            }

            > .year {
                grid-area: 1/3;
                justify-self: flex-start;
            }

            > .big-text {
                font-size: var(--date-text-size);
                font-family: var(--huxley-max);
                height: 1em;
                transform: scaleY(2) translateY(25%);
                overflow: hidden;

                background: no-repeat center;
                background-size: cover;
                background-clip: text;
                color: rgba(255, 255, 255, 0.103);

                filter: sepia(0.4);
            }

            > .hero-image {
                /* 194px */
                position: absolute;
                grid-area: 1/1;
                align-self: flex-end;
                width: calc(100% - var(--side-padding));
                /* transform: translateY(25%); */
                margin-top: 25vh;
                object-fit: contain;
            }

            > .quote-wrapper {
                display: grid;
                grid-template-columns: var(--grid-template-columns);
                position: absolute;
                grid-area: 1/1;
                height: calc(var(--date-text-size) * 2);
                width: calc(100% - var(--side-padding));

                > .quote {
                    position: relative;
                    font-family: var(--vl-italic);
                    text-align: right;
                    font-size: 36px;
                }

                > .quote1 {
                    color: var(--blue);
                    grid-area: 1/1;
                    justify-content: flex-end;
                    margin-top: 4em;

                    &::before {
                        position: absolute;
                        font-size: 48px;
                        content: '"';
                        transform: translate(-28px, -16px);
                        font-weight: bolder;
                    }
                }

                > .quote2 {
                    color: var(--red);
                    grid-area: 1/3;
                    justify-self: flex-start;
                    align-self: flex-end;
                    margin-bottom: 4em;

                    &::after {
                        position: absolute;
                        font-size: 48px;
                        content: '"';
                        font-weight: bolder;
                    }
                }
            }
        }
    }
</style>
