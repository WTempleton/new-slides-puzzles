import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import shuffle from "lodash/shuffle";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  @Input() numberOfTiles;
  @Input() size;
  @Output() boolToEmit = new EventEmitter<boolean>();

  makeMenuVisible(bool) {
    this.boolToEmit.emit(bool);
  }

  tilesSet: number[] = [...Array(this.numberOfTiles).keys()];

  tiles: number[] = shuffle(this.tilesSet);

  newGame() {
    this.tiles = shuffle(this.tilesSet);
  }

  isZero(value) {
    if (value === 0) {
      return false;
    }
    return true;
  }

  canSwap(tile) {
    const tileIndex = this.tiles.indexOf(tile);
    const zeroIndex = this.tiles.indexOf(0);
    if (
      tileIndex === zeroIndex + Math.sqrt(this.tiles.length) ||
      tileIndex === zeroIndex - Math.sqrt(this.tiles.length)
    ) {
      return true;
    }
    if (
      tileIndex === zeroIndex + 1 &&
      tileIndex % Math.sqrt(this.tiles.length) !== 0
    ) {
      return true;
    }
    if (
      tileIndex === zeroIndex - 1 &&
      tileIndex % Math.sqrt(this.tiles.length) !==
        Math.sqrt(this.tiles.length) - 1
    ) {
      return true;
    }
    return false;
  }

  swap(tile) {
    if (this.canSwap(tile) === true) {
      const tileIndex = this.tiles.indexOf(tile);
      const zeroIndex = this.tiles.indexOf(0);
      this.tiles[tileIndex] = 0;
      this.tiles[zeroIndex] = tile;
    }
  }

  arraysEqual(a, b) {
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  gameOn() {
    if (this.arraysEqual(this.tiles, this.tilesSet)) {
      return false;
    }
    return true;
  }

  constructor() {}

  ngOnInit(): void {
    this.tilesSet = [...Array(this.numberOfTiles).keys()];

    this.tiles = shuffle(this.tilesSet);
  }
}
