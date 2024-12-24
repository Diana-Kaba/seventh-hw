import { Component } from '@angular/core';
import { GetAlbumsService } from '../../shared/get-albums.service';
import { Album } from '../../shared/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  constructor(private getAlbumsService: GetAlbumsService) {}

  albums!: Album[];

  ngOnInit() {
    this.getAlbumsService.getAlbums()
      .subscribe(data => {
        console.log(data);
        this.albums = data;
      });
  }
}
