import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SnippetService} from '../../services/snippet.service';
import {LabelService} from '../../services/label.service';

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

  snippets: Snippet[];
  labels: Label[];
  errMsg: string;
  total: number;
  favorites: number;
  unlabeled: number;
  snippetNumberByLabel: number[];

  constructor(
    private snippetService: SnippetService,
    private labelService: LabelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.snippetService.getSnippets().subscribe({
      next: snippets => this.snippets = snippets,
    });

    this.labelService.getLabels().subscribe({
      next: labels => this.labels = labels,
    });

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
