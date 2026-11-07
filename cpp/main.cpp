#include <cctype>
#include <cstring>
#include <emscripten/emscripten.h>

extern "C" {
EMSCRIPTEN_KEEPALIVE
int count_words(const char* text) {
    if (!text) return 0;
    int words = 0;
    bool in_word = false;
    for (const unsigned char* p = reinterpret_cast<const unsigned char*>(text); *p; ++p) {
        const bool is_space = std::isspace(*p) != 0;
        if (!is_space && !in_word) ++words;
        in_word = !is_space;
    }
    return words;
}

EMSCRIPTEN_KEEPALIVE
int count_vowels(const char* text) {
    if (!text) return 0;
    int count = 0;
    for (const unsigned char* p = reinterpret_cast<const unsigned char*>(text); *p; ++p) {
        const unsigned char c = static_cast<unsigned char>(std::tolower(*p));
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') ++count;
    }
    return count;
}

EMSCRIPTEN_KEEPALIVE
int count_bytes(const char* text) {
    return text ? static_cast<int>(std::strlen(text)) : 0;
}
}
