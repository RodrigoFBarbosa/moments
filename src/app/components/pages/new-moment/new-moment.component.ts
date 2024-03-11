import { MomentService } from './../../../services/moment.service';
import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar!';

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
      
  }

  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if(moment.image) {
      formData.append('image', moment.image);
    }

    // passos que tenho que fazer depois de cadastrar

    await this.momentService.createMoment(formData).subscribe

    // exibir msg

    // redirect 
  }
}
