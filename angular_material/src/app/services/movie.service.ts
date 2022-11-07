import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies = new BehaviorSubject<Movie[]>([]);
  movies$ = this.movies.asObservable();

  selectedMovie = new BehaviorSubject<any>(null);
  selectedMovie$ = this.selectedMovie.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchMoviesData().subscribe((data) => this.movies.next(data));
  }

  fetchMoviesData() {
    return this.httpClient.get<Movie[]>('../assets/dummy/movies.dummy.json');
  }

  updateSelectedMovie(data: any) {
    this.selectedMovie.next(data);
  }

  getMovieData(): Movie[] {
    return this.movies.getValue();
  }

  getMovieById(id: number): Movie {
    return this.getMovieData().filter((data) => data.id == id)[0];
  }
}
