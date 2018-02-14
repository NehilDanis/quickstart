import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public control_var:string;
  public like_count: number;
  @Input() user; // This is used, because we are expecting an input.
  @Output() onYell = new EventEmitter();
  constructor() {
    this.control_var = "nehil danis";
    this.like_count = 0;
  }

  ngOnInit() {
  }

  increaseLikeCount(){
    this.like_count ++;
  }

  fireOnHit(e){
    this.onYell.emit(e);
  }

}
