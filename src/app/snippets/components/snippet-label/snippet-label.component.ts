import { Component, Input, OnInit } from '@angular/core';

import { Label } from 'src/app/models/label';

@Component({
  selector: 'app-snippet-label',
  templateUrl: 'snippet-label.component.html',
  styleUrls: ['snippet-label.component.css']
})
export class SnippetLabelComponent implements OnInit {

  @Input()
  public label: Label;

  constructor() { }

  ngOnInit(): void {
  }

}
