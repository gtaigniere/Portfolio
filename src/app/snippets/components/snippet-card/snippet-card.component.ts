import {Component, Input} from '@angular/core';

import {Snippet} from 'src/app/models/snippet';

@Component({
  selector: 'app-snippet-card',
  templateUrl: 'snippet-card.component.html',
  styleUrls: ['snippet-card.component.scss']
})
export class SnippetCardComponent {

  @Input()
  snippet: Snippet;

}
