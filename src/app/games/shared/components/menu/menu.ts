import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-view',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  @Input() showMenu: boolean = true;
  @Input() style?: { [key: string]: string };
  menuItems = [
    { id: 'blog', icon: 'assets/warhammer/menu/Blog.png', link: 'https://blog.1nodado.com.br/' },
    { id: 'foundry', icon: 'assets/warhammer/menu/Foundry.png', link: 'https://foundry.1nodado.com.br/join' },
    { id: 'youtube', icon: 'assets/warhammer/menu/Youtube.png', link: 'https://www.youtube.com/@1nodado' },
  ];
}
