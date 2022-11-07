import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  actors: Actor[] = [];
  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actorService.fetchActorsData().subscribe(data =>{
      this.actors = data
    })
  }
}
