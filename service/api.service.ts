import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{map}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getrepoDetail(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://api.github.com/users/aniketkale1563/repos')
        .pipe(map((Response) => Response))
        .subscribe((response: any) => {
         // console.log("aniketkale1563",response)
          resolve(response);
        }, reject);
    });
  }
}