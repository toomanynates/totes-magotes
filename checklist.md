# Totes Magotes Implementation Checklist

This checklist breaks the plan into concrete tasks we can work through step-by-step.

- [x] Add CSS color variables in `styles.css` (`:root` with primary yellow, cream, black, body color)
- [x] Add Font Awesome stylesheet to `index.html` for icons (calendar, box, dolly, truck)
- [x] Replace header text logo with circular logo image: `assets/logo.jpg`
- [x] Add mobile hamburger button and mobile nav modal using `data-sidebar` and `data-overlay`
- [x] Use `assets/brush-stroke-01.png` as header background accent
- [ ] Create `What's Included` section with 4 icons using Font Awesome; use brush-stroke circle asset as circular background
 - [x] Create `What's Included` section with 4 icons using Font Awesome; use brush-stroke circle asset as circular background
 - [x] Rework Pricing to three tiers (20 / 40 / 60) and use `house01-freepik.jpg`, `house02-freepik.jpg`, `house03-freepik.jpg` for the bedroom icons
 - [x] Add yellow banner section between pricing and add-ons with brush stroke background and copy: "NO FOLDING BOXES, NO TAPE, AND NO CARDBOARD MESS"
 - [x] Add Add-ons area (hand truck $35) — use a squashed `brush-stroke-01.png` as small background for the price chip
- [x] Style hero to show logo then text on mobile; update hero copy and CTA to match mockup
- [ ] Ensure hamburger opens mobile nav and overlay; clicking overlay closes mobile nav and modal
- [ ] Wire up navigation links to scroll to sections; ensure mobile links close the nav on click
 - [x] Ensure hamburger opens mobile nav and overlay; clicking overlay closes mobile nav and modal
 - [x] Wire up navigation links to scroll to sections; ensure mobile links close the nav on click
 - [x] Make icon backgrounds recolorable to brand yellow (or provide alternate recolored PNGs)
- [ ] Test responsive behavior at 600px (mobile), 768px (tablet), 1024px (desktop)
- [ ] Accessibility checks: ARIA labels for hamburger, alt text for icons/images, keyboard close for modal
- [x] Polish spacing, borders and shadows to match mockup (use box-shadow and 4px black borders)
- [ ] Final QA: images load, no layout overflow, all interactions work

Notes:
- Use `assets/brush-stroke-01.png` for larger header backgrounds and a horizontally scaled version for small price chips.
- Font Awesome icons: `fa-calendar`, `fa-box`, `fa-person-dolly`/`fa-dolly`, `fa-truck` (use the best available Font Awesome names).

If you'd like, I can start implementing the `What's Included` icons and the Pricing cards next. Which task should I take on now?