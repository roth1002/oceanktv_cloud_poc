import '../../sass/toast.sass';

export default (msg) => {
	const $toast = $('#toast');
	$toast.text(msg).addClass('is-visible');
	setTimeout(() => {
		$toast.removeClass('is-visible');
	}, 2000);
}