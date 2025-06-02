import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

interface IAlbum {
  src: string;
  caption?: string;
  thumb: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, LightboxModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  album: IAlbum[] = [];

  constructor(private _lightbox: Lightbox) {
    // Add all gallery images
    for (let i = 1; i <= 52; i++) {
      const src = `assets/images/${i.toString().padStart(2, '0')}.jpg`;
      const thumb = src;
      const album = {
        src: src,
        thumb: thumb,
      };
      this.album.push(album);
    }
  }

  ngOnInit(): void {}

  open(index: number): void {
    this._lightbox.open(this.album, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
