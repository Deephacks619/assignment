import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() CreatePostToData:EventEmitter<any>= new EventEmitter(); 

  addPost(postdata:NgForm){
    console.log(postdata.value);
    this.CreatePostToData.emit(postdata.value);
  }

}
