import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
    selector: "movies",
    templateUrl: "./movies.component.html",
    styleUrls: ["./movies.component.css"]
})

export class MoviesComponent {
    title = "movie listttttttt";
    movies!: Movie[];
    selectedMovie!: Movie;

    constructor(private movieService: MovieService) {

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    //subscribe asenkron çalışan sistemde verinin databaseden gelmesini beklenmesini sağlıyor
    getMovies(): void {
        this.movieService.getMovies().subscribe(movies => { this.movies = movies; });
    }

    add(name: string, imageUrl: string, description: string): void {
        this.movieService.add({ name, imageUrl, description } as Movie).subscribe(
            movie => this.movies.push(movie));
    }

    delete(movie: Movie): void {
        this.movies = this.movies.filter(m => m !== movie);
        this.movieService.delete(movie).subscribe();
    }
}