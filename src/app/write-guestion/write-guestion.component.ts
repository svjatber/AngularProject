import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Message} from '../interfaces/message.interface';

@Component({
  selector: 'app-write-guestion',
  templateUrl: './write-guestion.component.html',
  styleUrls: ['./write-guestion.component.scss']
})
export class WriteGuestionComponent implements OnInit {
  form: FormGroup;
  messages: Message[] = [];
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      message: new FormControl('')
    });
  }

  keyInput(e){
    if (e.code === 'Enter'){
      this.sent(e);
    }
  }

  sent(e: any): void{
    const Form = {...this.form.value};
    const messagesClone: Message[] = [...this.messages];
    const messagePush: Message = {id: 0, message: Form.message};
    messagesClone.unshift(messagePush);
    this.messages = messagesClone;
    this.form.reset();
  }
}
