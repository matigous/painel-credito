import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkService } from '../../../services/network.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  isOnline$!: Observable<boolean>;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.isOnline$ = this.networkService.isOnline$;
  }
}
