/* eslint-disable sort-keys */

import type { Plugin } from 'histoire';

export * from './types';

export function HstSolid(): Plugin {
	return {
		name: 'histoire-plugin-solid',

		defaultConfig() {
			return {
				supportMatch: [
					{
						id: 'solid',
						patterns: ['**/*.{tsx,jsx}'],
						pluginIds: ['solid'],
					},
				],
			};
		},

		supportPlugin: {
			id: 'solid',
			moduleName: 'histoire-plugin-solid',
			setupFn: 'setupSolid',
			importStoriesPrepend: `import { lazy } from 'solid-js';`,
			importStoryComponent: (file, index) =>
				`const Comp${index} = lazy(() => import(${JSON.stringify(file.moduleId)}));`,
		},

		// onDev: console.log,
		// onBuild: console.log,
		// config: console.log,
		// configResolved: console.log,
	};
}
