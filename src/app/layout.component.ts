import { ChangeDetectionStrategy, Component, HostBinding, Inject, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ENABLE_DARK_THEME_TOKEN } from './providers/dark-theme';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterModule
  ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {  
        display: block
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  
  @HostBinding('class.dark-theme')
  addDarkThemeClass = this.enableDarkTheme;

  constructor(
    @Inject(ENABLE_DARK_THEME_TOKEN) private enableDarkTheme: boolean,
    private renderer2: Renderer2
  ) { }
  
}
