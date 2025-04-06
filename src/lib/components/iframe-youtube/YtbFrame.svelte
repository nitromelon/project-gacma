<script lang="ts">
    const {
        title,
        id,
        autoplay = false,
    }: { title: string; id: string; autoplay?: boolean } = $props();

    const autoplay_string = autoplay ? "autoplay;" : "";
</script>

<iframe
    src="https://www.youtube-nocookie.com/embed/{id}"
    {title}
    frameborder="0"
    allow="accelerometer; encrypted-media; {autoplay_string}"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
></iframe>

<style>
    iframe {
        height: 100%;
        width: 100%;
    }
</style>
