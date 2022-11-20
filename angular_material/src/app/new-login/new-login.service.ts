import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class NewLoginService {
  constructor(private apollo: Apollo) {}

  getDataLogin(loginForm) {
    return this.apollo.mutate({
      mutation: gql`
        mutation Login($loginForm: userParams) {
          Login(data: $loginForm) {
            message
            token
            user {
              usertype {
                name
                slug
                view
              }
            }
          }
        }
      `,
      variables: { loginForm },
    });
  }
}
