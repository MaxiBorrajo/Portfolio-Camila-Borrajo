import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-community-manager';
  @ViewChild("video", { static: true, read: ElementRef })
  video!: ElementRef;

  constructor(){}

  ngOnInit():void {
    this.video.nativeElement.muted = true;
  }
}
