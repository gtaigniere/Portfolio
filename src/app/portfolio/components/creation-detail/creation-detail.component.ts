import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CreationService} from 'src/app/portfolio/services/creation.service';

import {Category} from 'src/app/models/category';
import {LanguageAndTool} from 'src/app/models/languageAndTool';
import {Creation} from 'src/app/models/creation';
import {CreationView} from 'src/app/models/creation-view';

@Component({
  selector: 'app-creation-detail',
  templateUrl: 'creation-detail.component.html',
  styleUrls: ['creation-detail.component.scss']
})
export class CreationDetailComponent implements OnInit {

  readonly PICTURE_URL = '../../assets/imgs/creations/';
  creations: Creation[];
  categories: Category[];
  languages: LanguageAndTool[];
  creation: CreationView = {};
  errMsg: string;
  
  buttonBackground: string = 'linear-gradient(0.44turn, cyan, darkcyan, black)';
  buttonText: string = 'Retour';

  constructor(
    private creationService: CreationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const id: string|null = params.get('id');
    //
    //   if (id) {
    //     this.creationService.getCreationById(+id).subscribe({
    //       next: (creation: Creation) =>
    //         this.creation = {
    //           id: creation.id,
    //           title: creation.title,
    //           description: creation.description,
    //           year: creation.year,
    //           picture: creation.picture,
    //           category: creation.categories.map(category => category.name).join(' / '),
    //           language: creation.languages.map(language => language.name).join(', ')
    //         },
    //       error: err => this.errMsg = err
    //     });
    //   }
    // });
  }

  public goToPortfolio = () => {
    this.router.navigate(['/portfolio/creations']);
  }

}
