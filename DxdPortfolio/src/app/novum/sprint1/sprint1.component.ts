import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-sprint1',
  templateUrl: './sprint1.component.html',
  styleUrls: ['./sprint1.component.scss']
})
export class Sprint1Component implements OnInit {

  tracks: Track[] = [
    {
      title: 's',
      link: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
