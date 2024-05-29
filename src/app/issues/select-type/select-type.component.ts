import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-type',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './select-type.component.html'
})
export class SelectTypeComponent implements OnInit{

  ngOnInit(): void {
    this.enviarTipoIssues();
  }

  @Output() type  = new EventEmitter<string>();
  selectedType: string = '';

  enviarTipoIssues(){
  this.type.emit(this.selectedType);

  }

}
