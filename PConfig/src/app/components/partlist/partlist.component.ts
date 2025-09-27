import { Component, OnInit } from '@angular/core';
import { Partservice } from '../../services/partservice';
import { Part } from '../../models/part';

@Component({
  selector: 'app-partlist',
  templateUrl: './partlist.component.html',
  styleUrl: './partlist.component.scss'
})
export class Partlist implements OnInit{

  title = "Most popular GPUs";

  gpus: Part[] = [];

  constructor(private partService: Partservice) { }

  ngOnInit(): void {
    this.partService.getAll().subscribe(parts => this.gpus = parts);
  }

}
