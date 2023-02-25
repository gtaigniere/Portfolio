import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Snippet} from '../../models/snippet';

@Component({
  selector: 'app-snippet-list',
  templateUrl: 'snippet-list.component.html',
  styleUrls: ['snippet-list.component.scss']
})
export class SnippetListComponent implements OnInit {

  @Input()
  snippets: Snippet[] = [];

  @Output()
  snippetClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(
  ) {}

  ngOnInit() {
  }

  sendSnippetId(id: string) {
    this.snippetClicked.emit(id);
  }

}
