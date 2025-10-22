
// main.js
(function(){
  const menuBtn = document.getElementById('menuBtn');
  const navsheet = document.getElementById('navsheet');

  const setOpen = (open) => {
    if(!menuBtn || !navsheet) return;
    navsheet.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  menuBtn?.addEventListener('click', ()=>{
    const open = menuBtn.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
  });

  // Close sheet when clicking a link (on small)
  navsheet?.addEventListener('click', (e)=>{
    if(e.target.tagName === 'A' && window.matchMedia('(max-width: 47.99rem)').matches){
      setOpen(false);
    }
  });

  // Form UX
  const form = document.getElementById('applyForm');
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // constrain grad date to sensible range
  const grad = form?.elements['gradDate'];
  if(grad){
    grad.min = '1970-01-01';
    grad.max = new Date().toISOString().slice(0,10);
  }

  form?.addEventListener('submit', (e)=>{
    if(!form.checkValidity()){
      e.preventDefault();
      // trigger native UI per field
      const firstInvalid = form.querySelector(':invalid');
      firstInvalid?.focus();
      return;
    }
    alert('Account created! (demo)');
    e.preventDefault();
  });
})();
