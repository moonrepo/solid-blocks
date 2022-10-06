import { JSX } from 'solid-js';
import type { ServerStory, ServerVariant } from '@histoire/shared';

export type StoryMetadata = Omit<Partial<ServerStory>, 'variants'>;

export interface StoryVariant extends Partial<ServerVariant> {
	(): JSX.Element;
}

export type StoryModule = Record<string, StoryVariant> & {
	default?: StoryMetadata;
};
