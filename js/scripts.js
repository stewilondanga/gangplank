var user = {
  screen_name: 'maxmustermann'};
function $(q){
  res = document.getElementById(q);
  return res;
}

function sendMessage(msg){
  updateUI(msg);
}

function updateUI(data){
  var wrap = document.createElement('li');
  wrap.className = "me";
  var title = document.createElement('b');
  var name = document.createElement('span');
  var avatar = document.createElement('img');
  var content = document.createElement('span');
  name.innerHTML = data.user.screen_name + " ";
  avatar.src = data.user.avatar;
  content.innerHTML = data.text;
  content.className = "text";
  avatar.className = "ava";
  title.appendChild(name);
  title.appendChild(avatar);
  wrap.appendChild(title);
  wrap.appendChild(content);
  $('chat-list').appendChild(wrap);
  $('text').value="";
}



var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
