import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {SectionComponent} from './Section/section.component';
import { SectionData } from './Model/section-data';
import { FormatData } from './Model/format-data';
import { ValidationData } from './Model/validation-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    sectionDatas: SectionData[];

    constructor(private _formBuilder: FormBuilder) {}
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    ngOnInit() {
      this.sectionDatas = new Array<SectionData>(3);
      this.sectionDatas[0] = new SectionData();
      // ToDo: This has to be filled by parsing the file
      this.sectionDatas[0].FormattingGroup = new Array<FormatData>(2);
      this.sectionDatas[0].FormattingGroup[0] = new FormatData();
      this.sectionDatas[0].FormattingGroup[0].header = 'Header output';
      this.sectionDatas[0].FormattingGroup[0].body = 'Header body';
      this.sectionDatas[0].FormattingGroup[0].footer = 'Header Footer';
      this.sectionDatas[0].FormattingGroup[1] = new FormatData();
      this.sectionDatas[0].FormattingGroup[1].header = 'Summary output';
      this.sectionDatas[0].FormattingGroup[1].body = 'Summary body';
      this.sectionDatas[0].FormattingGroup[1].footer = 'Summary Footer';
      this.sectionDatas[0].ValidationGroup = new Array<ValidationData>(1);
      this.sectionDatas[0].ValidationGroup[0] = new ValidationData();
      this.sectionDatas[0].ValidationGroup[0].message = 'This is outrageous';
      this.sectionDatas[0].ValidationGroup[0].rule = 'Check Date';
      this.sectionDatas[0].ValidationGroup[0].errorType = 0;

      this.sectionDatas[1] = new SectionData();
      // ToDo: This has to be filled by parsing the file
      this.sectionDatas[1].FormattingGroup = new Array<FormatData>(2);
      this.sectionDatas[1].FormattingGroup[0] = new FormatData();
      this.sectionDatas[1].FormattingGroup[0].header = 'Client Header output';
      this.sectionDatas[1].FormattingGroup[0].body = 'Client Header body';
      this.sectionDatas[1].FormattingGroup[0].footer = 'Client Header Footer';
      this.sectionDatas[1].FormattingGroup[1] = new FormatData();
      this.sectionDatas[1].FormattingGroup[1].header = 'Client Summary output';
      this.sectionDatas[1].FormattingGroup[1].body = 'Client Summary body';
      this.sectionDatas[1].FormattingGroup[1].footer = 'Client Summary Footer';
      this.sectionDatas[1].ValidationGroup = new Array<ValidationData>(1);
      this.sectionDatas[1].ValidationGroup[0] = new ValidationData();
      this.sectionDatas[1].ValidationGroup[0].message = 'This is outrageous Client';
      this.sectionDatas[1].ValidationGroup[0].rule = 'Client Check Date';
      this.sectionDatas[1].ValidationGroup[0].errorType = 0;

      this.sectionDatas[2] = new SectionData();
      // ToDo: This has to be filled by parsing the file
      this.sectionDatas[2].FormattingGroup = new Array<FormatData>(2);
      this.sectionDatas[2].FormattingGroup[0] = new FormatData();
      this.sectionDatas[2].FormattingGroup[0].header = 'Employee Header output';
      this.sectionDatas[2].FormattingGroup[0].body = 'Employee Header body';
      this.sectionDatas[2].FormattingGroup[0].footer = 'Employee Header Footer';
      this.sectionDatas[2].FormattingGroup[1] = new FormatData();
      this.sectionDatas[2].FormattingGroup[1].header = 'Employee Summary output';
      this.sectionDatas[2].FormattingGroup[1].body = 'Employee Summary body';
      this.sectionDatas[2].FormattingGroup[1].footer = 'Employee Summary Footer';
      this.sectionDatas[2].ValidationGroup = new Array<ValidationData>(1);
      this.sectionDatas[2].ValidationGroup[0] = new ValidationData();
      this.sectionDatas[2].ValidationGroup[0].message = 'This is outrageous Employee';
      this.sectionDatas[2].ValidationGroup[0].rule = 'Employee Check Date';
      this.sectionDatas[2].ValidationGroup[0].errorType = 0;

      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }

    SaveJson(event: Event) {
      alert(this.sectionDatas[0].FormattingGroup[0].header + this.sectionDatas[0].FormattingGroup[1].header
        + this.sectionDatas[1].FormattingGroup[0].header + this.sectionDatas[1].FormattingGroup[1].header
        + this.sectionDatas[2].FormattingGroup[0].header + this.sectionDatas[2].FormattingGroup[1].header);

      // alert(this.sectionDatas[0].ValidationGroup[0].message
      //    + this.sectionDatas[1].ValidationGroup[0].message
      //    + this.sectionDatas[2].ValidationGroup[0].message);

    }
  }

