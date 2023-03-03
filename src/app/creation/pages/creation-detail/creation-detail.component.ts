import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Creation} from 'src/app/creation/models/creation';
import {CreationView} from 'src/app/creation/models/creation-view';

@Component({
  selector: 'app-creation-detail',
  templateUrl: 'creation-detail.component.html',
  styleUrls: ['creation-detail.component.scss']
})
export class CreationDetailComponent implements OnInit {

  readonly PICTURE_BASE_PATH = '../../assets/imgs/creations/';
  creation: Creation;
  creationView: CreationView;

  buttonBackground: string = 'linear-gradient(0.44turn, cyan, darkcyan, black)';
  buttonText: string = 'Retour';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.creation = this.activatedRoute.snapshot.data['creation'];

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

  public goToCreations = () => {
    this.router.navigate(['/creations']);
  }

}
