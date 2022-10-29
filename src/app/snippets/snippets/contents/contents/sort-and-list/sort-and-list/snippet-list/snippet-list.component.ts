import { Component, OnInit } from '@angular/core';

import { SnippetService } from 'src/app/services/snippet.service';

import { Snippet } from 'src/app/models/snippet';

@Component({
  selector: 'app-snippet-list',
  templateUrl: 'snippet-list.component.html',
  styleUrls: ['snippet-list.component.css']
})
export class SnippetListComponent implements OnInit {

  public snippets: Snippet[];
  public errMsg: string;

  constructor(private snippetService: SnippetService) { }

  ngOnInit(): void {
    this.snippetService.getSnippets().subscribe({
      next: snippets => this.snippets = snippets,
      error: err => this.errMsg = err
    });
  }
}
