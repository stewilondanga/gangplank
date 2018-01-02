var user = {
  screen_name: 'maxmustermann'};
function $(q){
  res = document.getElementById(q);
  return res;
}


var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
