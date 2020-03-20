import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.css"]
})
export class MainMenuComponent implements OnInit {
  mainMenuVisible = true;
  size: string = "";

  getBool(bool) {
    this.mainMenuVisible = bool;
  }

  makeDisappear() {
    this.mainMenuVisible = false;
  }

  numberOfTiles: number = 9;

  eightMode() {
    this.numberOfTiles = 9;
    this.size = "grid-container-eight";
  }

  fifteenMode() {
    this.numberOfTiles = 16;
    this.size = "grid-container-fifteen";
  }

  constructor() {}

  ngOnInit(): void {}
}
