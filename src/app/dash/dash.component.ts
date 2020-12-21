import { Component, OnInit } from '@angular/core';
import * as qna from '@tensorflow-models/qna'
import * as tfjs from '@tensorflow/tfjs';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  para = 'Enter';
  search = 'Search';
  result;
   model;
  constructor() { }

   ngOnInit() {
     this.loadModel();

  }

 async loadModel() {

     this.model = await qna.load();
  }

  async searchText() {

    console.log(this.para,'..',this.search);

    const passage = this.para;
    const question = this.search;
    const answers = await this.model.findAnswers(question, passage);
    console.log("Answer:",answers);
    this.result = answers;

  }

}
