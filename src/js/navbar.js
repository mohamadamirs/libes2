export function initNavbar() {
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('drawer-overlay');
  const nav = document.getElementById('main-nav');
  const l1 = document.getElementById('l1');
  const l2 = document.getElementById('l2');

  if (!btn || !menu || !overlay) return;

  let isOpen = false;

  const toggle = () => {
    isOpen = !isOpen;
    if (isOpen) {
      menu.classList.remove('translate-x-[110%]');
      overlay.classList.remove('hidden');
      setTimeout(() => overlay.classList.add('opacity-100'), 10);
      l1?.classList.add('rotate-45', 'translate-y-0.5');
      l2?.classList.add('-rotate-45', '-translate-y-1');
    } else {
      menu.classList.add('translate-x-[110%]');
      overlay.classList.remove('opacity-100');
      setTimeout(() => overlay.classList.add('hidden'), 300);
      l1?.classList.remove('rotate-45', 'translate-y-0.5');
      l2?.classList.remove('-rotate-45', '-translate-y-1');
    }
  };

  btn.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);

  // Efek saat scroll: Navigasi sedikit mengecil atau berubah shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav?.classList.add('shadow-md', 'top-2');
      nav?.classList.remove('top-3', 'shadow-sm');
    } else {
      nav?.classList.add('top-3', 'shadow-sm');
      nav?.classList.remove('shadow-md', 'top-2');
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => isOpen && toggle());
  });
}
