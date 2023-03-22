package com.reactnativeyandexmobileads;

import android.os.Handler;
import android.os.Looper;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.yandex.mobile.ads.common.AdRequest;
import com.yandex.mobile.ads.common.AdRequestError;
import com.yandex.mobile.ads.interstitial.InterstitialAd;
import com.yandex.mobile.ads.interstitial.InterstitialAdEventListener;
import com.yandex.mobile.ads.common.ImpressionData;
import java.util.HashMap;
import java.util.Map;

public class InterstitialAdManager extends ReactContextBaseJavaModule implements InterstitialAdEventListener, LifecycleEventListener {

  private Promise mPromise;
  private boolean mDidClick = false;
  private boolean mViewAtOnce = false;
  private Map<String, String> mParameters;

  private InterstitialAd mInterstitial;

  public InterstitialAdManager(ReactApplicationContext reactContext) {
    super(reactContext);
    reactContext.addLifecycleEventListener(this);
  }

  @ReactMethod
  public void showAd(String adUnitId, ReadableMap parameters, Promise p) {
    if (mPromise != null) {
      p.reject("E_FAILED_TO_SHOW", "Only one `showAd` can be called at once");
      return;
    }

    mParameters = new HashMap<String, String>();

    if(parameters == null) {
      return;
    }
   
    ReadableMapKeySetIterator iterator = parameters.keySetIterator();

    while (iterator.hasNextKey()) {
      String key = iterator.nextKey();

      switch (parameters.getType(key)) {
        case Number:
          mParameters.put(key, String.valueOf(parameters.getDouble(key)));
          break;
        case String:
          mParameters.put(key, parameters.getString(key));
          break;
        default:
          throw new IllegalArgumentException("Could not convert object with key: " + key + ".");
      }
    }

    Handler mainHandler = new Handler(Looper.getMainLooper());
    Runnable myRunnable = () -> {
      ReactApplicationContext reactContext = getReactApplicationContext();
      mInterstitial = new InterstitialAd(reactContext);
      mInterstitial.setAdUnitId(adUnitId);
      mInterstitial.setInterstitialAdEventListener(this);
      mInterstitial.loadAd(new AdRequest.Builder().setParameters(mParameters).build());
    };

    mViewAtOnce = true;
    mPromise = p;

    mainHandler.post(myRunnable);
  }

  @Override
  public String getName() {
    return "InterstitialAdManager";
  }

  private void cleanUp() {
    mPromise = null;
    mDidClick = false;
    mViewAtOnce = false;

    if (mInterstitial != null) {
      mInterstitial.destroy();
      mInterstitial = null;
    }
  }

  @Override
  public void onHostResume() {

  }

  @Override
  public void onHostPause() {

  }

  @Override
  public void onImpression(ImpressionData impressionData)  {

  }

  @Override
  public void onAdClicked() {
    mDidClick = true;
  }

  @Override
  public void onHostDestroy() {
    cleanUp();
  }

  @Override
  public void onAdLoaded() {
    if (mViewAtOnce) {
      mInterstitial.show();
    }
  }

  @Override
  public void onAdFailedToLoad(@NonNull AdRequestError adRequestError) {
    mPromise.reject("E_FAILED_TO_LOAD", adRequestError.getDescription());
    cleanUp();
  }

  @Override
  public void onAdShown() {

  }

  @Override
  public void onAdDismissed() {
    mPromise.resolve(mDidClick);
    cleanUp();
  }

  @Override
  public void onLeftApplication() {
    mDidClick = true;
  }

  @Override
  public void onReturnedToApplication() {

  }
}
