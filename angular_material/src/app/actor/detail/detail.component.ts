import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  selectedActor: any;
  constructor(
    private actorsService: ActorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id')!, 10);
      this.selectedActor = this.actorsService.getActorsById(id);
    });
  }
}
