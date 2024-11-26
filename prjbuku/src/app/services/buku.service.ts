import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buku } from '../models/buku.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BukuService {
  // private url : string ="http://localhost:3000/buku"; 
  private url : string ="https://apisi51.vercel.app/buku/";

  private subjectBuku = new Subject<Buku[]>();

  constructor(private http: HttpClient) { }

  getBukuListener(){
    return this.subjectBuku.asObservable();
  }

  addBuku(judul : string, penulis : string, genres : string[]){
    const buku : Buku={
    _id : null,
    judul : judul,
    penulis : penulis,
    genre : genres
    }

    console.log(buku);

      getBuku(){
      this.http.post<{message : String, bukus : Buku[]}>(this.url)
      .subscribe((value)=>{
      this.subjectBuku.next(value.bukus);
      //console.log(response.message)

    });
  }
}

