import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-custom-table",
  templateUrl: "./custom-table.view.html",
  styleUrls: ["./custom-table.scss"]
})
export class CustomTableComponent implements OnInit {
  @Input() table:{columns:string [], button:boolean, numberOfColumns:number, imagePosition:number} = {
    columns: ["", "groupe number", "preferences", "friends", "missing member"],
    button: false,
    numberOfColumns: 5,
    imagePosition: 3
  };

  @Input() rows: any[] = [
    [">", "45", "photo", "2", "2"],
    [">", "45", "photo", "2", "2"],
    [">", "45", "photo", "2", "2"],
    [">", "45", "photo", "2", "2"],
    [">", "45", "photo", "2", "2"],
    [">", "45", "photo", "2", "2"]
  ];

  constructor() {}

  ngOnInit() {}
}
