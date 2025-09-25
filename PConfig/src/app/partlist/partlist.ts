import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partlist',
  imports: [],
  templateUrl: './partlist.html',
  styleUrl: './partlist.scss'
})
export class Partlist implements OnInit{

  title = "Most popular GPUs";

  gpus: string[] = ["GTX 1080 Ti", "Radeon RX 6700 XT", "Intel Arc B580"]; 

  ngOnInit(): void {
  }

}
