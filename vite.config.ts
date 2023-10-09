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
                "@components": resolve(__dirname, "src/components"),
                "@views": resolve(__dirname, "src/views"),
            },
        },
        server: {
            host: "localhost",
            port: 8080,
        },
    });
};
