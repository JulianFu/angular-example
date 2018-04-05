import {Component} from '@angular/core';
import {GitHubUserService} from "./github.service";
import {githubUser} from "./gitHubUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Our Github user App';

  /**
   * the github user from service
   */
  public gitHubUser: githubUser;


  /**
   * Username which should be checked on github. As an example there is an existing username
   * @type {string}
   */
  public username = "julianfu";

  constructor(private gitHubUserServiceService: GitHubUserService) {
  }

  /**
   * Called if the button is clicked
   */
  onButtonGitHubUserClicked() {

    this.gitHubUserServiceService.getGitHub(this.username).then(res => {
      console.log(res);// for debug purposes

      this.gitHubUser = res;

    });

  }


}
