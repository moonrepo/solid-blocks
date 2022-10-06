import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	build: {
		target: 'esnext',
	},
	plugins: [solidPlugin({ ssr: true })],
	server: {
		port: process.env.HISTOIRE ? 6006 : 3000,
	},
});
