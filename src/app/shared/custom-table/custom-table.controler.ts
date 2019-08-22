import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-custom-table",
  templateUrl: "./custom-table.view.html",
  styleUrls: ["./custom-table.scss"]
})
export class CustomTableComponent implements OnInit {
  @Input() table: {
    header: string[];
    button: boolean;
    numberOfColumns: number;
    imagePosition: number;
    images: string[][];
  } = {
    header: ["", "groupe number", "preferences", "friends", "missing member"],
    button: false,
    numberOfColumns: 5,
    imagePosition: 3,
    images:[ ["../../../assets/discord-icon.jpg","../../../assets/google-drive-icon.jpg"],["../../../assets/login-background.jpg"]]
  };

  @Input() rows: any[] = [
    [">", "45", "photo", "2", "1"],
    [">", "45", "photo", "2", "1"],
    [">", "45", "photo", "2", "1"],
    [">", "45", "photo", "2", "1"],
    [">", "45", "photo", "2", "1"],
    [">", "45", "photo", "2", "1"]
  ];

  constructor() {}

  ngOnInit() {}
}
