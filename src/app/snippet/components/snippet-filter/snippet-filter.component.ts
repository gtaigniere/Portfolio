import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Snippet} from '../../models/snippet';
import {Label} from '../../models/label';

@Component({
  selector: 'app-snippet-filter',
  templateUrl: 'snippet-filter.component.html',
  styleUrls: ['snippet-filter.component.scss']
})
export class SnippetFilterComponent implements OnInit {

  buttonBackground = 'linear-gradient(0.44turn, mediumpurple, purple, black)';
  buttonText = 'Nouveau Snippet';

  @Input()
  snippets: Snippet[] = [];
  @Input()
  labels: Label[] = [];
  total = 0;
  favorites = 0;
  unlabeled = 0;
  snippetNumberByLabel: number[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.total = this.snippets.length;
    for(let label of this.labels) {
      for(let snippet of this.snippets) {
        if (snippet.favorites) {
          this.favorites++;
        }
        if (snippet.labels?.length == 0) {
          this.unlabeled++;
        } else if (snippet.labels?.includes(label)) {
          // this.snippetNumberByLabel[snippet.id]++;
        }
      }
    }
    console.log(this.snippetNumberByLabel);

  }

  public goToSnippetAdd = () => {
    this.router.navigate(['/snippet/add']);
  }
}
