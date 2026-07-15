// Transições do site — fade-in de entrada + reveal ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
  // fade-in suave assim que a página carrega
  requestAnimationFrame(() => document.body.classList.add('loaded'));

  // marca os blocos que devem animar ao entrar na tela
  const alvos = document.querySelectorAll(
    'section, .job, .case-stint, .carta .capitulo, .item-card, .categoria, .trilha'
  );
  alvos.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  alvos.forEach(el => observer.observe(el));

  // transição suave ao navegar entre páginas internas do site
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    if (link.target === '_blank') return;
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      e.preventDefault();
      document.body.classList.remove('loaded');
      setTimeout(() => { window.location.href = href; }, 220);
    });
  });
});
