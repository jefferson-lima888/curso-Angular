import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // template: `
  //   <!--The content below is only a placeholder and can be replaced.-->
  //   <div style="text-align:center" class="content">
  //     <h1>
  //       Bem vindo {{title}}!
  //     </h1>
  //     <span style="display: block">{{ title }} meu primeiro app!</span>
  //     <img width="300" alt="Angular Logo" src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png">
  //   </div>
  //   <h2>Here are some links to help you start: </h2>
  //   <ul>
  //     <li>
  //       <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  //     </li>
  //     <li>
  //       <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
  //     </li>
  //     <li>
  //       <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  //     </li>
  //   </ul>
  //   <router-outlet></router-outlet>
  // `,
  // styles: []
})
export class AppComponent {
  // title = 'frontend';
  // aqui é onde se define a variavel a ser interpolada para uso no HTML
  nome = 'Jeff';
}
