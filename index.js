  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.5
    });
  const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible-right');
        }
      });
    }, {
      threshold: 0.5
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    document.querySelectorAll('.fade-in-right').forEach(el => observer2.observe(el));