import { Component } from '@angular/core';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faHandPointDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minibio';
  isDark = false;
  btnDarkMode = faMoon;
  faPointer = faHandPointDown;
  //Array con objetos: imagen, párrafo y link
  rrss=[
    {
      img: faLinkedin,
      text: "Mi perfil en LinkedIn",
      link: "https://www.linkedin.com/in/cristina-ouellette-hern%C3%A1ndez-532597b9/"
    },
    {
      img: faTwitter,
      text:"¡También estoy en Twitter!",
      link:"https://twitter.com/CrisOH96"
    },
    {
      img: faGithub,
      text: "Mi perfil de GitHub",
      link: "https://github.com/Freyja96"
    }
  ]

  changeMode(){
    this.isDark = !this.isDark

    if(this.isDark){
      this.btnDarkMode = faSun
    } else {
      this.btnDarkMode = faMoon
    }
  }
}

