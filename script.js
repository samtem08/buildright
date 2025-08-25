// ===== Mobile menu toggle =====
    const btn = document.getElementById('menubtn');
    const menu = document.getElementById('mainmenu');
    btn?.addEventListener('click', ()=>{
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });

    // Close menu on link click (mobile)
    menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      if(getComputedStyle(btn).display !== 'none'){
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      }
    }));

    // ===== Portfolio filter =====
    const filterButtons = document.querySelectorAll('.filters button');
    const cards = document.querySelectorAll('.project-card');
    filterButtons.forEach(b=>b.addEventListener('click', ()=>{
      filterButtons.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const f = b.dataset.filter;
      cards.forEach(c=>{
        const show = f === 'all' || c.dataset.category === f;
        c.style.display = show ? '' : 'none';
      })
    }))

    // ===== Simple form handler (front-end only) =====
    function handleSubmit(e){
      e.preventDefault();
      const note = document.getElementById('formNote');
      note.textContent = 'Thanks! Your request has been received. We will contact you shortly.';
      e.target.reset();
    }

    // Year
    document.getElementById('yr').textContent = new Date().getFullYear();

    document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.hero-cards .card');
  let current = 0;

  function highlightNextCard() {
    cards.forEach(card => card.classList.remove('active'));
    cards[current].classList.add('active');
    current = (current + 1) % cards.length;
  }

  highlightNextCard(); // Initial highlight
  setInterval(highlightNextCard, 1500); // Change every 1.5 seconds
});