import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'montes-view',
  imports: [],
  templateUrl: './montes.html',
  styleUrl: './montes.css',
})
export class Montes {
  @Input() showMontes: boolean = true;
}
