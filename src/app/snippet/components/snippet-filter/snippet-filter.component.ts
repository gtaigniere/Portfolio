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
      snippet.labels?.forEach(
        label => {
          if (this.labelsMap.has(label.name)) {
            let snippetNumber = this.labelsMap.get(label.name)
            this.labelsMap.set(label.name, snippetNumber + 1);
          } else {
            this.labelsMap.set(label.name, 1);
          }
        }
      );
    });
    for (let i = this.labels.length - 1; i == 0; i--) {
      if (!this.labelsMap.has(this.labels[i].name)) {
        this.labels.splice(i);
      }
    }
  }

  goToSnippetAdd = () => {
    this.router.navigate(['/snippets/add']);
  }

  goToAddLabel() {
    this.router.navigate(['/labels/add']);
  }
}

