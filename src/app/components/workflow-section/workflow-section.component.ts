import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageDirectionService } from '../../services/LanguageDirectionService';

@Component({
  selector: 'app-workflow-section',
  imports: [TranslateModule,CommonModule],
  templateUrl: './workflow-section.component.html',
  styleUrl: './workflow-section.component.scss'
})
export class WorkflowSectionComponent {
 isRTL: boolean = false;

  constructor(private languageDirectionService: LanguageDirectionService) {}

  ngOnInit(): void {
    this.languageDirectionService.isRTL$.subscribe((isRTL) => {
      this.isRTL = isRTL;
    });
  }
}
