<script lang="ts">
    import Vid1 from "$lib/assets/videos/home/progress/1.mov";

    const { progress }: { progress: number } = $props();
</script>

<section class="stack-children">
    <video muted autoplay loop class="part1-video" preload="auto">
        <source src={Vid1} type="video/mp4" />
    </video>
    <p>Teehee {progress}</p>
</section>

<style>
    section {
        height: 100vh;
        contain: strict;

        video {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
</style>
