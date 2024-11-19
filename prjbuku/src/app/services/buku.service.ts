import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  private url : string ="http://localhost:3000/bukus"; 

  constructor(private http : HttpClient) { }

  addBuku(judul : string, penulis : string, genres : string[]){
    const buku : Buku={
    _id : null,
    judul : judul,
    penulis : penulis,
    genre : genres
    }

    console.log(buku);

    // this.http.post<{message : String}>(this.url,buku)
    // .subscribe((response)=>{
    //   console.log(response.message)

    // });


  }
}
