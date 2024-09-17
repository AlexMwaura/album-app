import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
    loggedInUser: string = 'Alex Mwaura';  
  albumCount: number = 0;  
  loading: boolean = true;

  albums = [
    { title: 'A Thousand Suns', artist: 'Linkin Park', songs: 9, coverUrl: 'https://cdn.dribbble.com/users/677310/screenshots/6214986/ya.music-1600_4x.jpg?resize=1000x750&vertical=center' },
    { title: 'Astro World', artist: 'Travis Scott', songs: 12, coverUrl: 'https://i.pinimg.com/564x/84/39/4e/84394e456a22c4fa620eafaf307c38a6.jpg' },
    { title: 'Jesus is King', artist: 'Kanye West', songs: 12, coverUrl: 'https://i.pinimg.com/564x/c8/f2/8d/c8f28df11cf2bb516938406d9ac6a572.jpg' },
    { title: 'Utopia', artist: 'T.Scott', songs: 12, coverUrl: 'path/to/cover2.jpg' },

  ];

  ngOnInit(): void {
    this.albumCount = this.albums.length;
  }
  handleMissingImage(event: any) {
    event.target.src = 'https://i.pinimg.com/564x/c8/f2/8d/c8f28df11cf2bb516938406d9ac6a572.jpg';
  }
}
