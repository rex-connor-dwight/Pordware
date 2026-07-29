# Pordware build conventions

These rules do not get overridden. Follow them in every file, every response.

1. No component or page file exceeds 200 lines. If it would, split it into
   smaller components and import them.
2. Every time a new file is created, give the terminal command
   (mkdir/touch) to create it, before the code.
3. Styling is TypeScript, not Tailwind, not styled-jsx. Each component has
   a typed `styles` object (`{ [key: string]: React.CSSProperties }`) at
   the bottom of the file, applied via the `style={}` prop.
4. Exception to rule 3: anything that genuinely requires a media query
   (breakpoint-based padding, hiding/showing elements, layout shifts on
   screen size) cannot be expressed in an inline style object. That goes
   in `globals.css` as a CSS custom property or a small utility class,
   referenced from the component via `var(--x)` or `className`. Keep this
   to the minimum necessary, the bulk of styling still stays inline.
5. Design mobile-first. Every section should be checked at a narrow
   viewport before being considered done, not patched afterward.
6. Font is Satoshi, self-hosted via next/font/local, all weights.