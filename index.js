$(document).ready(() => {
	$('a').filter(function() {
    return (this.href && !this.href.startsWith("mailto:") && this.host !== window.location.host)
	}).each(function() {
		$(this).attr('target', '_blank')
    $(this).addClass('external')
	})
})
