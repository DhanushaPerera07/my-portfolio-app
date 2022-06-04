import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education = [
    {
      head: 'Undergraduate',
      degree: 'BSc (Hons) in Information Technology Specialising in Software Engineering',
      institute: 'Sri Lanka Institute Of Information Technology',
      location: 'Malabe',
      yearFrom: 'June - 2018',
      yearTo: 'June - 2022',
      imageUrl: '/assets/images/education-institute/sliit-logo.jpg',
      imageAlt: 'SLIIT logo'
    },
    {
      head: 'G.C.E Advanced  Level',
      degree: 'Commerce Stream',
      institute: 'Sri Dharmaloka College',
      location: 'Kelaniya',
      yearFrom: 'August - 2016',
      yearTo: '',
      imageUrl: '/assets/images/education-institute/sri-dharmaloka-collage-logo.jfif',
      imageAlt: 'SLIIT logo'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
