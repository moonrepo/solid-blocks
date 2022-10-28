import { ButtonAsButtonProps, ButtonAsLinkProps, ButtonOrLink } from './internal/ButtonOrLink';

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
	return <ButtonOrLink {...props} />;
}
