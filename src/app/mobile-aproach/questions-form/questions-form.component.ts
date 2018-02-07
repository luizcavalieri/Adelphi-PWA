import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Answer} from '../../models/answer';
import {Router} from '@angular/router';
import {Data} from '../data.service';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent implements OnInit {
  questionnaire: FormGroup;
  answers: Answer;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private data: Data) {
    this.createForm(fb);
  }

  ngOnInit() {
  }

  createForm (fb): void {
    this.answers = {
      fullName: 'test',
      email: 'test',
      companyName: 'test',
      phone: 'test',
      projectType: 3,
      hasDue: false,
      featNotification: true
    };
    this.questionnaire = fb.group({
      fullNameTxt: new FormControl(this.answers.fullName, [
        Validators.required,
        Validators.minLength(4)
      ]),
      companyNameTxt: new FormControl(this.answers.companyName, [
        Validators.required,
        Validators.minLength(4)
      ]),
      emailTxt: new FormControl(this.answers.email, [
        Validators.required,
        Validators.minLength(4)
      ]),
      phoneTxt: new FormControl(this.answers.phone, [
        Validators.required,
        Validators.minLength(4)
      ]),
      projectTypeSelect: new FormControl(this.answers.projectType, [
        Validators.required
      ]),
      hasDueRdoBtn: new FormControl(this.answers.hasDue, [
        Validators.required
      ]),
      featNotificationChx: new FormControl(this.answers.featNotification, [
        Validators.required
        ]),
      hideRequired: false,
      floatLabel: 'auto'
    });
  }

  checkResults() {
    this.data.storage = this.answers;
    console.log(JSON.stringify(this.data.storage));
    this.router.navigate(['/results']);
  }
}
