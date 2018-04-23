import { ng } from 'core-bundle';

// Needed direct use without es6 "destructuring". "Destructuring" causes build error
const core = {
  _enableProdMode: ng.core.enableProdMode,
  _BrowserModule: ng.platformBrowser.BrowserModule,
  _NgModule: ng.core.NgModule,
  _platformBrowserDynamic: ng.platformBrowserDynamic.platformBrowserDynamic,
  _Component: ng.core.Component
};

export default core;
