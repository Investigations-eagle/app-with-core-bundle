# AppWithCoreBundle

This app uses ["core-bundle"](https://github.com/Investigations-eagle/core-bundle) like core with 
next encapsulated dependencies:

* "@angular/animations"
* "@angular/common"
* "@angular/core"
* "@angular/router"
* "@angular/http"
* "@angular/forms"
* "@angular/platform-browser"
* "@angular/platform-browser-dynamic"
* "reflect-metadata"
* "zone.js"
* "core-js"
* "rxjs

["core-bundle"](https://github.com/Investigations-eagle/core-bundle) is used via "core-bundle-adapter" file:

**core-bundle-adapter.ts**
```javascript
import { ng } from 'core-bundle';

const config = {
  _enableProdMode: ng.core.enableProdMode,
  _BrowserModule: ng.platformBrowser.BrowserModule,
  _NgModule: ng.core.NgModule,
  _platformBrowserDynamic: ng.platformBrowserDynamic.platformBrowserDynamic,
  _Component: ng.core.Component
};

export default config;
```

And all "Angular" methods are available in code in this way:

```
  @core._NgModule
  core._enableProdMode()
  core._platformBrowserDynamic()
```
