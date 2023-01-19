import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  

  fecha:Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.consoleText(['PORTFOLIO'], 'text',['#e8e8e8']);
    
  }


  consoleText(words:string[], id:string, colors:string[]){
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target?.setAttribute('style', 'color:' + colors[0]);
    window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        if (target != undefined) {
          target.innerHTML = words[0].substring(0, letterCount);
        }
        window.setTimeout(() => {
          var usedColor = colors.shift();
          var usedWord = words.shift();
          if (usedColor != undefined && usedWord != undefined) {
            colors.push(usedColor);
            words.push(usedWord);
          }
          x = 1;
          target?.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        if (target != undefined) {
          target.innerHTML = words[0].substring(0, letterCount);
        }
        letterCount += x;
      }
    }, 120)
    window.setInterval(function() {
      if (visible === true) {
        if(con != undefined){
          con.className = 'console-underscore hidden';
          visible = false;
        }
        
      } else {
        if(con != undefined){
          con.className = 'console-underscore';
          visible = true;
        }
      }
    }, 400)
  }

}
