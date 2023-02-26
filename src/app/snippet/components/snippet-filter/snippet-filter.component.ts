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
  labelsMap = new Map();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.total = this.snippets.length;
    this.snippets.forEach(snippet => {
      if (snippet.favorites) {
        this.favorites++;
      }
      if (snippet.labels === undefined) {
        this.unlabeled++;
      }
      // A faire : nombre de snippet ayant tel label, pour chaque label

    });
  }

  isInLabelsMap(label: Label): boolean {
    return this.labelsMap.has(label);
  }

  goToSnippetAdd = () => {
    this.router.navigate(['/snippets/add']);
  }

  goToLabelAdd() {
    this.router.navigate(['/labels/add']);
  }
}
