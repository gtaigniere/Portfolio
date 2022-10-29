import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SnippetService } from 'src/app/services/snippet.service';

import { Snippet } from 'src/app/models/snippet';

@Component({
  selector: 'app-snippet-card',
  templateUrl: 'snippet-card.component.html',
  styleUrls: ['snippet-card.component.css']
})
export class SnippetCardComponent implements OnInit {

  @Input()
  public snippet: Snippet;

  public errMsg: string;

  constructor(private snippetService: SnippetService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const snippetId: string|null = this.route.snapshot.paramMap.get('id');

    if (snippetId) {
      this.snippetService.getSnippetById(+snippetId).subscribe({
        next: snippet => this.snippet = snippet,
        error: err => this.errMsg = err
      });
    }
  }  
}
