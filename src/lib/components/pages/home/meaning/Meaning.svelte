<script lang="ts">
    const { progress }: { progress: number } = $props();

    import Pic1 from "$lib/assets/images/home/meaning/1.png";
    import Pic2 from "$lib/assets/images/home/meaning/2.png";
    import Pic3 from "$lib/assets/images/home/meaning/3.png";
    import Pic4 from "$lib/assets/images/home/meaning/4.png";
    import Pic5 from "$lib/assets/images/home/meaning/5.png";
    import Pic6 from "$lib/assets/images/home/meaning/6.png";
    import Pic7 from "$lib/assets/images/home/meaning/7.png";
    import Pic8 from "$lib/assets/images/home/meaning/8.png";
    import Pic9 from "$lib/assets/images/home/meaning/9.png";
    import Pic10 from "$lib/assets/images/home/meaning/10.png";
    import Pic11 from "$lib/assets/images/home/meaning/11.png";
    import Pic12 from "$lib/assets/images/home/meaning/12.png";
    import Pic13 from "$lib/assets/images/home/meaning/13.png";
    import Pic14 from "$lib/assets/images/home/meaning/14.png";
    import Pic15 from "$lib/assets/images/home/meaning/15.png";
    import Pic16 from "$lib/assets/images/home/meaning/16.png";
    import Pic17 from "$lib/assets/images/home/meaning/17.png";
    import Pic18 from "$lib/assets/images/home/meaning/18.png";
    import Pic19 from "$lib/assets/images/home/meaning/19.png";
    import Pic20 from "$lib/assets/images/home/meaning/20.png";

    const pics = [
        Pic1,
        Pic2,
        Pic3,
        Pic4,
        Pic5,
        Pic6,
        Pic7,
        Pic8,
        Pic9,
        Pic10,
        Pic11,
        Pic12,
        Pic13,
        Pic14,
        Pic15,
        Pic16,
        Pic17,
        Pic18,
        Pic19,
        Pic20,
    ];

    const PICS_PER_CYCLE = 5;
    const angle = (2 * Math.PI) / PICS_PER_CYCLE;
</script>

<section class="stack-children">
    {#each pics as pic, index}
        {@const pic_angle = angle * (index % PICS_PER_CYCLE)}
        {@const offset_x = Math.cos(pic_angle) * 100}
        {@const offset_y = Math.sin(pic_angle) * 100}

        <img
            src={pic}
            alt=""
            style:z-index={pics.length - index}
            style:transform="translate3d({offset_x}vw, {offset_y}vh, {-index * 100 +
                1600 * progress}vh)"
        />
    {/each}
</section>

<style>
    section {
        height: 100vh;
        perspective: 100vh;
        justify-items: center;
        align-items: center;

        img {
            overflow: hidden;
            backface-visibility: hidden;
            transition: var(--scroll-transition-bezier);
            image-rendering: optimizeSpeed;
        }
    }
</style>
