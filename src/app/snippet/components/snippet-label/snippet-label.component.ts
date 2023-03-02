import {Component, Input} from '@angular/core';
import {Label} from "../../models/label";

@Component({
  selector: 'app-snippet-label',
  templateUrl: 'snippet-label.component.html',
  styleUrls: ['snippet-label.component.scss']
})
export class SnippetLabelComponent {

  @Input()
  label: Label = {
    id: '',
    name: '',
    color: ''
  };

}
