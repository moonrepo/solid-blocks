import { renderToString } from 'solid-js/web';
import type { ServerRunPayload, ServerStory } from '@histoire/shared';
import type { StoryModule, StoryVariant } from './types';

export async function run({ file, el, storyData }: ServerRunPayload) {
	const module = (await import(/* @vite-ignore */ file.moduleId)) as StoryModule;

	const App = () => {
		const story: ServerStory = {
			id: file.id,
			title: file.fileName,
			...module.default,
			variants: [],
		};

		const content = Object.values(module).filter(
			(value) => typeof value === 'function',
		) as StoryVariant[];

		content.forEach((variant, index) => {
			story.variants.push({
				id: String(index),
				title: variant.name,
				...variant,
			});
		});

		storyData.push(story);

		return content;
	};

	// eslint-disable-next-line no-param-reassign
	el.innerHTML = renderToString(App);
}
