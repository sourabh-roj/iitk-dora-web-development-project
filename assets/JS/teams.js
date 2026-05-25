document.addEventListener('DOMContentLoaded', () => {
  // Select all cards and section titles
  const teamCards = document.querySelectorAll('.team-card');
  const sectionTitles = document.querySelectorAll('.section-title');

  // Observer configuration
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // For section titles, animate immediately
        if (entry.target.classList.contains('section-title')) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
          return;
        }

        // For team cards, calculate delay based on their position
        const section = entry.target.closest('.team-section, .section-container');
        if (!section) return;

        const rows = section.querySelectorAll('.row');
        let globalIndex = 0;

        for (const row of rows) {
          const cardsInRow = row.querySelectorAll('.team-card');
          const cardArray = Array.from(cardsInRow);
          const localIndex = cardArray.indexOf(entry.target);
          if (localIndex !== -1) {
            globalIndex += localIndex;
            break;
          } else {
            globalIndex += cardsInRow.length;
          }
        }

        setTimeout(() => {
          entry.target.classList.add('animate');
        }, globalIndex * 100);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -30px 0px'
  });

  // Observe all cards and titles
  teamCards.forEach(card => observer.observe(card));
  sectionTitles.forEach(title => observer.observe(title));
});
