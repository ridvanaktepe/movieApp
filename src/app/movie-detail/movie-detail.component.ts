import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie!: Movie; //Dışarıdan movie bilgisi alıyoruz

  constructor(
    private movieService: MovieService, 
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    var id = +this.route.snapshot.paramMap.get("id")!;
    console.log(id + "   " + typeof (id));
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie!);

  }

  save(): void {
    this.movieService.update(this.movie).subscribe(()=>{
      this.location.back();
    });
  }
}
