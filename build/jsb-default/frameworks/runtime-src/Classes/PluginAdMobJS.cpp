#include "PluginAdMobJS.hpp"
#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "PluginAdMob/PluginAdMob.h"

se::Object* __jsb_sdkbox_PluginAdMob_proto = nullptr;
se::Class* __jsb_sdkbox_PluginAdMob_class = nullptr;

static bool js_PluginAdMobJS_PluginAdMob_getCurrBannerHeight(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        int result = sdkbox::PluginAdMob::getCurrBannerHeight();
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerHeight : Error processing arguments");
        return true;
    }
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerHeight : Error processing arguments");
        int result = sdkbox::PluginAdMob::getCurrBannerHeight(arg0);
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerHeight : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_getCurrBannerHeight)

static bool js_PluginAdMobJS_PluginAdMob_getCurrBannerHeightInPixel(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        int result = sdkbox::PluginAdMob::getCurrBannerHeightInPixel();
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerHeightInPixel : Error processing arguments");
        return true;
    }
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerHeightInPixel : Error processing arguments");
        int result = sdkbox::PluginAdMob::getCurrBannerHeightInPixel(arg0);
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerHeightInPixel : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_getCurrBannerHeightInPixel)

static bool js_PluginAdMobJS_PluginAdMob_hide(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_hide : Error processing arguments");
        sdkbox::PluginAdMob::hide(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_hide)

static bool js_PluginAdMobJS_PluginAdMob_setTestDevices(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_setTestDevices : Error processing arguments");
        sdkbox::PluginAdMob::setTestDevices(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_setTestDevices)

static bool js_PluginAdMobJS_PluginAdMob_show(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_show : Error processing arguments");
        sdkbox::PluginAdMob::show(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_show)

static bool js_PluginAdMobJS_PluginAdMob_getCurrBannerWidthInPixel(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        int result = sdkbox::PluginAdMob::getCurrBannerWidthInPixel();
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerWidthInPixel : Error processing arguments");
        return true;
    }
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerWidthInPixel : Error processing arguments");
        int result = sdkbox::PluginAdMob::getCurrBannerWidthInPixel(arg0);
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerWidthInPixel : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_getCurrBannerWidthInPixel)

static bool js_PluginAdMobJS_PluginAdMob_cache(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_cache : Error processing arguments");
        sdkbox::PluginAdMob::cache(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_cache)

static bool js_PluginAdMobJS_PluginAdMob_getCurrBannerWidth(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        int result = sdkbox::PluginAdMob::getCurrBannerWidth();
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerWidth : Error processing arguments");
        return true;
    }
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerWidth : Error processing arguments");
        int result = sdkbox::PluginAdMob::getCurrBannerWidth(arg0);
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getCurrBannerWidth : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_getCurrBannerWidth)

static bool js_PluginAdMobJS_PluginAdMob_init(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        bool result = sdkbox::PluginAdMob::init();
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_init : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_init)

static bool js_PluginAdMobJS_PluginAdMob_getVersion(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = sdkbox::PluginAdMob::getVersion();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_getVersion : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_getVersion)

static bool js_PluginAdMobJS_PluginAdMob_isAvailable(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_isAvailable : Error processing arguments");
        bool result = sdkbox::PluginAdMob::isAvailable(arg0);
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_PluginAdMobJS_PluginAdMob_isAvailable : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_PluginAdMobJS_PluginAdMob_isAvailable)



static bool js_sdkbox_PluginAdMob_finalize(se::State& s)
{
    CCLOGINFO("jsbindings: finalizing JS object %p (sdkbox::PluginAdMob)", s.nativeThisObject());
    auto iter = se::NonRefNativePtrCreatedByCtorMap::find(s.nativeThisObject());
    if (iter != se::NonRefNativePtrCreatedByCtorMap::end())
    {
        se::NonRefNativePtrCreatedByCtorMap::erase(iter);
        sdkbox::PluginAdMob* cobj = (sdkbox::PluginAdMob*)s.nativeThisObject();
        delete cobj;
    }
    return true;
}
SE_BIND_FINALIZE_FUNC(js_sdkbox_PluginAdMob_finalize)

bool js_register_PluginAdMobJS_PluginAdMob(se::Object* obj)
{
    auto cls = se::Class::create("PluginAdMob", obj, nullptr, nullptr);

    cls->defineStaticFunction("getCurrBannerHeight", _SE(js_PluginAdMobJS_PluginAdMob_getCurrBannerHeight));
    cls->defineStaticFunction("getCurrBannerHeightInPixel", _SE(js_PluginAdMobJS_PluginAdMob_getCurrBannerHeightInPixel));
    cls->defineStaticFunction("hide", _SE(js_PluginAdMobJS_PluginAdMob_hide));
    cls->defineStaticFunction("setTestDevices", _SE(js_PluginAdMobJS_PluginAdMob_setTestDevices));
    cls->defineStaticFunction("show", _SE(js_PluginAdMobJS_PluginAdMob_show));
    cls->defineStaticFunction("getCurrBannerWidthInPixel", _SE(js_PluginAdMobJS_PluginAdMob_getCurrBannerWidthInPixel));
    cls->defineStaticFunction("cache", _SE(js_PluginAdMobJS_PluginAdMob_cache));
    cls->defineStaticFunction("getCurrBannerWidth", _SE(js_PluginAdMobJS_PluginAdMob_getCurrBannerWidth));
    cls->defineStaticFunction("init", _SE(js_PluginAdMobJS_PluginAdMob_init));
    cls->defineStaticFunction("getVersion", _SE(js_PluginAdMobJS_PluginAdMob_getVersion));
    cls->defineStaticFunction("isAvailable", _SE(js_PluginAdMobJS_PluginAdMob_isAvailable));
    cls->defineFinalizeFunction(_SE(js_sdkbox_PluginAdMob_finalize));
    cls->install();
    JSBClassType::registerClass<sdkbox::PluginAdMob>(cls);

    __jsb_sdkbox_PluginAdMob_proto = cls->getProto();
    __jsb_sdkbox_PluginAdMob_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

bool register_all_PluginAdMobJS(se::Object* obj)
{
    // Get the ns
    se::Value nsVal;
    if (!obj->getProperty("sdkbox", &nsVal))
    {
        se::HandleObject jsobj(se::Object::createPlainObject());
        nsVal.setObject(jsobj);
        obj->setProperty("sdkbox", nsVal);
    }
    se::Object* ns = nsVal.toObject();

    js_register_PluginAdMobJS_PluginAdMob(ns);
    return true;
}

