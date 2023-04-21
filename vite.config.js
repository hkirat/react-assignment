import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: `@import "compass-mixins/lib/_compass";`
            }
        }
    }

})