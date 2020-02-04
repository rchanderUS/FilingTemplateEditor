import { ValidationData } from './../Model/validation-data';
import { SectionData } from './../Model/section-data';
import { FormatData } from './../Model/format-data';
import {Component, Input} from '@angular/core';

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() sectionData: SectionData;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }
}

