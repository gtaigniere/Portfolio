import {Component, Input, OnInit} from '@angular/core';
import {Snippet} from 'src/app/snippet/models/snippet';
import {Router} from "@angular/router";
import {SnippetContextService} from "../../services/snippet-context.service";

@Component({
  selector: 'app-snippet-detail',
  templateUrl: 'snippet-detail.component.html',
  styleUrls: ['snippet-detail.component.scss']
})
export class SnippetDetailComponent implements OnInit {

  @Input()
  snippet?: Snippet;

  constructor(
    private snippetContextService: SnippetContextService,
    private router: Router
  ) {}

  ngOnInit() {
    this.snippetContextService.selectedSnippet$.subscribe(
      snippet => this.snippet = snippet
    );
  }

  addDelFavoris() {
    console.log("Ajoute ou retire la propriété favoris au snippet");
  }

  navigateToUpdSnippet() {
    this.router.navigate(['/snippets/upd']);
  }

  navigateToDelSnippetLabel() {
    this.router.navigate(['/snippets/del']);
  }

}
