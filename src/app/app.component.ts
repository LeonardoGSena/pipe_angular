import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  height: string = '';
  miles: string = '';

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = (event.target as HTMLInputElement).value;
    var amountParsed = parseFloat(this.amount);
  }

  onHeightChange(event: Event) {
    this.height = (event.target as HTMLInputElement).value;
    var heightParsed = parseFloat(this.height);
  }

  onMilesChange(event: Event) {
    this.miles = (event.target as HTMLInputElement).value;
    var milesParsed = parseFloat(this.miles);
  }
}
