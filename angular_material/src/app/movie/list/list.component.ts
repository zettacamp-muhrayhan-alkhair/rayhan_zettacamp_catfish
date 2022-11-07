import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: Movie[] = []
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.fetchMoviesData().subscribe(data =>{
      this.movies = data
    })
  }

}
