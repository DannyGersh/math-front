export function isEmpty(target) {
	switch (typeof target) {
	case 'object':
	return !Object.keys(target).length;
	case 'array':
	return !target.length;
	default:
	throw new Error('not a container');
	}
}
