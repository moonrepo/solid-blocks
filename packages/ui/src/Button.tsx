import { children, createMemo, JSX, mergeProps, Show, splitProps } from 'solid-js';
import { AriaButtonProps, createButton } from '@solid-aria/primitives';
import { classes } from './helpers/classes';

export interface ButtonClasses {
	after?: string;
	before?: string;
	inner?: string;
	outer?: string;
	outerPressed?: string;
}

export interface BaseButtonProps
	extends Omit<AriaButtonProps, 'elementType' | 'href' | 'onPress' | 'rel' | 'target'> {
	after?: JSX.Element;
	before?: JSX.Element;
	children: JSX.Element;
	class?: ButtonClasses;
}

export interface ButtonAsButtonProps extends BaseButtonProps {
	onPress: NonNullable<AriaButtonProps['onPress']>;
}

export interface ButtonAsLinkProps extends BaseButtonProps {
	rel?: string;
	target?: string;
	to: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
	let ref: HTMLAnchorElement | HTMLButtonElement | undefined;
	const elementType = createMemo(() => ('to' in props && props.to ? 'a' : 'button'));
	const [linkProps, baseProps] = splitProps(props as ButtonAsLinkProps, ['rel', 'target', 'to']);
	const createButtonProps = mergeProps({ elementType }, baseProps);
	const { buttonProps, isPressed } = createButton(createButtonProps, () => ref);

	const className = createMemo(() =>
		classes(props.class?.outer, isPressed() && props.class?.outerPressed),
	);

	const content = children(() => (
		<>
			<Show when={props.before}>
				<span class={props.class?.before}>{props.before}</span>
			</Show>

			<span class={props.class?.inner}>{props.children}</span>

			<Show when={props.after}>
				<span class={props.class?.after}>{props.after}</span>
			</Show>
		</>
	));

	return (
		<>
			<Show when={elementType() === 'a'}>
				<a
					{...buttonProps}
					class={className()}
					href={linkProps.to}
					ref={ref as HTMLAnchorElement}
					rel={linkProps.rel}
					target={
						linkProps.target ?? (linkProps.target === '_blank' ? 'noopener noreferrer' : undefined)
					}
				>
					{content()}
				</a>
			</Show>
			<Show when={elementType() === 'button'}>
				<button {...buttonProps} class={className()} ref={ref as HTMLButtonElement}>
					{content()}
				</button>
			</Show>
		</>
	);
}
