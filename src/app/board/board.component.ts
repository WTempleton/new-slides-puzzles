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

  makeMenuVisible(bool: boolean) {
    this.boolToEmit.emit(bool);
  }

  tilesSet: number[] = [...Array(this.numberOfTiles).keys()];

  tiles: number[] = shuffle(this.tilesSet);

  newGame() {
    this.tiles = shuffle(this.tilesSet);
  }

  isZero(value: number) {
    return value !== 0;
  }

  canSwap(tile: number) {
    const tileIndex: number = this.tiles.indexOf(tile);
    const zeroIndex: number = this.tiles.indexOf(0);
    const moveUpDown =
      tileIndex === zeroIndex + Math.sqrt(this.tiles.length) ||
      tileIndex === zeroIndex - Math.sqrt(this.tiles.length);
    const moveLeft =
      tileIndex === zeroIndex + 1 &&
      tileIndex % Math.sqrt(this.tiles.length) !== 0;
    const moveRight =
      tileIndex === zeroIndex - 1 &&
      tileIndex % Math.sqrt(this.tiles.length) !==
        Math.sqrt(this.tiles.length) - 1;

    return moveUpDown || moveLeft || moveRight;
  }

  swap(tile: number) {
    if (this.canSwap(tile) === true) {
      const tileIndex: number = this.tiles.indexOf(tile);
      const zeroIndex: number = this.tiles.indexOf(0);
      this.tiles[tileIndex] = 0;
      this.tiles[zeroIndex] = tile;
    }
  }

  arraysEqual(a: number[], b: number[]) {
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  gameOn() {
    return !this.arraysEqual(this.tiles, this.tilesSet);
  }

  constructor() {}

  ngOnInit(): void {
    this.tilesSet = [...Array(this.numberOfTiles).keys()];

    this.tiles = shuffle(this.tilesSet);
  }
}
