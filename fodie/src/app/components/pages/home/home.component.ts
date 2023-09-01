import { Component , OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allpro:any=[]
  allcat:any=[]

  constructor(private api: ApiService){}
  getdata(){
    this.api.selpro().subscribe((data:any)=>{
      this.allpro=data;
    })
  }
    getcdata(){
    this.api.selcat().subscribe((data:any)=>{
      this.allcat=data;
    })
  }

  ngOnInit(){
    this.getdata();
    this.getcdata();
   
  }
}
