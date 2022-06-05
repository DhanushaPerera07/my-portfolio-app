import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      workedAs: 'Trainee Associate Software Engineer (Full-stack)',
      company: 'Institute of Software Engineering (PVT) LTD',
      location: 'Panadura',
      imageUrl: '/assets/images/employer-logos/IJSE logo.jpg',
      imageAlt: 'Company logo',
      since: 'Jul - 2020',
      to: 'Feb - 2021'
    },
    {
      workedAs: 'Assistant Junior Executive - Fabric Testing',
      company: 'Ocean Lanka (PVT) LTD',
      location: 'BOI - Biyagama',
      imageUrl: '/assets/images/employer-logos/ocean lanka logo.jpg',
      imageAlt: 'Company logo',
      since: 'Feb - 2018',
      to: 'Jul - 2018'
    },
    {
      workedAs: 'School Leaver Banking Trainee',
      company: 'Bank of Ceylon',
      location: 'Dalugama',
      imageUrl: '/assets/images/employer-logos/BOC logo.jpg',
      imageAlt: 'Company logo',
      since: 'Jul - 2017',
      to: 'Jan - 2018'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
