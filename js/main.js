// const viewportObserver = new IntersectionObserver((entries, observer) => {
//   if (entries[0].isIntersecting) {
//     let typed = new Typed(".descripcion", {
//       strings: [
//         "Brindamos <strong> Asistencia Jurídica Laboral </strong> a trabajadores y empresas basándonos en el <strong> diseño de las mejores estrategias </strong> para la obtención de <strong>soluciones exitosas</strong>. Promovemos un vínculo activo con el cliente a los efectos de lograr construir una relación de confianza y seguridad.",
//       ],
//       typeSpeed: 12,
//       loop: false,
//     });

//     observer.unobserve(entries[0].target);
//   }
// });

// viewportObserver.observe(document.querySelector(".descripcion"));

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 30);
  });

  document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.modal-button').classList.remove('active');
  });

  document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href');
      const section = document.querySelector(sectionId);
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const offset = 100; // Distancia antes de la sección donde detener el desplazamiento

      if (section) {
        console.log(section.offsetTop);
        console.log(navbarHeight);
        const topOffset = section.offsetTop - navbarHeight + offset;
        window.scroll({
          top: topOffset,
          behavior: 'smooth',
        });
      }
    });
  });
});
