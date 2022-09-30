/* eslint-disable */

import type { Component } from 'solid-js';
import { Button, ButtonProps } from '../../packages/ui/src/Button';
import { Text } from '../../packages/ui/src/typography/Text';
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

		<h1>Text</h1>
		<Text class="text">Some string of text</Text>
		<Text as="p" id="asds">
			Some string of text
		</Text>
		<Text as="data" value="asds">
			Some string of text
		</Text>
	</div>
);
