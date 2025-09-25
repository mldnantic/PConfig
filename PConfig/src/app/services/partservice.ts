import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Part } from '../models/part';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Partservice {

  // constructor(private httpClient: HttpClient) {

  // }

  // getAll() {
  //   return this.httpClient
  //   .get<Part[]>(environment.api + "/gpus");
  // }

}
