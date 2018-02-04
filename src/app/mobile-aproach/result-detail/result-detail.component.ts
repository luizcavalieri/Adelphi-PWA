import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss']
})
export class ResultDetailComponent implements OnInit {
  @Input()
  results: any [];

  constructor() { }

  ngOnInit() {}

}
