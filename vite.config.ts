import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@data': path.resolve(__dirname, './src/data'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
	plugins: [react()],
	server: {
		open: true,
	},
	build: {
		outDir: 'build',
		sourcemap: true,
	},
	preview: {
		open: true,
	},
});
