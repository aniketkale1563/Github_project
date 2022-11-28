import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  mapArray: any[] = [];
  totalrecords: any;
  page: number = 1;
  data:any;
  constructor(private apiService:ApiService){}
  
  ngOnInit(): void {

    this.apiService.getrepoDetail().then((data)=>{
console.log(">>>>>>", data)
for (let i=0; i < data.length; i++){
this.mapArray.push({
  name: data[i].name,
  visibility: data[i].visibility,
  description: data[i].description,
});console.log("array", this.mapArray)
this.page = 0;
}

this.totalrecords=data.length;
    }); }
    gty(page:any){
      console.log(page,'<<');
    }
    
}
