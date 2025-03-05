import { sveltekit } from "@sveltejs/kit/vite";
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import cssnano from "cssnano";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],
    css: {
        postcss: {
            plugins: [
                nested({}),
                autoprefixer({}),
                cssnano({
                    preset: "default",
                }),
            ],
        },
    },
    build: {
        terserOptions: {
            parse: {
                html5_comments: false,
            },
        },
    },
});
