$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      showSuccessMessage();
    });
  });
  
  function showSuccessMessage() {
    var successBox = document.getElementById("success-box");
    var successMessage = document.getElementById("success-message");
    
    successMessage.innerHTML = "Đăng ký thành công!";
    successBox.style.display = "block";
  }
  
