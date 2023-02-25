import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CreationService} from 'src/app/portfolio/services/creation.service';

import {Creation} from 'src/app/portfolio/models/creation';
import {Category} from 'src/app/portfolio/models/category';
import {LanguageAndTool} from 'src/app/portfolio/models/languageAndTool';
import {CreationView} from 'src/app/portfolio/models/creation-view';

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
  creationView: CreationView;

  buttonBackground: string = 'linear-gradient(0.44turn, cyan, darkcyan, black)';
  buttonText: string = 'Retour';

  constructor(
    private creationService: CreationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.creation = this.activatedRoute.snapshot.data['creation'];
    console.log(this.creation);

    this.creationView = {
      id: this.creation.id,
      title: this.creation.title,
      description: this.creation.description,
      year: this.creation.year,
      picture: this.creation.picture,
      categories: this.creation.categories?.map(categories => categories.name).join(' / '),
      languagesAndTools: this.creation.languagesAndTools?.map(languagesAndTools => languagesAndTools.name).join(', ')
    }
  }

  public goToPortfolio = () => {
    this.router.navigate(['/portfolio/creations']);
  }

}
