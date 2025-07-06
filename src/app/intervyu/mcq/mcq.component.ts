import { Component } from '@angular/core';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent {

  openPDF(fileName: string): void {
    const url = `assets/Notes/${fileName}.pdf`;
    window.open(url, '_blank');
  }

  

}
