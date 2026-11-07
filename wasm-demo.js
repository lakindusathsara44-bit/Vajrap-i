(() => {
  "use strict";
  const button = document.getElementById("analyse");
  const input = document.getElementById("source-text");
  const status = document.getElementById("status");
  const output = {
    words: document.getElementById("words"),
    vowels: document.getElementById("vowels"),
    bytes: document.getElementById("bytes")
  };
  if (!button || !input || !status) return;

  if (typeof createVajrapaniModule !== "function") {
    status.textContent = "WebAssembly module not found. Wait for the GitHub Actions build to finish.";
    button.textContent = "Module unavailable";
    return;
  }

  createVajrapaniModule({
    locateFile: (path) => new URL("wasm/" + path, document.baseURI).href
  }).then((Module) => {
    const analyse = () => {
      const text = input.value;
      output.words.textContent = Module.ccall("count_words", "number", ["string"], [text]);
      output.vowels.textContent = Module.ccall("count_vowels", "number", ["string"], [text]);
      output.bytes.textContent = Module.ccall("count_bytes", "number", ["string"], [text]);
      status.textContent = "Analysis completed locally in your browser.";
    };
    button.disabled = false;
    button.textContent = "Analyse text";
    button.addEventListener("click", analyse);
    analyse();
  }).catch((error) => {
    console.error("Vajrapani WebAssembly initialisation failed:", error);
    status.textContent = "Could not load WebAssembly. Check that the build workflow completed successfully.";
    button.textContent = "Module failed to load";
  });
})();
