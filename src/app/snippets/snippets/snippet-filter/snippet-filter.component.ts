import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet-filter',
  templateUrl: 'snippet-filter.component.html',
  styleUrls: ['snippet-filter.component.css']
})
export class SnippetFilterComponent implements OnInit {

  public buttonText: string = "Nouveau Snippet";

  constructor() { }

  ngOnInit(): void {
  }

}
