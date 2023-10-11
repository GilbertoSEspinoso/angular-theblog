import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  contentPhotoCover: string =
    'https://media.istockphoto.com/id/1476264587/pt/foto/young-man-using-a-digital-tablet-in-a-city-at-night.jpg?s=2048x2048&w=is&k=20&c=OYAl9Kq70JRJfHEbyDKTD9kV6wsd8HOVIazXKnu6Tbc=';
  contentTitle: string = '';
  contentDescription: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value));
  }
}
