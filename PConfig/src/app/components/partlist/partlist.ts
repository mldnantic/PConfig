import { Component, OnInit } from '@angular/core';
import { Partservice } from '../../services/partservice';

@Component({
  selector: 'app-partlist',
  templateUrl: './partlist.html',
  styleUrl: './partlist.scss'
})
export class Partlist implements OnInit{

  title = "Most popular GPUs";

  gpus: string[] = ["GTX 1080 Ti", "Radeon RX 6700 XT", "Intel Arc B580"]; 

  constructor(private partService: Partservice) { }

  ngOnInit(): void {
    //this.partService.getAll().subscribe(gpus => console.log(gpus));
  }

}
