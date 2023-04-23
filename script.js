// Navigation
$(document).ready(function() {
  $('.navbar-nav a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });
});

// About Me
$(document).ready(function() {
  $('#about-me').hide().fadeIn(1000);
});

// Skills
$(document).ready(function() {
  $('#skills ul').hide().fadeIn(2000);
});

// Projects
$(document).ready(function() {
  $('#projects .card').hide().fadeIn(3000);
});

// Experiences
$(document).ready(function() {
  $('#experiences .card').hide().slideDown(3000);
});

// Career
$(document).ready(function() {
  $('#career p').hide().fadeIn(2000);
});

// Contact
$(document).ready(function() {
  $('#contact form').hide().slideDown(3000);
});

$(document).ready(function(){
  let aboutMeText = $("#about-me-text");
let text = aboutMeText.text();
let letters = text.split('');
let newText = "";
for (let i = 0; i < letters.length; i++) {
    newText += "<span>" + letters[i] + "</span>";
}
aboutMeText.html(newText);
setInterval(function() {
  $("#about-me-text span").each(function(i) {
      $(this).addClass("animated fadeInRight").css({
          "animation-delay": (i * 0.03) + "s"
      });
  });
}, 4000);

});

$(document).on('click', '.btn-primary', function() {
  var projectId = $(this).data('project-id');
  var projectContent = $('#project-content-' + projectId).html();
  $('#project-modal-content .modal-title').html($(this).prev().prev().html());
  $('#project-modal-content .modal-body').html(projectContent);
});
