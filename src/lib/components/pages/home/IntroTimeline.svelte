<script lang="ts">
    const { progress }: { progress: number } = $props();
    const timeline_years = [
        [2, 2, 2, 2, 2, 2, 2, "H"],
        [0, 0, 0, 0, 0, 0, 0, "O"],
        [2, 2, 2, 2, 1, 1, 0, "M"],
        [4, 3, 2, 0, 8, 6, 9, "E"],
    ];

    const timeline_description = [
        "Joined RARE lab as a researcher.",
        "First time participated in a Game Jam!",
        "I got accepted into USF. Woo hoo!",
        "Won the Math Olympiad with a Silver.",
        "Bought RPG Maker and learn Ruby. Such a great engine for game dev.",
        "I learned Python the first time!",
        "I touch a PC for the first time. Playing GTA San Andreas, Pokemon Fire Red, and CoD 4 will always be in my memories.",
        "(Interlude)",
    ];

    const step_progress = $derived(Math.floor(progress * 7));
    const step_progress_translate = $derived(step_progress * 100);
</script>

<div class="timeline-years-description stack-children">
    <div class="timeline-years">
        {#each timeline_years as word, i}
            {@const transition_duration = (i + 1) * 250}
            <p class="years">
                {#each word as char, j}
                    {@const odd = (i + j) % 2 !== 0}
                    <span
                        style:transform="translate3d(0,-{step_progress_translate}%,0)"
                        style:color={odd ? "transparent" : ""}
                        style:transition-duration="{transition_duration}ms"
                    >
                        {char}
                    </span>
                {/each}
            </p>
        {/each}
    </div>
    <div class="timeline-images">{progress}</div>
</div>

<p class="description" style:white-space={progress > 0 ? "" : "nowrap"}>
    {timeline_description[step_progress]}
</p>

<style>
    .timeline-years-description {
        position: relative;
        height: 28em;
        width: 100%;

        > .timeline-years {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            > .years {
                line-height: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 1em;
                overflow: hidden;
                font-size: 27vw;

                font-family: "Abril Fatface", serif;
                /* font-style: italic; */
                line-height: 1;
                transform: skew(-10deg);
                -webkit-text-stroke: 2px black;

                > span {
                    transition-timing-function: var(--scroll-transition-timing-function);
                }
            }
        }

        > .timeline-images {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }

    .description {
        position: relative;
        font-size: 1.5em;
        width: 100%;
        padding: 0 2em;
        margin-bottom: calc(2em / 1.5);
        align-self: flex-end;
        font-family: "Quicksand", sans-serif;

        display: flex;
        justify-content: center;
        text-align: center;
        text-wrap: balance;

        color: white;
        mix-blend-mode: difference;
        z-index: 999;
    }
</style>
