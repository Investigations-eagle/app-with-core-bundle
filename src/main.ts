import core from './core-bundle-adapter';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  core._enableProdMode();
}

core._platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
