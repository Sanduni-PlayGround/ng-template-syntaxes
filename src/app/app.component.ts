import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {NgIfComponent} from "./ng-if/ng-if.component";
import {NgForComponent} from "./ng-for/ng-for.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIfComponent, NgForComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-syntaxes';
}
