import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppConstants } from '../shared/utils/constants/warhammer.constants';

@Component({
  selector: 'warhammer-home',
  imports: [CommonModule],
  templateUrl: './warhammer.html',
  styleUrl: './warhammer.css',
})
export class Warhammer {
personagens = AppConstants.THUMBS;



}
