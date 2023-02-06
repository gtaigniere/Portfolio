import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CreationService} from 'src/app/portfolio/services/creation.service';
import {Creation} from 'src/app/models/creation';
import {CategoryService} from "./services/category.service";
import {Category} from "../models/category";
import {LanguageAndToolService} from "./services/languageAndTool.service";
import {LanguageAndTool} from "../models/languageAndTool";

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  title: string = "Portfolio";

  readonly PICTURE_URL: string = '../../assets/imgs/creations/';
  creations: Creation[];
  errMsg: string;
  creation: Creation;
  category?: Category;
  categories?: Category[];
  languageAndTool?: LanguageAndTool;
  languagesAndTools?: LanguageAndTool[];

  constructor(
    private creationService: CreationService,
    private categoryService: CategoryService,
    private languageAndToolService: LanguageAndToolService,
    private router: Router
  ) { }

  ngOnInit() {
    this.creationService.getCreationById('n4tHjqPt8GjR3TFPd4Hb').subscribe({
      next: creation => {
        this.creation = creation;
        this.creation.categories?.map(cat => {
          this.categoryService.getCategoryById(cat.id).subscribe(
            category => {
              this.category = category;
              console.log(category);
              this.categories?.push(category);
            }
          )
        });
        console.log(this.categories);
        this.creation.languages_tools?.map(langAndTool => {
          this.languageAndToolService.getLanguageAndToolById(langAndTool.id).subscribe(
            languageAndTool => {
              this.languageAndTool = languageAndTool;
              console.log(languageAndTool);
              this.languagesAndTools?.push(languageAndTool);
            }
          )
        });
        console.log(this.languagesAndTools);
      }
    });
  }

  // goToCreation(id: string) {
  //   this.router.navigate(['/portfolio/creation', id]);
  // }

}
