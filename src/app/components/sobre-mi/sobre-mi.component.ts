import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SobreMiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
