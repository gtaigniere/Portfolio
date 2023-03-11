import {Component, OnInit} from '@angular/core';
import {Snippet} from "../../models/snippet";
import {Label} from "../../models/label";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-snippet',
  templateUrl: 'snippet.component.html',
  styleUrls: ['snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  title: string = 'Snippets';
  snippets: Snippet[] = [];
  labels: Label[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.snippets = this.activatedRoute.snapshot.data['snippets'];
    this.labels = this.activatedRoute.snapshot.data['labels'];
  }
}
