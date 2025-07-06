import { Component } from '@angular/core';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent {

  openPDF(fileName: any): void {
    const url = `assets/aptitude/${fileName}.pdf`;  // path to your PDF file in the assets folder
    window.open(url, '_blank');  // open the PDF in a new tab
  }
}
