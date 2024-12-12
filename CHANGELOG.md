# Changelog

## v1.0.8

- Renamed example project `setup-temp` to `base`.
- Removed typeface files.

## v1.0.7

- Refactored the `resin` implementation in favor of pure tailwind.
- Refactored components and islands into the `src` folder and organized them into an atomic hierarchy.
- Added the official native tailwind plugin for a base configuration.
- Removed the `deno-gfm` fork in favor of @tailwind/typography and prose styles.

## v1.0.6

- Added the `setup` example project.

## v1.0.5

- Removed the types `classNameString` and `EmptyObject`.

## v1.0.4

- Added the `Keyboard` island.
- Removed the `Autocomplete` and `Dialog` islands.
- Removed the `handlers.ts` module in favor of the `@carcajada/teclas` module.
- Updated `deno.json`, `plugin.ts`, and `deps.ts`.
- Removed the `hooks.ts` module.
- Added the `handleInteraction()` function to the `utils.ts` module.
- Added fixes to the `CONTRIBUTING.md` file.

## v1.0.3

- Added better documentation comments.

## v1.0.2

- Added the `Revealer` island for abstracting the common "See more..." functionality.

## v1.0.1

- Added the `InterObs` island for abstracting the native Intersection Observer
  js functionality.
- Added the `effects.transparent` global style for animations that start from
  `opacity: 0;`.

## v1.0.0

- This updates marks the beginning of Lunchbox as a fully released product.
  Everything is official from now on.
