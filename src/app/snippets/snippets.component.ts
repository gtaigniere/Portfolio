import {Component, OnInit} from '@angular/core';
import {Snippet} from "../models/snippet";
import {SnippetService} from "./services/snippet.service";

@Component({
  selector: 'app-snippets',
  templateUrl: 'snippets.component.html',
  styleUrls: ['snippets.component.scss']
})
export class SnippetsComponent implements OnInit {

  title: string = 'Snippets';
  snippets: Snippet[] = [];
  activeSnippet?: Snippet;
  receivedId?: string;

  constructor(
    private snippetService: SnippetService
  ) {}

  ngOnInit() {
    this.displaySnippetsList();
    if (this.receivedId) {
      this.displaySnippetDetails(this.receivedId);
    } else {
      let snippets2 = this.snippets;
      this.activeSnippet = snippets2.pop();
    }
  }

  displaySnippetsList() {
    this.snippetService.getSnippets().subscribe(
      snippets => this.snippets = snippets
    );
  }

  displaySnippetDetails(receivedId: string) {
    this.snippetService.getSnippetById(receivedId).subscribe(
      activeSnippet => this.activeSnippet = activeSnippet
    );
  }

  receivedSnippetId(id: string) {
    this.receivedId = id;
    this.displaySnippetDetails(this.receivedId);
  }

}
