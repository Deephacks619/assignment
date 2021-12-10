import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {

  constructor() { }

  @Input() show : any;
  @Input() post : any;
  @Input() index: any;

  @Output() deletePostIndex = new EventEmitter<number>();

  ngOnInit(): void {
   // console.log(this.show,this.post)
  }
  deletePost(){
    this.deletePostIndex.emit(this.index);
  }

}
