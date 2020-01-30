import { ValidationData } from './../Model/validation-data';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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

  @Input() validationData: ValidationData;

  ErrorTypes: ErrorType[] = [
    {value: 'Warning', viewValue: 'Warning'},
    {value: 'Error', viewValue: 'Error'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
