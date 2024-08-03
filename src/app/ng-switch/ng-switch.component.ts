import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="'Monday'">
      <div *ngSwitchCase="'Monday'">Monday is awesome</div>
      <div *ngSwitchCase="'Tuesday'">Tuesday is awesome</div>
      <div *ngSwitchCase="'Wednesday'">Wednesday is awesome</div>
      <div *ngSwitchCase="'Thursday'">Thursday is awesome</div>
      <div *ngSwitchCase="'Friday'">Friday is awesome</div>
      <div *ngSwitchDefault>Weekend is full of fun</div>
    </ng-container>

    <hr>

    @switch (day){
      @case ('Monday'){
        <div>Monday is awesome</div>
      }
      @case ('Tuesday'){
        <div>Tuesday is awesome</div>

      }
      @case ('Wednesday'){
        <div>Wednesday is awesome</div>

      }
      @case ('Thursday'){
        <div>Thursday is awesome</div>

      }
      @case ('Friday'){
        <div>Friday is awesome</div>

      }
      @default {
        <div>Weekend is full of fun</div>
      }


    }
  `,
  styles: ``
})
export class NgSwitchComponent {

}
