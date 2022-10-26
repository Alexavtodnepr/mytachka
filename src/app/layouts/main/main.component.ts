import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public burgerToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  stateBurger(event: boolean) {
    this.burgerToggle = event;
  }
}
