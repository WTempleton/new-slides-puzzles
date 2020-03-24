import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.css"]
})
export class MainMenuComponent implements OnInit {
  mainMenuVisible: boolean = true;
  size: string = "";
  numberOfTiles: number = 9;

  getBool(bool: boolean) {
    this.mainMenuVisible = bool;
  }

  makeDisappear() {
    this.mainMenuVisible = false;
  }

  gameMode(number, containerClass) {
    this.numberOfTiles = number;
    this.size = containerClass;
  }

  constructor() {}

  ngOnInit(): void {}
}
