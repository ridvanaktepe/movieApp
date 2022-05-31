import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: "Adam Project", description: "güzel film", imageUrl: "1.jpg" },
      { id: 2, name: "Kim Demiş", description: "iyi film", imageUrl: "2.jpg" },
      { id: 3, name: "Cesur Balık", description: "hoş film", imageUrl: "3.jpg" },
      { id: 4, name: "Süper Yetenek", description: "kaliteli film", imageUrl: "4.jpg" },
      { id: 5, name: "Anime", description: "romantik film", imageUrl: "5.jpg" },
      { id: 6, name: "Doktor Strange", description: "yeni film", imageUrl: "6.jpg" },
      { id: 7, name: "Kurtuluş Hattı", description: "kötü film", imageUrl: "7.jpg" },
      { id: 8, name: "Ejderham", description: "sıkıcı film", imageUrl: "8.jpg" },
      { id: 9, name: "Sivaslı", description: "eski film", imageUrl: "9.jpg" }
    ];
    return { movies };
  }

  constructor() { }
}
