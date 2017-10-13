/* 
* Meteor mobile app configuration file 
*/

// General app information
App.info({
  name: 'Realtime',
  description: 'Coberturas de notícias em tempo real',
  author: 'Allan Alexandre',
  email: 'dev@alexandesigner.com.br',
  website: 'https://alexandesigner.com.br/realtime-news',
  version: '0.1.0',
});

// Android app icons & splash screens
App.icons({
  'iphone_2x': 'resources/icons/iphone_2x.png',
  'ipad': 'resources/icons/ipad.png',
  'ipad_2x': 'resources/icons/ipad_2x.png',

  'android_mdpi': 'resources/icons/android_mdpi.png',
  'android_hdpi': 'resources/icons/android_hdpi.png',
  'android_xhdpi': 'resources/icons/android_xhdpi.png',
});

// iOS app icons & splash screens
App.launchScreens({
  'iphone_2x': 'resources/splash/iphone_2x.png',
  'iphone5': 'resources/splash/iphone5.png',
  'ipad_portrait': 'resources/splash/ipad_portrait.png',
  'ipad_portrait_2x': 'resources/splash/ipad_portrait_2x.png',
  'ipad_landscape': 'resources/splash/ipad_landscape.png',
  'ipad_landscape_2x': 'resources/splash/ipad_landscape_2x.png',

  'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait.png',
  'android_mdpi_landscape': 'resources/splash/android_mdpi_landscape.png',
  'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait.png',
  'android_hdpi_landscape': 'resources/splash/android_hdpi_landscape.png',
  'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait.png',
  'android_xhdpi_landscape': 'resources/splash/android_xhdpi_landscape.png',
});

// General app preferences
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#C2382E');
App.setPreference('Orientation', 'portrait');

// whitelisted domains
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*.meteor.com/*');
App.accessRule('*.local/*');
App.accessRule('*.yoursite.com/*');
