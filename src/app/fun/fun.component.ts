import { Component } from '@angular/core';
import {PhotoService} from "../services/photo.service";
import {HttpResponse} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-fun',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './fun.component.html',
  styleUrl: './fun.component.css'
})
export class FunComponent {

  imageSrc: any;
  category: string = "FUN"
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

}
