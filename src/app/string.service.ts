import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(str: string): number {
    return Array.from(str).filter((char) => char >= 'A' && char <= 'Z').length;
  }
}
