import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CreationService } from 'src/app/portfolio/services/creation.service';

import { Category } from 'src/app/models/category';
import { Language } from 'src/app/models/language';
import { Creation } from 'src/app/models/creation';
import { CreationView } from 'src/app/models/creation-view';

@Component({
  selector: 'app-creation-detail',
  templateUrl: 'creation-detail.component.html',
  styleUrls: ['creation-detail.component.css']
})
export class CreationDetailComponent implements OnInit {

  public PICTURE_URL: string = '../../assets/imgs/creations/';
  public creations: Creation[];
  public categories: Category[];
  public languages: Language[];
  public creation: CreationView = {};
  public errMsg: string;
  
  // public buttonBackground: string = 'linear-gradient(0.44turn, #007BFF, #4169E1, black)';
  public buttonBackground: string = 'linear-gradient(0.44turn, cyan, darkcyan, black)';

  public buttonText: string = 'Retour';

  constructor(private creationService: CreationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const creationId: string|null = this.route.snapshot.paramMap.get('id');

    if (creationId) {
      this.creationService.getCreationById(+creationId).subscribe({
        next: (creation: Creation) => 
          this.creation = {
            id: creation.id,
            title: creation.title,
            description: creation.description,
            year: creation.year,
            picture: creation.picture,
            categorie: creation.categories.map(categorie => categorie.name).join(' / '),
            language: creation.languages.map(language => language.name).join(', ')
          },
        error: err => this.errMsg = err
      });
    }

  }

  public goToPortfolio = () => {
    this.router.navigate(['/portfolio/creations']);
  }

}
