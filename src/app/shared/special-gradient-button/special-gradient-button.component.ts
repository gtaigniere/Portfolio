import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-special-gradient-button',
  templateUrl: 'special-gradient-button.component.html',
  styleUrls: ['special-gradient-button.component.css']
})
export class SpecialGradientButtonComponent implements OnInit, AfterViewInit {

  @ViewChild('specialButton')
  specialButton: ElementRef;

  @Input()
  public callback: () => void; // Passage d'une fonction flêchée sous forme de paramètre (seulement possible si pas d’émission d’évent)
  @Input()
  public background: string = '';
  @Input()
  public text: string = '';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.specialButton.nativeElement.style.background = this.background;
  }

}
