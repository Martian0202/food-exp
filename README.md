# Food Explorer 🥦

A simple grocery browsing app built with plain HTML, CSS, and JavaScript. No frameworks, no build tools — just open and go.

---

## What it does

- Fetches grocery items from the [DummyJSON API](https://dummyjson.com/products/category/groceries)
- Shows them as cards with an image, name, category, and price
- Lets you search by name, filter by category, and sort by price

---

## How to run it

Just open `index.html` in your browser. That's it.

If you prefer the command line:
```bash
open index.html
```

Or if you want auto-reload while editing, use VS Code's **Live Server** extension.

---

## File structure

```
FOODD/
├── index.html   # page structure
├── style.css    # styling and layout
└── script.js    # all the logic
```

---

## Notes

- No `for` or `while` loops — filter/sort/render all use `map`, `filter`, and `sort`
- The original data is never modified; filtering works on a separate copy
- Works offline except for the initial API fetch and Google Fonts
