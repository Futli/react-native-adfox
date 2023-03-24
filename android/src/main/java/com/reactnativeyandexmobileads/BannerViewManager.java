package com.reactnativeyandexmobileads;

import androidx.annotation.Nullable;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.yandex.mobile.ads.banner.AdSize;
import com.facebook.react.bridge.ReadableMap;

import java.util.Map;

public class BannerViewManager extends SimpleViewManager<BannerView> {

  @ReactProp(name = "adUnitId")
  public void setAdUnitId(BannerView view, String adUnitId) {
    view.setAdUnitId(adUnitId);
  }

  @ReactProp(name = "parameters")
  public void setParameters(BannerView view, ReadableMap parameters) {
    view.setParameters(parameters);
  }

  @ReactProp(name = "size")
  public void setSize(BannerView view, String size) {
    AdSize adSize;
    switch (size) {
      case "BANNER_300x250":
        adSize = AdSize.BANNER_300x250;
        break;
      case "BANNER_300x300":
        adSize = AdSize.BANNER_300x300;
        break;
      case "BANNER_320x50":
        adSize = AdSize.BANNER_320x50;
        break;
      case "BANNER_320x100":
        adSize = AdSize.BANNER_320x100;
        break;
      case "BANNER_240x400":
        adSize = AdSize.BANNER_240x400;
        break;
      case "BANNER_728x90":
        adSize = AdSize.BANNER_728x90;
        break;
      default:
        adSize = AdSize.BANNER_240x400;
        break;
    }
    view.setSize(adSize);
  }

  @Override
  protected BannerView createViewInstance(ThemedReactContext reactContext) {
    return new BannerView(reactContext);
  }

  @Override
  public @Nullable
  Map getExportedCustomDirectEventTypeConstants() {
    return MapBuilder.of(
      "onError",
      MapBuilder.of("registrationName", "onError"),
      "onLoad",
      MapBuilder.of("registrationName", "onLoad"),
      "onLeftApplication",
      MapBuilder.of("registrationName", "onLeftApplication"),
      "onReturnedToApplication",
      MapBuilder.of("registrationName", "onReturnedToApplication")
    );
  }

  @Override
  public String getName() {
    return "BannerView";
  }
}
