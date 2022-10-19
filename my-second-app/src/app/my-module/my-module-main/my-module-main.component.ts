import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-module-main',
  templateUrl: './my-module-main.component.html',
  styleUrls: ['./my-module-main.component.css'],
})
export class MyModuleMainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  movieList: any = [
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
      title: 'First Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit officia saepe quidem fuga omnis, pariatur nobis consectetur dolore quia?',
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
      title: 'Second Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit officia saepe quidem fuga omnis, pariatur nobis consectetur dolore quia?',
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
      title: 'Third Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit officia saepe quidem fuga omnis, pariatur nobis consectetur dolore quia?',
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
      title: 'Fourth Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit officia saepe quidem fuga omnis, pariatur nobis consectetur dolore quia?',
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
      title: 'Fifth Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit officia saepe quidem fuga omnis, pariatur nobis consectetur dolore quia?',
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
      title: 'Sixth Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit officia saepe quidem fuga omnis, pariatur nobis consectetur dolore quia?',
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
      title: 'Seventh Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit officia saepe quidem fuga omnis, pariatur nobis consectetur dolore quia?',
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
      title: 'Eigthth Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit officia saepe quidem fuga omnis, pariatur nobis consectetur dolore quia?',
    },
  ];
}
