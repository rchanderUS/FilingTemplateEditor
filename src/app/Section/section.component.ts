import {Component} from '@angular/core';

export interface SectionGroupLines {
  Line1: string;
  Line2: string;
  Line3: string;
}

export interface SectionGroups {
  ValidationGroups: SectionGroupLines[];
  FormattingGroups: SectionGroupLines[];
}
/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {

}

