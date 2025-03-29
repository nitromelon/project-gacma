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

    const paper_progress = $derived(limited_range_min(progress, END_HEADER_RESIZE));
    const current_page = $derived(NUMBER_OF_PAGES * paper_progress);

    setContext(CURRENT_PAGE_KEY, () => current_page);
</script>

<section class="newspaper-section stack-children">
    <PaperBase {progress} Paper={Paper1} this_page={0}></PaperBase>
    <PaperBase {progress} Paper={Paper2} this_page={1}></PaperBase>
    <PaperBase {progress} Paper={Paper3} this_page={2}></PaperBase>
    <PaperBase {progress} Paper={Paper4} this_page={3}></PaperBase>
    <PaperBase {progress} Paper={Paper5} this_page={4}></PaperBase>
    <PaperBase {progress} Paper={Paper6} this_page={5}></PaperBase>
    <PaperBase {progress} Paper={Paper7} this_page={6}></PaperBase>
    <PaperBase {progress} Paper={Paper8} this_page={7}></PaperBase>
    <PaperBase {progress} Paper={Paper9} this_page={8}></PaperBase>
    <PaperBase {progress} Paper={Paper10} this_page={9}></PaperBase>
    <PaperBase {progress} Paper={Paper11} this_page={10}></PaperBase>
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
