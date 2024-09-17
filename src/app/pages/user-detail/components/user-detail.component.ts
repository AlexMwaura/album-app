import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  loggedInUser: string = 'Alex Mwaura';  
  userAlbums = [
    { title: 'A Thousand Suns', artist: 'Linkin Park', songs: 9, coverUrl: 'https://cdn.dribbble.com/users/677310/screenshots/6214986/ya.music-1600_4x.jpg?resize=1000x750&vertical=center' },
    { title: 'Astro World', artist: 'Travis Scott', songs: 12, coverUrl: 'https://i.pinimg.com/564x/84/39/4e/84394e456a22c4fa620eafaf307c38a6.jpg' },
    { title: 'Jesus is King', artist: 'Kanye West', songs: 12, coverUrl: 'https://i.pinimg.com/564x/c8/f2/8d/c8f28df11cf2bb516938406d9ac6a572.jpg' },
    { title: 'Utopia', artist: 'T.Scott', songs: 12, coverUrl: 'path/to/cover2.jpg' },
  ];
  
  userPosts = [
    { id: 1, content: 'Loving the new album!', date: '2024-09-10' },
    { id: 2, content: 'Can’t stop listening to Astro World!', date: '2024-09-11' }
  ];

  newPostContent: string = '';

  constructor() { }

  ngOnInit(): void {}

  createPost(): void {
    const newPost = {
      id: this.userPosts.length + 1,
      content: this.newPostContent,
      date: new Date().toISOString().split('T')[0]
    };
    this.userPosts.push(newPost);
    this.newPostContent = '';
  }
  handleMissingImage(event: any) {
    
    event.target.src = 'https://i.pinimg.com/564x/85/51/de/8551de206015700ff2b52a16101c5b82.jpg';
  }
  
}
