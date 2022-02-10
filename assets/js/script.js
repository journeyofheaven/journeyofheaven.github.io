const galleryImage = document.querySelectorAll('.gallery-img');

galleryImage.forEach((img, index) => {
  img.dataset.aos = 'fade-down';
  img.dataset.aosDelay = index * 50;
  img.dataset.aosDuration = 5000;
});

// init AOS
AOS.init({
  once: true,
  duration: 1000, // durasi default
});

// Gsap
// register plugin text
gsap.registerPlugin(TextPlugin);

gsap.to('.lead', {
  duration: 2,
  text: {
    value: 'Mahasiswa | Web Developer',
  },
  delay: 1.5,
});

gsap.to('.display-6', {
  duration: 1,
  text: {
    value: 'Gian Nurwana',
  },
  delay: 1,
});

// gsap.from('.jumbotron img', {
//   duration: 1.2,
//   y: -100,
//   opacity: 0,
//   rotateY: 360,
// });

// gsap.from('.navbar', {
//   duration: 1,
//   y: '-100%',
//   opacity: 0,
//   ease: 'bounce',
// });

// gsap.from('.display-5', {
//   duration: 1,
//   x: 50,
//   opacity: 0,
//   delay: 0.5,
//   ease: 'back',
// });

// Form Firebase
const scriptURL =
  'https://script.google.com/macros/s/AKfycbxzKzkne28YNnF_uMdPIwJFzKrMfhY0hjgpy7I0KgYdCLacdsCLNtUeylXsZj8GTZsU/exec';
const form = document.forms['submit-to-google-sheet'];
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const alertSuccess = document.querySelector('.alert');

form.addEventListener('submit', e => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombal kirim
  btnSubmit.classList.toggle('d-none');
  btnLoading.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      // tampilkan tombol kirim, hilangkan tombal loading
      btnSubmit.classList.toggle('d-none');
      btnLoading.classList.toggle('d-none');

      // tampilkan alert
      alertSuccess.classList.toggle('d-none');

      // reset form
      form.reset();
      console.log('Success!');
    })
    .catch(error => console.error('Error!', error.message));
});

// e.preventDefault();
// e.preventDefault() mencegah form untuk mengirimkan data dengan method get (fungsi default nya)

const textYear = document.getElementById('textYear');
const date = new Date();

textYear.innerText = date.getFullYear();
