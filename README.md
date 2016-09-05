inspiration from meteor-accounts-facebook-cordova (andrewreedy)

Accounts Facebook Cordova
================

## Introduction

This packages replaces the accounts-twitter package. It works with [twitter-connect-plugin](https://github.com/ManifestWebDesign/twitter-connect-plugin) when using cordova and doesn't falls back to the accounts-twitter package when in a browser.

================

## Installation / Setup

##### Requirements
* [Cordova: 3.5](http://cordova.apache.org/)
* [twitter-connect-plugin](https://github.com/ManifestWebDesign/twitter-connect-plugin)

================

##### mobile config (mobileConfig.js)
````
App.configurePlugin('twitter-connect-plugin', {
    FABRIC_KEY: 'your_fabric_key'
});

App.setPreference('TwitterConsumerKey', 'twitter_app_consumer_key');
App.setPreference('TwitterConsumerSecret', 'twitter_app_consumer_secret');

````
================

### API
* CFB.getLoginStatus (client only)
* CFB.loginCordova (client only)
* CFB.logout (client only)

### Cordova Setup Guide
Refer to the [twitter-connect-plugin](https://github.com/ManifestWebDesign/twitter-connect-plugin)

