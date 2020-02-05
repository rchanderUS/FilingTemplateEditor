import { FormatData } from './../Model/format-data';
import { Component, OnInit, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
