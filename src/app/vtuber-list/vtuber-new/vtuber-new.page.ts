import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VtuberService } from 'src/app/vtuber.service'; // Assurez-vous d'avoir un service pour les VTubers
import { Vtuber } from 'src/app/models/vtuber.model'; // Assurez-vous d'avoir un modèle pour les VTubers

@Component({
  selector: 'app-vtuber-new',
  templateUrl: './vtuber-new.page.html',
  styleUrls: ['./vtuber-new.page.scss'],
})
export class VtuberNewPage implements OnInit {
  public vtuber!: Vtuber;

  constructor(
    private vtuberService: VtuberService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.vtuber = new Vtuber();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau VTuber enregistré',
      duration: 2000,
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/vtuber']);
      }, 2000);
    });
  }

  add() {
    this.vtuberService.saveNewVtuber(this.vtuber).subscribe(() => {
      this.vtuber = new Vtuber();
      this.presentToast();
    });
  }
}
