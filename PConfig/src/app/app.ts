import { Component } from '@angular/core';
import { Partlist } from './partlist/partlist';

@Component({
  selector: 'app-app',
  imports: [Partlist],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
