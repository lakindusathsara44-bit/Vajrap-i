cmake_minimum_required(VERSION 3.16)
project(VajrapaniWasm LANGUAGES CXX)

add_executable(vajrapani main.cpp)
set_target_properties(vajrapani PROPERTIES
    CXX_STANDARD 17
    CXX_STANDARD_REQUIRED ON
    SUFFIX ".js"
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/../wasm"
)

target_link_options(vajrapani PRIVATE
    "-sMODULARIZE=1"
    "-sEXPORT_NAME=createVajrapaniModule"
    "-sENVIRONMENT=web"
    "-sEXPORTED_FUNCTIONS=['_count_words','_count_vowels','_count_bytes']"
    "-sEXPORTED_RUNTIME_METHODS=['ccall']"
    "-sALLOW_MEMORY_GROWTH=1"
)
