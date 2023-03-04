import {Component, Input} from '@angular/core';

import {Snippet} from '../../models/snippet';
import {SnippetContextService} from "../../services/snippet-context.service";

@Component({
  selector: 'app-snippet-list',
  templateUrl: 'snippet-list.component.html',
  styleUrls: ['snippet-list.component.scss']
})
export class SnippetListComponent {

  @Input()
  snippets: Snippet[] = [];

  // @Output()
  // snippetClicked: EventEmitter<Snippet> = new EventEmitter<Snippet>();

  constructor(
    private snippetContextService: SnippetContextService
  ) {
  }

  sendSnippet(snippet: Snippet) {
    // this.snippetClicked.emit(snippet);
    this.snippetContextService.sendSnippetSubject(snippet);
  }

}
