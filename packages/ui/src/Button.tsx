import { JSX } from 'solid-js';

export interface ButtonProps {
	children: JSX.Element;
	onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
}

export function Button() {
	return <button>Click me</button>;
}
