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
  outputFormatData: FormatData;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.sectionData= new SectionData();
    this.sectionData.FormattingGroup = new Array<FormatData>(3);
    // tslint:disable-next-line: comment-format
    //this.sectionData.ValidationGroup = new Array<ValidationData>(3);


    this.outputFormatData = new FormatData();
    this.sectionData.FormattingGroup[0]=new FormatData();
    this.sectionData.FormattingGroup[0].header = 'Header output';
    this.sectionData.FormattingGroup[0].body = 'Header body';
    this.sectionData.FormattingGroup[0].footer = 'Header Footer';
  }

}

