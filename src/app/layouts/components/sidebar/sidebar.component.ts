import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input('burgerState') burgerState:boolean=false;

  SidebarList = [
    {item: 'Мої авто', link: 'mycars'},
    {item:'Паливо та АЗС', link: 'fuelgas'},
    {item: 'Автосервіси', link: 'autoservices'},
    {item: 'Страхова', link: 'insuranse'},
    {item: 'Розрахувати', link: 'counting'},
    {item: 'Архів', link: 'archive'},
    {item: 'Нотатки', link: 'notes'},
    {item: 'ТО', link: 'technicalviews'},
    {item: 'Зв’язатися', link: 'calling'},
    {item: 'Магазин', link: 'shop'},
    {item: 'Збережене', link: 'saved'},
]
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
  }


  ClickedItem(item: any) {
    this.router.navigateByUrl(item.link);
  }
}
