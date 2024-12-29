import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesSectionComponent } from "./components/features-section/features-section.component";
import { WorkflowSectionComponent } from "./components/workflow-section/workflow-section.component";
import { CtaSectionComponent } from "./components/cta-section/cta-section.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";


@Component({
  selector: 'app-root',
  imports: [TranslateModule,
    HeroSectionComponent,
    FeaturesSectionComponent,
    WorkflowSectionComponent,
    CtaSectionComponent,
    TestimonialComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-rtl-demo-app';
  direction: 'ltr' | 'rtl' = 'ltr';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.direction = lang === 'ar' ? 'rtl' : 'ltr';
  }

  toggleDirection() {
    this.direction = this.direction === 'ltr' ? 'rtl' : 'ltr';
  }
}
