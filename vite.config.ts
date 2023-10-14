import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        build: {
            sourcemap: true,
            target: "es2021",
        },
        plugins: [vue()],
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
                "@store": resolve(__dirname, "src/store"),
                "@scss": resolve(__dirname, "src/assets/scss"),
                "@components": resolve(__dirname, "src/components"),
                "@base": resolve(__dirname, "src/components/base"),
                "@structures": resolve(__dirname, "src/structures"),
                "@views": resolve(__dirname, "src/views"),
                "@img": resolve(__dirname, "src/assets/img"),
            },
        },
        server: {
            port: 8080,
        },
    });
};
