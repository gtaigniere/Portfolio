import {Component, Input, OnInit} from '@angular/core';
import {Snippet} from 'src/app/snippet/models/snippet';
import {LabelService} from "../../services/label.service";

@Component({
  selector: 'app-snippet-detail',
  templateUrl: 'snippet-detail.component.html',
  styleUrls: ['snippet-detail.component.scss']
})
export class SnippetDetailComponent implements OnInit {

  @Input()
  snippet?: Snippet;
  errMsg: string;

  // labels: Label[];

  snippetId: string;

  constructor(
    private labelService: LabelService
  ) {}

  ngOnInit() {

  }

}
