import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageDirectionService } from '../../services/LanguageDirectionService';

@Component({
  selector: 'app-features-section',
  imports: [TranslateModule,CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {
  isRTL: boolean = false;

  constructor(private languageDirectionService: LanguageDirectionService) {}

  ngOnInit(): void {
    this.languageDirectionService.isRTL$.subscribe((isRTL) => {
      this.isRTL = isRTL;
    });
  }

}
