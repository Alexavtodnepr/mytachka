import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  public burgerToggleOut = new EventEmitter<boolean>();

  public burgerToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  changeSideBarSize() {
    this.burgerToggle = !this.burgerToggle;
    this.burgerToggleOut.emit(this.burgerToggle);
  }
}
