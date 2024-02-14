import { Component } from '@angular/core';
import {PhotoService} from "../services/photo.service";
import {HttpResponse} from "@angular/common/http";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  imageSrc: any;
  category: string = "GAME"
  love: boolean = false;
  constructor(private photoService: PhotoService) {
    this.ngOnInit()
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

  correctVariant() {
    this.love = true;
  }
  incorrectVariant() {
    alert("Incorrect")
  }

}
