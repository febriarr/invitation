// Nav
const navLinks = document.getElementsByClassName('nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    let target = document.querySelector(link.getAttribute('href'));
    let targetSection = document.querySelector(target);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  });
});

function setActiveLink() {
  let fromTop = window.scrollY;

  navLinks.forEach((link) => {
    let section = document.querySelector(link.getAttribute('href'));

    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      navLinks.forEach((link) => link.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

// Countdown
const countdownTarget = new Date('2025-05-25T00:00:00').getTime();

function updateCountDown() {
  const now = new Date().getTime();
  const timeLeft = countdownTarget - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
      <div class="countdown-item">
        <div class="countdown-number">${days}</div>
        <div class="countdown-label">Days</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">${hours}</div>
        <div class="countdown-label">Hours</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">${minutes}</div>
        <div class="countdown-label">Minutes</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">${seconds}</div>
        <div class="countdown-label">Seconds</div>
      </div>
    `;
  } else {
    document.getElementById('countdown').innerHTML = 'The countdown is over!';
  }
  setTimeout(updateCountDown, 1000);
}

updateCountDown();
