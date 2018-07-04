$(document).ready(() => {
	$('a').filter(function() {
    return (this.href && !this.href.startsWith("mailto:") && this.host !== window.location.host)
	}).each(function() {
		$(this).attr('target', '_blank')
    if ($(this).parents('h1,h2,h3,h4,h5,h6').length === 0) {
      $(this).addClass('external')
    }
	})
})
