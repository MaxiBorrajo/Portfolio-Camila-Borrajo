import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @ViewChild("video", { static: true, read: ElementRef })
  video!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.video.nativeElement.muted = true;
  }

}
