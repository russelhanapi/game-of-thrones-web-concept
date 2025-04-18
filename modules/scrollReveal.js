export function initializeScrollReveal() {
  ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 200,
  });
  ScrollReveal().reveal('.logo-container', { delay: 1500, origin: 'bottom' });
  ScrollReveal().reveal('.author-img', { origin: 'top' });
  ScrollReveal().reveal('.paragraphs-container, .scrollable-synopsis', {
    origin: 'bottom',
  });
  ScrollReveal().reveal(
    '#heading-information, .poster-img, .secondary-heading--small',
    { origin: 'left' }
  );
  ScrollReveal().reveal('.book-img, #heading-synopsis', { origin: 'right' });
  ScrollReveal().reveal('.blockquote:nth-child(1)', {
    delay: 500,
    origin: 'bottom',
  });
  ScrollReveal().reveal('.blockquote:nth-child(2)', {
    delay: 3000,
    origin: 'top',
    distance: '20px',
  });
  ScrollReveal().reveal('.blockquote:nth-child(3)', {
    distance: '0px',
    delay: 6300,
    duration: 3800,
  });
  ScrollReveal().reveal('.blockquote:nth-child(4)', {
    distance: '0px',
    delay: 8000,
    duration: 1000,
  });
}
