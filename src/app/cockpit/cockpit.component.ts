import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput : ElementRef

  onAddServer (nameInput : HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  };

  onAddBluePrint = (nameInput : HTMLInputElement) => {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  };
}
