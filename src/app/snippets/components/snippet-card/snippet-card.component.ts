import { Component, Input, OnInit } from '@angular/core';

import { Snippet } from 'src/app/models/snippet';

@Component({
  selector: 'app-snippet-card',
  templateUrl: 'snippet-card.component.html',
  styleUrls: ['snippet-card.component.css']
})
export class SnippetCardComponent {

  @Input()
  public snippet: Snippet;

}
