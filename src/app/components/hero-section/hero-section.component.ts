import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

 @Output() onLanguageChange: EventEmitter<string> = new EventEmitter<string>();

  switchLanguage(lang: string) {
    this.onLanguageChange.emit(lang);
  }

}
