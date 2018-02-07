import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Answer} from '../../models/answer';
import {Data} from '../data.service';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss']
})
export class ResultDetailComponent implements OnInit {
  @Input()
  results: any [];
  answersReceived: Answer;

  constructor(
    private route: ActivatedRoute,
    private data: Data
  ) {}

  ngOnInit() {
    this.answersReceived = this.data.storage;
    console.log(this.data.storage);
    console.log(JSON.stringify(this.data.storage));
  }
}
