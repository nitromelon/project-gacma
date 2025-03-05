<script lang="ts">
    import { onMount } from "svelte";
    import { ButtonState, type StateInformation } from "./button-state";

    const BASE_TRANSITION_DURATION = 250;

    let {
        texts,
        transition_time,
        font_size,
        click_callback,
    }: {
        // Must not be empty array
        texts: [string, ...string[]];
        transition_time: number;
        font_size: number;
        click_callback: (event: MouseEvent) => void;
    } = $props();

    if (texts.length === 1) {
        // At least 2 texts for the animation
        texts = [texts[0], texts[0]];
    }

    let current_index = $state(0);
    let button_state_map: ButtonState[] = $state(
        texts.map((_, index) =>
            index === current_index ? ButtonState.InDisplay : ButtonState.PreDisplay,
        ),
    );

    let css_button_map: StateInformation[] = $derived(
        button_state_map.map((value) => {
            switch (value) {
                case ButtonState.PreDisplay:
                    return {
                        base_duration: 0,
                        transform: "translate(100%, -100%)",
                    };

                case ButtonState.InDisplay:
                    return {
                        base_duration: BASE_TRANSITION_DURATION,
                        transform: "translate(0, 0)",
                    };

                case ButtonState.PostDisplay:
                    return {
                        base_duration: BASE_TRANSITION_DURATION,
                        transform: "translate(-100%, 100%)",
                    };
            }
        }),
    );

    let wait_time = $derived(texts[current_index].length * BASE_TRANSITION_DURATION);
    let timeout: number | undefined;

    onMount(() => {
        return () => {
            clearTimeout(timeout);
        };
    });

    function onclick(event: MouseEvent) {
        if (timeout !== undefined) return;
        click_callback(event);

        const old_index = current_index;
        button_state_map[old_index] = ButtonState.PostDisplay;

        if (current_index + 1 === texts.length) {
            current_index = 0;
        } else {
            current_index += 1;
        }

        button_state_map[current_index] = ButtonState.InDisplay;

        timeout = setTimeout(() => {
            button_state_map[old_index] = ButtonState.PreDisplay;
            timeout = undefined;
        }, wait_time);
    }
</script>

<button style="--font-size: {font_size}em; --transition-time: {transition_time}" {onclick}>
    {#each texts as text, i}
        <h2>
            {#each text as char, j}
                <span
                    style:transition-duration="{(j + 1) * css_button_map[i].base_duration}ms"
                    style:transform={css_button_map[i].transform}
                >
                    {char}
                </span>
            {/each}
        </h2>
    {/each}
</button>

<style>
    button {
        position: relative;
        cursor: pointer;
        padding: 0.5em;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;

        > h2 {
            position: relative;
            font-size: var(--font-size);
            font-style: italic;
            overflow: hidden;
            grid-area: 1 / 1;
            display: flex;
            justify-content: center;

            > span {
                /* transform: translate(100%, -100%); */
                transition: cubic-bezier(1, 0, 0, 1);
            }
        }
    }
</style>
