/**
 * Debounce generator. Pass a callback function that will
 * execute in 'delay' time. If called in succession with
 * pending execution, pending execution will cancel.
 */
export function debounce<T extends any[]>(callback: (...args: T) => void, delay = 0): (...args: T) => void {
	let ref: number | undefined;

	console.log('debounce set');

	return (...args: T) => {
		console.log('debounce run');

		clearTimeout(ref);
		ref = window.setTimeout(() => {
			console.log('debounce run callback');

			callback(...args);
			ref = undefined;
		}, delay);
	};
}
