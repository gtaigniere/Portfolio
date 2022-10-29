import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-special-gradient-button',
  templateUrl: 'special-gradient-button.component.html',
  styleUrls: ['special-gradient-button.component.css']
})
export class SpecialGradientButtonComponent implements OnInit {

  // public gradientColor1: string = "";
  // public gradientColor2: string = "";
  // public gradientColor3: string = "";
  // public textColor: string = "";
  // public text: string = "";

  @Input()
  public buttonRouterLink: string = "['/accueil']";
  
  @Input()
  public buttonName: string = "Bouton";

  @Output()
  public buttonClicked: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  public goAway() {
    this.buttonClicked.emit("Bouton cliqué");
  }

}
