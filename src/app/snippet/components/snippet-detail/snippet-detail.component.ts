import {Component, Input, OnInit} from '@angular/core';
import {Snippet} from 'src/app/snippet/models/snippet';

@Component({
  selector: 'app-snippet-detail',
  templateUrl: 'snippet-detail.component.html',
  styleUrls: ['snippet-detail.component.scss']
})
export class SnippetDetailComponent implements OnInit {

  @Input()
  snippet?: Snippet;

  constructor(
  ) {}

  ngOnInit() {
  }

}
