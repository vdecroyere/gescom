import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search_input = new FormControl('');

  searchForm = new FormGroup({
    search_input: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
