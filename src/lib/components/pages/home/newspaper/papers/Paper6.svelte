<script lang="ts">
    import language_perference, { display_text } from "$lib/components/language/config";
</script>

<div class="wrapper paper-base">
    <div class="line"></div>
    <h1>
        {display_text(
            $language_perference,
            "QUAN HỆ VIỆT NAM - TRUNG QUỐC TRƯỚC 1988:",
            "VIETNAM - CHINA RELATIONS BEFORE 1988:",
        )}
    </h1>
    <h2>
        {display_text(
            $language_perference,
            "Bối cảnh căng thẳng trước trận chiến Gạc Ma (1988)",
            "Tensions leading up to the battle of Gạc Ma (1988)",
        )}
    </h2>
    <div class="line"></div>

    <div class="image-mask"></div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > h1,
        h2 {
            font-size: 36px;
            text-align: center;
            font-family: var(--huxley-max);
            color: var(--red);
            line-height: 1.25;
            padding: 0 8px;
        }

        > h2 {
            text-wrap: balance;
        }

        > .line {
            width: calc(100% - 32px);
            max-width: 1280px;
            height: 4px;
            border: 1px solid var(--red);
            border-left: none;
            border-right: none;
            margin: 64px 0;
        }
    }
</style>
