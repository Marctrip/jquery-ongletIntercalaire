$(function() {
	$('#mentions').hide();
	$('#about').hide();
	$('#mentions2').hide();
	$('#about2').hide();
	$('.tabs a').click(function(e) {

		e.preventDefault()
		var $a = $(this);
		var $li = $a.parent();
		if ($li.hasClass('active')) {
			return false;
		}
		var $target = $($a.attr('href'))
		$li.siblings('.active').removeClass('active');
		$li.addClass('active');

		$target.show()
		$target.siblings().hide();
	});
});