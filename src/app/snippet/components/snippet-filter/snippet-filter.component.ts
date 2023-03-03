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
    // On effectue un tri alphabétique, du tableau créé ci-dessus, par nom
    this.usedBySnippets.sort(
      (labelA, labelB) => this.compareStrings(labelA.name, labelB.name)
    );
    // On effectue un tri du tableau créé ci-dessus, par nombre d'utilisations dans les Snippets
    this.usedBySnippets.sort(
      (labelA, labelB) => this.compareByNbUseInSnippets(labelA, labelB)
    );
  }

  /**
   * Cette fonction compare deux chaînes de caractères
   * @param a string
   * @param b string
   * @return number
   */
  compareStrings(a: string, b: string): number {
    return a.localeCompare(b);
  }

  /**
   * Cette fonction compare deux Labels en fonction
   *  de leur nombre d'utilisations dans les Snippets.
   * @param labelA Label
   * @param labelB Label
   * @return number
   */
  compareByNbUseInSnippets(labelA: Label, labelB: Label): number {
    const nb1 = this.labelsUsedBySnippets.get(labelA.name) ?? 0;
    const nb2 = this.labelsUsedBySnippets.get(labelB.name) ?? 0;
    return nb2 - nb1;
  }

  goToAddSnippet = () => {
    this.router.navigate(['/snippets/add']);
  }

  goToAddLabel() {
    this.router.navigate(['/labels/add']);
  }
}
