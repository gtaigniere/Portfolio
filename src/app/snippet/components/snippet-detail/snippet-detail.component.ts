import {Component, Input, OnInit} from '@angular/core';
import {Snippet} from 'src/app/snippet/models/snippet';
import {Router} from "@angular/router";

@Component({
  selector: 'app-snippet-detail',
  templateUrl: 'snippet-detail.component.html',
  styleUrls: ['snippet-detail.component.scss']
})
export class SnippetDetailComponent implements OnInit {

  @Input()
  snippet?: Snippet;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
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
