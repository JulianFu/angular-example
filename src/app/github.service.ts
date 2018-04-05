import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class GitHubUserService {

  constructor(private http: HttpClient) {
  }


  getGitHub(name: string): Promise<any> {

    return new Promise((resolve, reject) => {

      let url = 'https://api.github.com/users/' + name;

      this.http.get(url).subscribe((data) => {
        resolve(data)

      });

    });

  }

}
