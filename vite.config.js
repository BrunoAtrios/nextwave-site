import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2020',
    assetsDir: 'assets',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Nomes de arquivo com hash para cache imutável
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        // Manual chunks: separa libs pesadas para melhor cache
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer': ['framer-motion'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
})