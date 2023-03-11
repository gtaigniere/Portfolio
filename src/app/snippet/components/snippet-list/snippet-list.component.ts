import {Component, Input, OnInit} from '@angular/core';

import {Snippet} from '../../models/snippet';
import {SnippetContextService} from "../../services/snippet-context.service";

@Component({
  selector: 'app-snippet-list',
  templateUrl: 'snippet-list.component.html',
  styleUrls: ['snippet-list.component.scss']
})
export class SnippetListComponent implements OnInit {

  @Input()
  snippets: Snippet[] = [];

  snippet?: Snippet|null;

  constructor(
    private snippetContextService: SnippetContextService
  ) {
  }

  ngOnInit(): void {
    this.snippetContextService.currentSnippet$.subscribe(
      snippet => this.snippet = snippet
    );
    if (this.snippet) {
      this.emitSnippet(this.snippet)
    } else {
      this.emitSnippet(this.snippets[this.snippets.length - 1]);
    }
  }

  emitSnippet(snippet: Snippet) {
    this.snippetContextService.currentSnippet = snippet;
  }

}
