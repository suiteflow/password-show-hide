$(document).ready(function(){
  $('[suite-button="password"]').click(function(){
    var passwordInput = $('[suite-password="input"]');
    var button = $(this);
    if (passwordInput.attr('type') === 'password'){
      passwordInput.attr('type', 'text');
      button.text('Hide');
    } else {
      passwordInput.attr('type', 'password');
      button.text('Show');
    }
  });
});
