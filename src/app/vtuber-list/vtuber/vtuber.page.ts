import { Component, OnInit } from '@angular/core';
import { Vtuber } from 'src/app/models/vtuber.model';
import { VtuberService } from 'src/app/vtuber.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vtuber',
  templateUrl: './vtuber.page.html',
  styleUrls: ['./vtuber.page.scss'],
})
export class VtuberPage implements OnInit {
  modif: boolean = false;
  vtuber!: Vtuber;

  constructor(
    private Vtuber: VtuberService,
    private router: Router,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Vtuber.get(id).subscribe((value: any) => {
      this.vtuber = value;
    });
  }

  async setModif() {
    if (!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Etes vous sur de vouloir modifier ?',
        subHeader: 'Attention',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel',
          },
          {
            text: 'Configurer',
            handler: () => {
              this.modif = !this.modif;
            },
          },
        ],
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications ont était enregistrée',
      duration: 2000,
    });
    (await toast).present();
  }

  onModif() {
    this.Vtuber.update(this.vtuber).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Vtuber.delete(id);
    this.router.navigate(['/vtuber']);
  }
}
