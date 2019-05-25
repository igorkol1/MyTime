import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  timeLeft: number = 5;
  message = 'Go back in... ';

  constructor(
    private location: Location
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
        this.navigateBack();
      }, 5000
    );
    setInterval(() => {
      this.timeLeft--;
    }, 1000);
  }

  navigateBack() {
    this.location.back();
  }
}
