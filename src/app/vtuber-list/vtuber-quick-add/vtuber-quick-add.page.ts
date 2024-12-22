import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { VtuberService } from 'src/app/vtuber.service';
import { Vtuber } from 'src/app/models/vtuber.model';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vtuber-quick-add',
  templateUrl: './vtuber-quick-add.page.html',
  styleUrls: ['./vtuber-quick-add.page.scss'],
})
export class VtuberQuickAddPage implements OnInit {
  vtuberChannels: any[] = [];
  offset: number = 0;
  limit: number = 20;
  hasMore: boolean = true;
  loading: boolean = false;

  vtuber!: Vtuber;

  constructor(
    private http: HttpClient,
    private vtuberService: VtuberService,
    private router: Router,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.vtuber = new Vtuber();
    this.loadVtuberChannels();
  }

  async loadVtuberChannels(event?: any) {
    const headers = new HttpHeaders().set(
      'X-APIKEY',
      environment.holodex_api_key
    );
    const params = {
      type: 'vtuber',
      offset: this.offset,
      limit: this.limit,
      org: 'Hololive',
    };

    try {
      const response = await firstValueFrom(
        this.http.get<any[]>('https://holodex.net/api/v2/channels', {
          headers,
          params,
        })
      );

      this.vtuberChannels = [...this.vtuberChannels, ...response];

      if (response.length < this.limit) {
        this.hasMore = false;
      }

      if (event) {
        event.target.complete();
      }

      this.offset += this.limit;
    } catch (error) {
      console.error('Error fetching VTuber channels:', error);
      if (event) {
        event.target.complete();
      }
    }
  }

  async addVtuber(vtuber: any) {
    this.loading = true;

    const alert = await this.alertCtrl.create({
      header: 'Etes-vous sûr de vouloir ajouter ce VTuber ?',
      subHeader: 'Attention',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel',
          handler: () => {
            this.loading = false;
          },
        },
        {
          text: 'Ajouter',
          handler: async () => {
            try {
              const headers = new HttpHeaders().set(
                'X-APIKEY',
                environment.holodex_api_key
              );

              const channelDetails = await firstValueFrom(
                this.http.get<any>(
                  `https://holodex.net/api/v2/channels/${vtuber.id}`,
                  {
                    headers,
                  }
                )
              );

              this.vtuber.chaine = `https://www.youtube.com/${channelDetails.id}`;
              this.vtuber.img_chaine = channelDetails.photo;
              this.vtuber.nom = channelDetails.name;
              this.vtuber.description = channelDetails.description;

              this.vtuberService.saveNewVtuber(this.vtuber).subscribe(() => {
                this.vtuber = new Vtuber();
                this.loading = false;
                this.presentToast(`VTuber ${vtuber.name} ajouté avec succès !`);
              });
            } catch (error) {
              this.loading = false;
              console.error('Erreur:', error);
              this.presentToast("Erreur lors de l'ajout du VTuber");
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/vtuber']);
      }, 2000);
    });
  }
}
