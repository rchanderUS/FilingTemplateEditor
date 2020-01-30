import { ValidationData } from './../Model/validation-data';
import { SectionData } from './../Model/section-data';
import { FormatData } from './../Model/format-data';
import {Component} from '@angular/core';

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  sectionData: SectionData;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.sectionData = new SectionData();
    //ToDo: This has to be filled by parsing the file
    this.sectionData.FormattingGroup = new Array<FormatData>(2);

    this.sectionData.FormattingGroup[0] = new FormatData();
    this.sectionData.FormattingGroup[0].header = 'Header output';
    this.sectionData.FormattingGroup[0].body = 'Header body';
    this.sectionData.FormattingGroup[0].footer = 'Header Footer';

    this.sectionData.FormattingGroup[1] = new FormatData();
    this.sectionData.FormattingGroup[1].header = 'Summary output';
    this.sectionData.FormattingGroup[1].body = 'Summary body';
    this.sectionData.FormattingGroup[1].footer = 'Summary Footer';

    this.sectionData.ValidationGroup = new Array<ValidationData>(1);
    this.sectionData.ValidationGroup[0] = new ValidationData();
    this.sectionData.ValidationGroup[0].message = 'This is outrageous';
    this.sectionData.ValidationGroup[0].rule = 'Check Date';
    this.sectionData.ValidationGroup[0].errorType = 0;
  }

}

