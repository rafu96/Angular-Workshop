import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MagicNumberService } from '../services/magic-number.service';
import { MagicNumberResponse } from '../interfaces/magic-number-response';

@Component({
  selector: 'app-magic-number',
  templateUrl: './magic-number.component.html',
  styleUrls: ['./magic-number.component.scss']
})
export class MagicNumberComponent implements OnInit, OnChanges {
  @Input() public magicNumber: number;
  public magicText: string;

  constructor(protected magicNumberService: MagicNumberService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.magicNumberService.getRandomFact(this.magicNumber).subscribe(response => {
      this.magicText = response.text;
      this.magicNumber = response.number;
    });
  }

}
