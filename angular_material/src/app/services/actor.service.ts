import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  actors = new BehaviorSubject<Actor[]>([]);
  actors$ = this.actors.asObservable();

  selectedActor = new BehaviorSubject<any>(null);
  selectedActor$ = this.selectedActor.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchActorsData().subscribe((data) => {
      this.actors.next(data);
    });
  }

  fetchActorsData() {
    return this.httpClient.get<Actor[]>('../assets/dummy/actors.dummy.json');
  }

  updateSelectedActors(data: any) {
    this.selectedActor.next(data);
  }

  getActors(): Actor[] {
    return this.actors.getValue();
  }

  getActorsById(id: number): Actor {
    return this.getActors().filter((data) => data.id == id)[0];
  }
}
