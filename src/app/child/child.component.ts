import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() items: {name:string; type:string}[] = [];

  @Output()
  selectedItemEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
    selectItem(item:any){
      this.selectedItemEmitter.emit(item);
    }
}
