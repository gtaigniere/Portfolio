import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Snippet} from '../../models/snippet';

@Component({
  selector: 'app-snippet-list',
  templateUrl: 'snippet-list.component.html',
  styleUrls: ['snippet-list.component.scss']
})
export class SnippetListComponent {

  @Input()
  snippets: Snippet[] = [];

  @Output()
  snippetClicked: EventEmitter<Snippet> = new EventEmitter<Snippet>();

  sendSnippet(snippet: Snippet) {
    this.snippetClicked.emit(snippet);
  }

}
