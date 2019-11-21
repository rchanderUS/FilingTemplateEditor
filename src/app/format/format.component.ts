import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormatComponent implements OnInit {

  _Line1: string;
  @Output()
  Line1Change = new EventEmitter();

  @Input()
  get Line1(): string {
    return this._Line1;
  }
  set Line1(value: string) {
    this._Line1 = value;
    this.Line1Change.emit(this._Line1);
  }

  _Line2: string;
  @Output()
  Line2Change = new EventEmitter<string>();

  @Input()
  get Line2(): string {
    return this._Line2;
  }
  set Line2(value: string) {
    this._Line2 = value;
  }


  
  _Line3: string;
  @Output()
  Line3Change = new EventEmitter<string>();

  @Input()
  get Line3(): string {
    return this._Line3;
  }
  set Line3(value: string) {
    this._Line3 = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
