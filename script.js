
document.getElementById('wechat-btn').addEventListener('click', function(){
  var m = document.getElementById('wechat-modal');
  m.setAttribute('aria-hidden','false');
});
document.getElementById('modal-close').addEventListener('click', function(){
  var m = document.getElementById('wechat-modal');
  m.setAttribute('aria-hidden','true');
});
// Close modal on background click
document.getElementById('wechat-modal').addEventListener('click', function(e){
  if(e.target === this) this.setAttribute('aria-hidden','true');
});
