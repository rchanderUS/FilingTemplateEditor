
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ChangeDetectionStrategy, Input, NgModule, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';

export interface TokenGroup {
  model: string;
  tokens: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})


export class TokenComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tokenCtrl = new FormControl();
  filteredTokens: Observable<TokenGroup[]>;
  ////////////////
  tokenGroups: TokenGroup[] = [{
    model: 'Client',
    tokens: ['ClientID', 'FEIN', 'Address', 'City', 'State', 'Zip']
  }, {
    model: 'Employee',
    tokens: ['SSN', 'First Name', 'Last Name', 'Gross Wages', 'Taxable Wages']
  }];

  ////////////////

  tokens: string[] = [];

  @ViewChild('tokenInput', {static: false}) tokenInput: ElementRef<HTMLInputElement>;
  // @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  @Input() tokenString: string;


  constructor() {
    this.filteredTokens = this.tokenCtrl.valueChanges.pipe(
      startWith(null),
      map(value => this._filterGroup(value)));
       }

       private _filterGroup(value: string): TokenGroup[] {
        if (value) {
          return this.tokenGroups
            .map(group => ({model: group.model, tokens: _filter(group.tokens, value)}))
            .filter(group => group.tokens.length > 0);
        } else {
          return this.tokenGroups;
        }

      }


      add(event: MatChipInputEvent): void {
        // Add token only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        // if (!this.matAutocomplete.isOpen) {
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
        // }
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


}

