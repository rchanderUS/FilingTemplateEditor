import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface ErrorType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ValidateComponent implements OnInit {

  ErrorTypes: ErrorType[] = [
    {value: 'Warning', viewValue: 'Warning'},
    {value: 'Error', viewValue: 'Error'},
  ];

  Validation: string;
  Message: string;

  constructor() { }

  ngOnInit() {
  }

}
