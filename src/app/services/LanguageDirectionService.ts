import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageDirectionService {
  private isRTLSubject = new BehaviorSubject<boolean>(false);
  isRTL$ = this.isRTLSubject.asObservable();

  constructor(private translate: TranslateService) {
    // Check the initial language direction
    this.updateDirection(this.translate.currentLang || this.translate.defaultLang);

    // Subscribe to language changes
    this.translate.onLangChange.subscribe((event) => {
      this.updateDirection(event.lang);
    });
  }

  private updateDirection(lang: string) {
    const isRTL = ['ar', 'he', 'fa', 'ur'].includes(lang); // List of RTL languages
    this.isRTLSubject.next(isRTL);

    // Update document direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }

  isRTL(): boolean {
    return this.isRTLSubject.value;
  }
}
