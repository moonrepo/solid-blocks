/* eslint-disable no-console */

import type { Component } from 'solid-js';
import { Button, ButtonProps } from '@solid-blocks/ui/src/Button';
import styles from './App.module.css';

function BrandButton(props: ButtonProps) {
	return <Button {...props} class={{ after: 'pl-2', before: 'pr-2', outer: 'w100 py-2 px-3' }} />;
}

export const App: Component = () => (
	<div class={styles.App}>
		<BrandButton onPress={console.log}>Click me (button)!</BrandButton>
		<br />
		<BrandButton to="#" onPress={console.log}>
			Click me (link)!
		</BrandButton>
	</div>
);
