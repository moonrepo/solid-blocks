/* eslint-disable */

import type { Component } from 'solid-js';
import { Button, ButtonProps } from '../../packages/ui/src/Button';
import { Link } from '../../packages/ui/src/typography/Link';
import { Text } from '../../packages/ui/src/typography/Text';
import { Heading } from '../../packages/ui/src/typography/Heading';
import styles from './App.module.css';

function BrandButton(props: ButtonProps) {
	return <Button {...props} class={{ after: 'pl-2', before: 'pr-2', outer: 'w100 py-2 px-3' }} />;
}

export const App: Component = () => (
	<div class={styles.App}>
		<h1>Button</h1>
		<BrandButton onPress={console.log}>Click me (button)!</BrandButton>
		<br />
		<BrandButton to="#" onPress={console.log}>
			Click me (link)!
		</BrandButton>
		<br />
		<br />

		<h1>Link</h1>
		<Text>
			<Link to="#" onPress={console.log} target="_blank">
				Click me (link)!
			</Link>
			<Link onPress={console.log}>Click me (button)!</Link>
		</Text>

		<h1>Text</h1>
		<Text class="text">Some string of text</Text>
		<Text as="p" id="asds">
			Some string of text
		</Text>
		<Text as="data" value="asds">
			Some string of text
		</Text>

		<h1>Heading</h1>
		<Heading class="class" level={1}>
			Level 1
		</Heading>
		<Heading id="id" level={2}>
			Level 2
		</Heading>
		<Heading level={3}>Level 3</Heading>
		<Heading level={4}>Level 4</Heading>
		<Heading level={5}>Level 5</Heading>
		<Heading level={6}>Level 6</Heading>
		<Heading class="class" level={1} as="p">
			Level 1
		</Heading>
	</div>
);
