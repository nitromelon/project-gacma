<script lang="ts">
    import { limited_range_min } from "$lib/normalized_limited_range/limited";
    import { setContext } from "svelte";
    import { CURRENT_PAGE_KEY, NUMBER_OF_PAGES } from "./papers/config";
    import { END_HEADER_RESIZE } from "./papers/timeline";
    import PaperBase from "./papers/PaperBase.svelte";
    import Paper1 from "./papers/Paper1.svelte";
    import Paper2 from "./papers/Paper2.svelte";
    import Paper3 from "./papers/Paper3.svelte";
    import Paper4 from "./papers/Paper4.svelte";
    import Paper5 from "./papers/Paper5.svelte";
    import Paper6 from "./papers/Paper6.svelte";
    import Paper7 from "./papers/Paper7.svelte";
    import Paper8 from "./papers/Paper8.svelte";
    import Paper9 from "./papers/Paper9.svelte";
    import Paper10 from "./papers/Paper10.svelte";
    import Paper11 from "./papers/Paper11.svelte";

    const { progress }: { progress: number } = $props();
    const paper_list = [
        Paper1,
        Paper2,
        Paper3,
        Paper4,
        Paper5,
        Paper6,
        Paper7,
        Paper8,
        Paper9,
        Paper10,
        Paper11,
    ];
    const paper_progress = $derived(limited_range_min(progress, END_HEADER_RESIZE));
    const current_page = $derived(NUMBER_OF_PAGES * paper_progress);

    setContext(CURRENT_PAGE_KEY, () => current_page);
</script>

<section class="newspaper-section stack-children">
    {#each paper_list as paper, index}
        <PaperBase {progress} Paper={paper} this_page={index}></PaperBase>
    {/each}
</section>

<style>
    .newspaper-section {
        position: relative;
        contain: strict;
        height: 100vh;

        align-items: center;
        justify-items: center;
    }
</style>
