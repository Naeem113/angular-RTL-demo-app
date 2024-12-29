import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageDirectionService } from '../../services/LanguageDirectionService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  imports: [TranslateModule,CommonModule],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent {
  isRTL: boolean = false;

  constructor(private languageDirectionService: LanguageDirectionService) {}

  ngOnInit(): void {
    this.languageDirectionService.isRTL$.subscribe((isRTL) => {
      this.isRTL = isRTL;
    });
  }
}
