import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-snippet',
  templateUrl: 'add-snippet.component.html',
  styleUrls: ['add-snippet.component.scss']
})
export class AddSnippetComponent implements OnInit {

  title: string = 'Création d\'un Snippet';

  constructor() { }

  ngOnInit(): void {
  }

}
