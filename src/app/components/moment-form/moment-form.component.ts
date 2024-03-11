import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>() //consigo emitir o evento com os dados do formulário
  @Input() btnText!: string

  momentForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
      this.momentForm = new FormGroup({ 
        id: new FormControl(''),
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      })
  }

  get title() {
    return this.momentForm.get('title')! // estou pegando o atributo desse moment form que inicializei 
  }

  get description() {
    return this.momentForm.get('description')! //colocar a exclamação igual ao declarar o form group para mostrar ao angular que de fato os valores não serão nulos
  }

  submit() {
    if(this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);

    this.onSubmit.emit(this.momentForm.value) // estou enviando por meio desse submit os dados do formulario do component pai
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]
    // metodo para inserir a imagem diferente do automatico do title, etc.
    this.momentForm.patchValue ({
      image: file
    });
  }
}
