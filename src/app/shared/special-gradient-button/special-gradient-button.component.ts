import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-special-gradient-button',
  templateUrl: 'special-gradient-button.component.html',
  styleUrls: ['special-gradient-button.component.scss']
})
export class SpecialGradientButtonComponent {

  @Input()
  public callback: () => void; // Passage d'une fonction flêchée sous forme de paramètre (seulement possible si pas d’émission d’évent)
  @Input()
  public background: string = '';
  @Input()
  public text: string = '';

}
