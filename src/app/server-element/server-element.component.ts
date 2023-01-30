import { Component, OnInit, Input, SimpleChanges, OnChanges, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})

export class ServerElementComponent implements  OnChanges {
  @Input('svrElement') element: { type: string; name: string; content: string };
  @Input() name : string
  @ContentChild('contentParagraph') paragraph : ElementRef
  constructor() {}

  ngAfterContentInit() {
    console.log(this.paragraph?.nativeElement?.textContent);
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log('object');
    console.log(changes);
  }

}
