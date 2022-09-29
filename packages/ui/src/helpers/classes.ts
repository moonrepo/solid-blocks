export function classes(...list: (boolean | string | null | undefined)[]): string {
	return list.filter((item) => typeof item === 'string' && item).join(' ');
}
