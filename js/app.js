// (function ($) {
//   $(document).ready(function(){
//
//     // hide .navbar first
//     $(".navbar").hide();
//
//     // fade in .navbar
//     $(function () {
//         $(window).scroll(function () {
//
//                  // set distance user needs to scroll before we start fadeIn
//             if ($(this).scrollTop() > 100) {
//                 $('.navbar').fadeIn();
//             } else {
//                 $('.navbar').fadeOut();
//             }
//         });
//     });
//
// });
//   }(jQuery));
// console.log('hello');
// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();
