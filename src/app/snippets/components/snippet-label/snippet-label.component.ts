import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-snippet-label',
  templateUrl: 'snippet-label.component.html',
  styleUrls: ['snippet-label.component.scss']
})
export class SnippetLabelComponent {

  @Input()
  label = {
    id: 0,
    name: '',
    color: ''
  };

}
