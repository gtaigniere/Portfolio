import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CreationService} from 'src/app/portfolio/services/creation.service';
import {CategoryService} from "../../services/category.service";
import {LanguageAndToolService} from "../../services/languageAndTool.service";

import {Creation} from 'src/app/models/creation';
import {Category} from 'src/app/models/category';
import {LanguageAndTool} from 'src/app/models/languageAndTool';
import {CreationView} from 'src/app/models/creation-view';

@Component({
  selector: 'app-creation-detail',
  templateUrl: 'creation-detail.component.html',
  styleUrls: ['creation-detail.component.scss']
})
export class CreationDetailComponent implements OnInit {

  readonly PICTURE_URL = '../../assets/imgs/creations/';
  creation: Creation;
  category?: Category;
  categories: Category[] = [];
  languageAndTool?: LanguageAndTool;
  languagesAndTools: LanguageAndTool[] = [];
  creationView: CreationView = {};

  buttonBackground: string = 'linear-gradient(0.44turn, cyan, darkcyan, black)';
  buttonText: string = 'Retour';

  constructor(
    private creationService: CreationService,
    private categoryService: CategoryService,
    private languageAndToolService: LanguageAndToolService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const creation: Creation = params.get('creation');
      // const id: string|null = params.get('id');

      if (creation) {
        console.table(creation);
      }

      /*
      if (id) {
        this.creationService.getCreationById(id).subscribe(
          creation => {
            this.creation = creation;
            this.creation.categories?.map(cat => {
              this.categoryService.getCategoryById(cat.id).subscribe(
                category => {
                  this.category = category;
                  this.categories?.push(category);
                }
              )
            });
            this.creation.languages_tools?.map(langAndTool => {
              this.languageAndToolService.getLanguageAndToolById(langAndTool.id).subscribe(
                languageAndTool => {
                  this.languageAndTool = languageAndTool;
                  this.languagesAndTools?.push(languageAndTool);
                }
              )
            });
            this.creationView = {
              id: this.creation.id,
              title: this.creation.title,
              description: this.creation.description,
              year: this.creation.year,
              picture: this.creation.picture,
              categories: this.categories.map(categories => categories.name).join(' / '),
              languagesAndTools: this.languagesAndTools.map(languagesAndTools => languagesAndTools.name).join(', ')
            }
          }
        );
      }
      */
    });
  }

  public goToPortfolio = () => {
    this.router.navigate(['/portfolio/creations']);
  }

}
