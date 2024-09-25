import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
    build: {
        rollupOptions:{
            input:{
                main:resolve( _dirname, "index.html"),
                news:resolve( _dirname, "news.html"),
            }
        }
    }
})