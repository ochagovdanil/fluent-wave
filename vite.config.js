import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@data': path.resolve(__dirname, './src/data'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
		},
	},
	plugins: [react()],
	server: {
		open: true,
	},
	build: {
		outDir: 'build',
	},
	preview: {
		open: true,
	},
});
