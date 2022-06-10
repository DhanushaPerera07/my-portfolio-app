import {Component, Input, OnInit} from '@angular/core';

import { faAngular } from '@fortawesome/free-brands-svg-icons';
import {Project} from "../../model/project.model";

@Component({
  selector: 'app-project-holder',
  templateUrl: './project-holder.component.html',
  styleUrls: ['./project-holder.component.scss']
})
export class ProjectHolderComponent implements OnInit {

  @Input('project') project!: Project;

  faAngular = faAngular;

  constructor() { }

  ngOnInit(): void {
  }

}
