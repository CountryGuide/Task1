export function showLoader() {
	const loader = document.querySelector('.loading');
	loader.classList.remove('hide');
	setTimeout(() => loader.classList.add('hide'), 1000);
}
