import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() artist: string = ''
  @Input() album: string = ''
  @Input() url: string = ''

  @Output()
  addNew = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addCd() {
    this.addNew.emit()
  }

}
