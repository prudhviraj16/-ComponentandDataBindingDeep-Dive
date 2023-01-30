import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent {
  interval : any ;
  @Output() IntervalFired = new EventEmitter<number>();
  count = 0

  onStartGame(){
    this.interval = setInterval(() =>{
      this.IntervalFired.emit(this.count);
      this.count++
    },1000)
  }

  onStopGame(){
    clearInterval(this.interval)
  }
}
