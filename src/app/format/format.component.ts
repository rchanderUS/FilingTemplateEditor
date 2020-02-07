import { FormatData } from './../Model/format-data';
import { Component, OnInit, ChangeDetectionStrategy, Input, NgModule, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import {HOME , ENTER} from '@angular/cdk/keycodes';

export interface TokenGroup {
  model: string;
  tokens: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FormatComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, HOME ];
  tokenCtrl = new FormControl();
  ////////////////
  tokenGroups: TokenGroup[] = [{
    model: 'Client',
    tokens: ['ClientID', 'FEIN', 'Address']
  }, {
    model: 'Employee',
    tokens: ['SSN', 'First Name', 'Last Name']
  }];

  tokenGroupOptions: Observable<TokenGroup[]>;
  ////////////////
  filteredTokens: Observable<string[]>;
  tokens: string[] = [];

  allTokens: string[] = ['SSN', 'First Name', 'Last Name', 'Address', 'ClientID'];

  @ViewChild('tokenInput', {static: false}) tokenInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  @Input() formatData: FormatData;


  constructor() {
      }

      ngOnInit(): void {
        this.tokenGroupOptions = this.tokenCtrl.valueChanges.pipe(
          startWith(''),
          map(value => this._filterGroup(value)));
      }

      add(event: MatChipInputEvent): void {
        // Add token only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
          const input = event.input;
          const value = event.value;

          // Add our token
          if ((value || '').trim()) {
            this.tokens.push(value.trim());
          }

          // Reset the input value
          if (input) {
            input.value = '';
          }

          this.tokenCtrl.setValue(null);
        }
      }

      remove(token: string): void {
        const index = this.tokens.indexOf(token);

        if (index >= 0) {
          this.tokens.splice(index, 1);
        }
      }

      selected(event: MatAutocompleteSelectedEvent): void {
        this.tokens.push(event.option.viewValue);
        this.tokenInput.nativeElement.value = '';
        this.tokenCtrl.setValue(null);
      }

      private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.allTokens.filter(token => token.toLowerCase().indexOf(filterValue) === 0);
      }

      private _filterGroup(value: string): TokenGroup[] {
        if (value) {
          return this.tokenGroups
            .map(group => ({model: group.model, tokens: _filter(group.tokens, value)}))
            .filter(group => group.model.length > 0);
        }
      }

}
