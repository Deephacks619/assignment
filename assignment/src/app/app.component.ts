import { Component ,OnInit} from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:DataserviceService){}

  data:any []=[];

  show : boolean=false;
  post : boolean=false;
  index:any;
  tempdata:any;

  ngOnInit(): void {
      this.service.getData().subscribe((res)=>{
      //  console.log(res);
        for(var i=0;i<8;i++){
          this.data.push(res[i]);
        }
        console.log(this.data)
      },err=>{
        console.log("some error occured",err);
      })
  }
  showPost(index:number){
    this.show=true;
    this.post=false;
    this.tempdata=this.data[index];
    this.index=index;
  }
  addPost(){
    this.show=false;
    this.post=true;

  }
  //getting index from showpost component
  deletePostIndex(index:number){
    console.log(index);
    this.data.splice(index,1);
    this.show=false;
  }
  //getting data object from createpost component
  CreatePostToData(data:any){
    this.data.push(data);
    this.post=false;
  }

}
