import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {SectionComponent, SectionGroups} from './Section/section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private _formBuilder: FormBuilder) {}
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    Sections: SectionGroups[];

    ngOnInit() {
      let Section = [ {ValidationGroups:[{Line1:"Hello1",Line2:"World1",Line3:"zzz"}], FormattingGroups:[{Line1:"Format1",Line2:"Warning",Line3:"yyy"}]},
                      {ValidationGroups:[{Line1:"Hello2",Line2:"World2",Line3:"zzz"}], FormattingGroups:[{Line1:"Format2",Line2:"Warning",Line3:"yyy"}]},
                      {ValidationGroups:[{Line1:"Hello3",Line2:"World3",Line3:"zzz"}], FormattingGroups:[{Line1:"Format3",Line2:"Warning",Line3:"yyy"}]},];
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }
  }



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
