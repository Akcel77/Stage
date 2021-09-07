import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openedBool: boolean = false;
  openedBool1: boolean = false;
  openedBool2: boolean = false;
  openedBool3: boolean = false;
  toggleOpenedBool() { this.openedBool = !this.openedBool; }
  toggleOpenedBool1() { this.openedBool1 = !this.openedBool1; }
  toggleOpenedBool2() { this.openedBool2 = !this.openedBool2; }
  toggleOpenedBool3() { this.openedBool3 = !this.openedBool3; }
  constructor() { }

  ngOnInit(): void {
  }

}
