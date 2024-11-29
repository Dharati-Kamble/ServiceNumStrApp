import { Component,OnInit } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  isPrime: boolean = false;
  capitalCount: number = 0;

  numberToCheck : number = 29; // Hardcoded value for checking prime
    stringToCheck : string = 'Hello Angular World!'; // Hardcoded string

  constructor(
    private numberService: NumberService,
    private stringService: StringService
  ) {}

  ngOnInit(): void {
    

    this.isPrime = this.numberService.ChkPrime(this.numberToCheck);
    this.capitalCount = this.stringService.CountCapital(this.stringToCheck);
  }
}
