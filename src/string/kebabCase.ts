export function kebabCase(str: string): string {
	return str
		.replace(/_/g, "-") // Replace underscores with hyphens
		.replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camel case to kebab case
		.replace(/\W+/g, "-") // Replace non-word characters with hyphens
		.toLowerCase();
}
