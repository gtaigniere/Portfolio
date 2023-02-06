import {Component, OnInit} from '@angular/core';

import {SnippetService} from '../../services/snippet.service';

import {Snippet} from '../../../models/snippet';

@Component({
  selector: 'app-snippet-list',
  templateUrl: 'snippet-list.component.html',
  styleUrls: ['snippet-list.component.scss']
})
export class SnippetListComponent implements OnInit {

  snippets: Snippet[];
  errMsg: string;

  constructor(
    private snippetService: SnippetService
  ) { }

  ngOnInit(): void {
    this.snippetService.getSnippets().subscribe({
      next: snippets => this.snippets = snippets,
      error: err => this.errMsg = err
    });
  }

}
