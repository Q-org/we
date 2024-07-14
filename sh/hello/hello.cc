// hello.cc
#include <node_api.h>

napi_value Hello(napi_env env, napi_callback_info info) {
napi_value world;
napi_create_string_utf8(env, "Hello, World!", NAPI_AUTO_LENGTH, &world);
return world;
}

napi_value Init(napi_env env, napi_value exports) {
napi_value fn;
napi_create_function(env, nullptr, 0, Hello, nullptr, &fn);
napi_set_named_property(env, exports, "hello", fn);
return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)

# binding.gyp
{
"targets": [
{
"target_name": "hello",
"sources": [ "hello.cc" ],
"include_dirs": [
"<!(node -e \"require('napi-macros')\")"
]
}
]
}