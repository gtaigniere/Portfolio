import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-snippet-filter',
  templateUrl: 'snippet-filter.component.html',
  styleUrls: ['snippet-filter.component.css']
})
export class SnippetFilterComponent implements OnInit {

  public buttonBackground: string = 'linear-gradient(0.44turn, mediumpurple, purple, black)';
  public buttonText: string = "Nouveau Snippet";

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  public goToSnippetAdd = () => {
    this.router.navigate(['/snippet/add']);
  }
}
