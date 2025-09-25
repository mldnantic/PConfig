import { Component } from '@angular/core';
import { Partlist } from './components/partlist/partlist';

@Component({
  selector: 'app-root',
  imports: [Partlist],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
