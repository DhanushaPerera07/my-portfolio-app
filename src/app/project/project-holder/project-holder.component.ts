import { Component, OnInit } from '@angular/core';

import { faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-holder',
  templateUrl: './project-holder.component.html',
  styleUrls: ['./project-holder.component.scss']
})
export class ProjectHolderComponent implements OnInit {

  faAngular = faAngular;

  constructor() { }

  ngOnInit(): void {
  }

}
