import { Component } from '@angular/core';
import {PhotoService} from "../services/photo.service";
import * as FileSaver from 'file-saver';
import {DomSanitizer} from "@angular/platform-browser";
import {NgOptimizedImage} from "@angular/common";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {

  category: string = "SWEET"
  imageSrc: any;
  constructor(private photoService: PhotoService, private sanitizer:DomSanitizer) {
    //this.getPhoto();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.photoService.downloadFile(this.category).subscribe(
      (data: HttpResponse<Blob>) => {
        const reader = new FileReader();
        // @ts-ignore
        reader.onload = (e) => this.imageSrc = e.target.result;
        // @ts-ignore
        reader.readAsDataURL(new Blob([data.body]));
      });
  }
}
