# Vajrapani C++ WebAssembly demo

This repository remains a static GitHub Pages website. The optional C++ module is compiled to WebAssembly by GitHub Actions and runs in the visitor's browser; it does not require a server-side C++ runtime.

## Demo

After the workflow completes, open `wasm-demo.html` on the published site.

The demo analyses Roman-script text with three small C++ functions:
- word count
- ASCII vowel count
- UTF-8 byte count

The vowel counter intentionally counts only the Roman vowels a/e/i/o/u. The byte count is not a Unicode character count.

## Build locally

Install the Emscripten SDK, then run:

```sh
emcmake cmake -S cpp -B build
cmake --build build
```

The generated `wasm/vajrapani.js` and `wasm/vajrapani.wasm` files are build artifacts. GitHub Actions generates them for Pages deployment; they need not be committed.

## GitHub Pages

The workflow builds the WebAssembly files and uploads the repository as a Pages artifact. Enable GitHub Actions as the Pages deployment source in repository Settings → Pages if it is not already enabled.
