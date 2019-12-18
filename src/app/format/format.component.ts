import { FormatData } from './../Model/format-data';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormatComponent implements OnInit {

  @Input() formatData: FormatData;

  constructor() { }

  ngOnInit() {
  }

}
