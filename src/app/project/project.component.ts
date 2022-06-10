import {Component, OnInit} from '@angular/core';
import {Project} from "../model/project.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  showNavigationArrows = false;
  projectList: Project[] = [
    {
      name: 'Tourism Management System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dignissimos distinctio dolore eveniet\n' +
        '        impedit saepe sunt voluptatem. Alias aspernatur dicta eveniet laudantium neque quaerat qui reprehenderit sit\n' +
        '        tempore unde! Aliquam atque beatae, deserunt eaque fugiat, fugit incidunt molestiae nesciunt obcaecati possimus\n' +
        '        praesentium quia repudiandae rerum sit soluta temporibus veniam. Ab delectus dicta hic in ipsam ratione tempore!\n' +
        '        Distinctio, qui? Accusamus commodi dolore et facilis inventore omnis optio unde. Eligendi id, vitae! A accusamus\n' +
        '        adipisci aut dolor dolores, eum incidunt, iure nobis non perspiciatis quisquam sapiente sed tempora ullam\n' +
        '        voluptatum?Accusamus aspernatur deleniti ea iusto minus quisquam tempora ullam? Blanditiis consequatur\n' +
        '        cupiditate, error impedit magni optio reprehenderit suscipit voluptatibus. Excepturi minima quas repudiandae\n' +
        '        sunt! Autem commodi fugiat illum molestias voluptate. Cupiditate debitis eius fugit illum molestias\n' +
        '        necessitatibus praesentium sed sint. Ab aut doloremque ex explicabo id laborum libero molestias neque nesciunt\n' +
        '        possimus repellendus, sapiente similique sint ut voluptas. Atque, minus!',
      techStack: ['Angular', 'TypeScript', 'Java', 'Hibernate/JPA', 'Spring Framework', 'MySQL', 'JUnit'],
      frontendSourceCode: 'https://github.com/DhanushaPerera07/TourismManagementSystemFrontEndAngular',
      backendSourceCode: 'https://github.com/DhanushaPerera07/TourismManagementSystemBackEndJava',
      imagePath: '/assets/images/projects/tms.PNG',
    },
    {
      name: 'Order Management Micro-Service for POS Application',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi ducimus, ea esse est harum' +
        ' maiores maxime minus molestias neque nesciunt nihil porro quam repudiandae rerum sapiente, sint, tempora?' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aperiam aut beatae doloribus eveniet ' +
        'exercitationem iure modi nesciunt perferendis reprehenderit sunt tempora tenetur totam voluptate voluptatibus. ' +
        'A nobis optio sunt?' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, est, quam. Autem ea harum provident. ' +
        'Aliquid asperiores corporis debitis dicta facere in laboriosam mollitia omnis placeat, praesentium, quasi quos' +
        ' voluptates.',
      techStack: [ 'Java', 'Spring Framework', 'MongoDB Cloud', 'Docker', 'Kubernetes', 'GitHub Actions/ CICD', 'JUnit'],
      frontendSourceCode: '',
      backendSourceCode: 'https://github.com/DhanushaPerera07/CTSE-Assignment3-Backend-Microservices.git',
      imagePath: '/assets/images/projects/Order-Management-Micro-Service.PNG',
    },
    {
      name: 'Conference Management System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi ducimus, ea esse est harum' +
        ' maiores maxime minus molestias neque nesciunt nihil porro quam repudiandae rerum sapiente, sint, tempora?' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aperiam aut beatae doloribus eveniet ' +
        'exercitationem iure modi nesciunt perferendis reprehenderit sunt tempora tenetur totam voluptate voluptatibus. ' +
        'A nobis optio sunt?' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, est, quam. Autem ea harum provident. ' +
        'Aliquid asperiores corporis debitis dicta facere in laboriosam mollitia omnis placeat, praesentium, quasi quos' +
        ' voluptates.',
      techStack: ['ReactJS', 'NodeJS', 'KoaJS', 'MongoDB'],
      frontendSourceCode: '',
      backendSourceCode: 'https://github.com/MenuraDewalegama/Conference-Management-Tool.git',
      imagePath: '/assets/images/projects/Conference-Management-System.png',
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
