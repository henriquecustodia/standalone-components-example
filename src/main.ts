import { enableProdMode, ImportedNgModuleProviders, Provider } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LayoutComponent } from './app/layout.component';
import { ENABLE_DARK_THEME_PROVIDER } from './app/providers/dark-theme';
import { environment } from './environments/environment';
import { routerProviders } from './routes';

if (environment.production) {
  enableProdMode();
}

const providers: Array<Provider | ImportedNgModuleProviders> = [
  ENABLE_DARK_THEME_PROVIDER,
  routerProviders,
]

bootstrapApplication(LayoutComponent, { providers })
  .catch(console.error);
