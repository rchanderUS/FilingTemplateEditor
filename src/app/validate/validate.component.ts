import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
