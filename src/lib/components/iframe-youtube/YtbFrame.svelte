<script lang="ts">
    const { title, id }: { title: string; id: string } = $props();
</script>

<iframe
    src="https://www.youtube-nocookie.com/embed/{id}"
    {title}
    frameborder="0"
    allow="accelerometer; encrypted-media;"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
></iframe>

<style>
    iframe {
        height: 100%;
        width: 100%;
        z-index: -999;
    }
</style>
