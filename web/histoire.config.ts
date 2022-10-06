import { defineConfig } from 'histoire';
import { HstSolid } from 'histoire-plugin-solid';

export default defineConfig({
	plugins: [HstSolid()],
	storyMatch: ['**/*.story.tsx'],
});
