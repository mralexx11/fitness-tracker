import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress >= 100 ? clearInterval(this.timer) : this.progress = this.progress + 20;
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer)
  }
}
