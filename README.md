![](https://img.shields.io/npm/v/tailwind-nord?style=flat)
![](https://img.shields.io/npm/dw/tailwind-nord?style=flat)

<p align="center">
  <a href="https://github.com/crumb1e/tailwind-nord">
    <img src="https://raw.githubusercontent.com/crumb1e/tailwind-nord/master/tailwind-nord.png" alt="Logo">
  </a>

  <h1 align="center">Tailwind Nord</h1>
</p>

A super tiny tailwind plugin that enables the use of the [Nord color palette](https://www.nordtheme.com/).

Made this mainly for myself, as I kept copying the Nord colours over manually. But hopefully it can save someone else 5 mins at the start of a project!

## Installation

`npm i tailwind-nord`

## Usage


In your tailwind.config.js:

```js
  plugins: [
    require('tailwind-nord'),
  ],
```

You now have access to the Nord theme anywhere you would use normal tailwind colours.

```html
<div class="bg-nord0">
    <p class="text-nord5">Hello, this is some text</p>
</div>
```

I've stuck to the colour names set in the Nord documentation to keep things simple. Check that out [here](https://www.nordtheme.com/docs/colors-and-palettes).
