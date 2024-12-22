import { Component, OnInit } from '@angular/core';
import { VtuberService } from '../vtuber.service';
import { Vtuber } from '../models/vtuber.model';

@Component({
  selector: 'app-vtuber-list',
  templateUrl: './vtuber-list.page.html',
  styleUrls: ['./vtuber-list.page.scss'],
})
export class VtuberListPage implements OnInit {
  vtubers!: Array<Vtuber>;

  constructor(private Vtuber: VtuberService) {}

  ngOnInit() {
    this.Vtuber.getAll().subscribe((data: any) => {
      this.vtubers = data;
    });
  }
}
