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
  labelsUsedBySnippets = new Map<string, number | undefined>();
  usedBySnippets: Label[] = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.total = this.snippets.length;
    this.snippets.forEach(snippet => {
      if (snippet.favorites) {
        this.favorites++;
      }
      if (snippet.labels === undefined) {
        this.unlabeled++;
      }
      /* On compte le nombre d'utilisations de chaque Label dans les snippets
        et on met ensuite dans un tableau seulement ceux qui sont utilisés. */
      snippet.labels?.forEach(label => {
        let nbUseInSnippets = this.labelsUsedBySnippets.get(label.name);
        if (nbUseInSnippets !== undefined) {
          this.labelsUsedBySnippets.set(label.name, nbUseInSnippets + 1);
        } else {
          this.labelsUsedBySnippets.set(label.name, 1);
        }
        if (!this.usedBySnippets.find(lab => lab.name === label.name)) {
          this.usedBySnippets.push(label);
        }
      });
    });
    // On effectue un tri du tableau de Labels créé ci-dessus
    this.usedBySnippets.sort((labelA, labelB) => this.compare(labelA, labelB));
  }

  /**
   * Cette fonction compare deux Labels en fonction
   *  de leur nombre d'utilisations dans les snippets.
   * @param labelA Label
   * @param labelB Label
   * @return number
   */
  compare(labelA: Label, labelB: Label): number {
    let nb1 = this.labelsUsedBySnippets.get(labelA.name);
    let nb2 = this.labelsUsedBySnippets.get(labelB.name);
    if (nb1 === undefined) {
      nb1 = 0;
    }
    if (nb2 === undefined) {
      nb2 = 0;
    }
    if (nb1 < nb2) {
      return 1;
    }
    if (nb1 > nb2) {
      return -1;
    }
    return 0;
  }

  goToSnippetAdd = () => {
    this.router.navigate(['/snippets/add']);
  }

  goToAddLabel() {
    this.router.navigate(['/labels/add']);
  }
}
