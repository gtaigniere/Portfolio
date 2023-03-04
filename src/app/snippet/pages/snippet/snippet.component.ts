import {Component, OnInit} from '@angular/core';
import {Snippet} from "../../models/snippet";
import {Label} from "../../models/label";
import {ActivatedRoute} from "@angular/router";
import {SnippetContextService} from "../../services/snippet-context.service";

@Component({
  selector: 'app-snippet',
  templateUrl: 'snippet.component.html',
  styleUrls: ['snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  title: string = 'Snippets';
  snippets: Snippet[] = [];
  labels: Label[] = [];
  activeSnippet?: Snippet;
  received?: Snippet;

  constructor(
    private activatedRoute: ActivatedRoute,
    private snippetContextService: SnippetContextService
  ) {}

  ngOnInit() {
    this.snippets = this.activatedRoute.snapshot.data['snippets'];
    this.labels = this.activatedRoute.snapshot.data['labels'];

    // if (this.received) {
    //   C'était dans le cas où l'on ne passait pas par un second router-outlet
    //   this.displaySnippetDetails(this.received);
    //   this.activeSnippet = this.received;
    // } else {
    //   this.activeSnippet = this.snippets[this.snippets.length - 1];
    // }
    this.activeSnippet = this.received ?? this.snippets[this.snippets.length - 1];
    this.snippetContextService.sendSnippetSubject(this.activeSnippet);
  }

  // C'était dans le cas où l'on ne passait pas par un second router-outlet
  // displaySnippetDetails(received: Snippet) {
  //   this.activeSnippet = received;
  // }

  receiptSnippet(snippet: Snippet) {
    // C'était dans le cas où l'on ne passait pas par un second router-outlet
    // this.displaySnippetDetails(snippet);
    this.received = snippet;
  }

}
