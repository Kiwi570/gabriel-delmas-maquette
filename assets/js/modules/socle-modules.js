/* Pont entre les modules de la bibliothèque et le socle du site : les modules appellent pret([...])
   et reçoivent GSAP et ScrollTrigger déjà chargés par la page (scripts defer), sans rien instancier eux-mêmes. */
import { rafraichir as rafraichirSocle, boucle as boucleSocle } from '../socle/index.js?v=1';

const attendreGsap = () => new Promise((ok) => {
  if (window.gsap) return ok();
  const debut = performance.now();
  const v = () => (window.gsap || performance.now() - debut > 3000 ? ok() : requestAnimationFrame(v));
  v();
});

export const socle = {
  get gsap() { return window.gsap || null; },
  get ScrollTrigger() { return window.ScrollTrigger || null; },
  get SplitText() { return window.SplitText || null; },
  Flip: null, OGL: null, lenis: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { return false; },
  rafraichir() { try { rafraichirSocle(); } catch (e) {} },
  boucle(el, fn) { return boucleSocle(el, (dt, t) => fn(t, dt)); },
  mesurer() {},
};

export async function pret() {
  await attendreGsap();
  return socle;
}
