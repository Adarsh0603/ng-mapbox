import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-popups',
  templateUrl: './show-popups.component.html',
  styleUrls: ['./show-popups.component.scss'],
})
export class ShowPopupsComponent implements OnInit {
  description: string = 'This is a popup attached to a marker instance.';
  constructor() {}

  ngOnInit(): void {}
}
