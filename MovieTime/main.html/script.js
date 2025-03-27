// оформление кнопки профиля 
document.addEventListener('DOMContentLoaded', function() {
    const movieTimeButton = document.getElementById('movieTimeButton');
    const submenu = document.getElementById('submenu');
    let isSubmenuVisible = false;

    movieTimeButton.addEventListener('click', function() {
        isSubmenuVisible = !isSubmenuVisible; 

        if (isSubmenuVisible) {
            movieTimeButton.innerHTML = "<a href='profile-reg.html'><h1>Профиль</h1></a>";
            submenu.classList.remove('hidden');
            submenu.classList.add('visible');
        } else {
            movieTimeButton.innerHTML = "<h1>Movie Time</h1>";
            submenu.classList.remove('visible');
            submenu.classList.add('hidden');
        }
    });
});



const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");


pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") { 
        password.type = "text"; 
        eyeIcon.classList.replace("bx-hide", "bx-show"); 
        return;
      }
      password.type = "password"; 
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });

  });
});


links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); 
    forms.classList.toggle("show-signup");
  });
});