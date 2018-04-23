import config from './core-bundle-adapter';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  config._enableProdMode();
}

config._platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
