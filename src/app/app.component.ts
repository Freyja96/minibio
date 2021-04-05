import { Component } from '@angular/core';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minibio';
  faSun = faSun;
  faMoon = faMoon;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  rrss=[
    {
      img: faLinkedin,
      text: "Mi perfil en LinkedIn",
      link: "https://www.linkedin.com/in/cristina-ouellette-hern%C3%A1ndez-532597b9/"
    },
    {
      img: faGithub,
      text: "Mi perfil de GitHub",
      link: "https://github.com/Freyja96"
    },
    {
      img: faTwitter,
      text:"¡También estoy en Twitter!",
      link:"https://twitter.com/CrisOH96"
    }
  ]
  changeMode(){
    this.isNight = !this.isNight

    if(this.isNight){
      this.btnNightMode = faSun
    } else {
      this.btnNightMode = faMoon
    }
    }
  }
}

//Array con objetos: imagen, párrafo y link
