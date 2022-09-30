import { Accessor, children, createMemo, JSX, Show, splitProps } from 'solid-js';
import { AriaButtonProps, createButton, createLink } from '@solid-aria/primitives';
import { classes } from '../helpers/classes';

export interface ButtonClasses {
	after?: string;
	before?: string;
	inner?: string;
	outer?: string;
	outerPressed?: string;
}

export interface BaseButtonProps
	extends Omit<AriaButtonProps<'a' | 'button'>, 'href' | 'onPress' | 'rel' | 'target'> {
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

function createClass(
	className: Accessor<ButtonClasses | undefined>,
	isPressed: Accessor<boolean>,
): Accessor<string> {
	const result = createMemo(() =>
		classes(className()?.outer, isPressed() && className()?.outerPressed),
	);

	return result;
}

export function InternalButton(props: ButtonAsButtonProps) {
	let ref: HTMLButtonElement | undefined;
	const { buttonProps, isPressed } = createButton(props, () => ref);
	const className = createClass(() => props.class, isPressed);

	return (
		<button {...buttonProps} class={className()} ref={ref}>
			{props.children}
		</button>
	);
}

export function InternalLink(props: ButtonAsLinkProps) {
	let ref: HTMLAnchorElement | undefined;
	const { linkProps, isPressed } = createLink(props, () => ref);
	const className = createClass(() => props.class, isPressed);

	return (
		<a
			{...linkProps}
			class={className()}
			href={props.to}
			ref={ref}
			rel={props.rel ?? (props.target === '_blank' ? 'noopener noreferrer' : undefined)}
			target={props.target}
		>
			{props.children}
		</a>
	);
}

export function ButtonOrLink(props: ButtonAsButtonProps | ButtonAsLinkProps) {
	const [linkProps, baseProps] = splitProps(props as ButtonAsLinkProps, ['rel', 'target', 'to']);

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
		<Show
			when={'to' in props}
			fallback={
				<InternalButton {...(baseProps as ButtonAsButtonProps)} elementType="button">
					{content()}
				</InternalButton>
			}
		>
			<InternalLink {...baseProps} {...linkProps} elementType="a">
				{content()}
			</InternalLink>
		</Show>
	);
}
