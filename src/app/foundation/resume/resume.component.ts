import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  openPDF(fileName: any): void {
    const url = `assets/Resumetemplate/${fileName}.pdf`;
    window.open(url, '_blank');
  }

}
