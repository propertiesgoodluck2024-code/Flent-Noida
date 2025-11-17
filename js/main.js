/ small behaviors: mobile toggle & dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
const mobileToggle = document.getElementById('mobileToggle');
mobileToggle.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'block' ? '' : 'block';
});
document.getElementById('callBtn').addEventListener('click', () => {
  window.location.href = 'tel:+91 9315381500, 9582505055, 9990444451';
});

