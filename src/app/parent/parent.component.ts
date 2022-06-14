import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  filterByType = '';
  filteredItems: {name:string; type:string}[] = [];
  items = [
    { name: 'Green', type: 'color' },
    { name: 'Dog', type: 'animal' },
    { name: 'Apple', type: 'fruit' },
    { name: 'Mango', type: 'fruit' },
    { name: 'Yellow', type: 'color' },
    { name: 'Cat', type: 'animal' },
    { name: 'Blue', type: 'color' },
    { name: 'Red', type: 'color' },
    { name: 'Cow', type: 'animal' },
    { name: 'Goat', type: 'animal' },
    { name: 'Black', type: 'color' },
    { name: 'Banana', type: 'fruit' },
    { name: 'Cherry', type: 'fruit' },
  ];
  selectedItem: any;

  constructor() { }

  ngOnInit(): void {
    this.filteredItems = [...this.items];
  }
  filterBy(type:string){
    console.log(type)
    console.log(this.items)
    this.filteredItems = [...this.items.filter((x) => x.type === type)];
  }
  selectItem(item:any) {
    this.selectedItem = item;
  }
}
