import {Component, Input, OnInit} from '@angular/core';

import {Snippet} from 'src/app/snippet/models/snippet';

@Component({
  selector: 'app-snippet-card',
  templateUrl: 'snippet-card.component.html',
  styleUrls: ['snippet-card.component.scss']
})
export class SnippetCardComponent implements OnInit {

  @Input()
  snippet: Snippet;

  constructor() {
  }

  ngOnInit() {
  }

}
