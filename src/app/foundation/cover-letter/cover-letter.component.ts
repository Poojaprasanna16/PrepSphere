import { Component } from '@angular/core';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent {

  openPDF(fileName: any): void {
    const url = `assets/coverletter/${fileName}.pdf`;
    window.open(url, '_blank');
  }

}

