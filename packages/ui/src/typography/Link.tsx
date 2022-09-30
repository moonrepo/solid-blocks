import { ButtonAsButtonProps, ButtonAsLinkProps, ButtonOrLink } from '../internal/ButtonOrLink';
import { useRequiredTypography } from './context';

export type LinkProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Link(props: LinkProps) {
	useRequiredTypography('Link');

	return <ButtonOrLink {...props} />;
}
