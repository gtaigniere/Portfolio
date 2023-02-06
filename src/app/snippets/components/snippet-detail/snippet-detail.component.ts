import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SnippetService} from 'src/app/snippets/services/snippet.service';

import {Snippet} from 'src/app/models/snippet';
import {Label} from 'src/app/models/label';

@Component({
  selector: 'app-snippet-detail',
  templateUrl: 'snippet-detail.component.html',
  styleUrls: ['snippet-detail.component.scss']
})
export class SnippetDetailComponent implements OnInit {

  @Input()
  snippet: Snippet;
  errMsg: string;

  labels: Label[];

  snippetId: number;

  constructor(
    private snippetService: SnippetService,
    private route: ActivatedRoute
  ) { }
    
  ngOnInit(): void {
    console.log(this.snippetService.getSnippets());

    // if (this.snippetId) {
    //   this.snippetService.getSnippetById(this.snippetId).subscribe({
    //     next: snippet => this.snippet = snippet,
    //     error: err => this.errMsg = err
    //   });
    // } else {
    //   this.snippetId = Math.floor(Math.random() * (7 + 1));
    //   this.snippetService.getSnippetById(this.snippetId).subscribe({
    //     next: snippet => this.snippet = snippet,
    //     error: err => this.errMsg = err
    //   });
    // }
  }

}
