import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apollo: Apollo) {}

  getToken(loginForm: any) {
    const email = loginForm.email;
    const password = loginForm.password;
    console.log('met', loginForm);
    return this.apollo.mutate({
      mutation: gql`
        mutation Login($email: String, $password: String) {
          Login(data: { email: $email, password: $password }) {
            message
            token
            user {
              usertype {
                name
                view
                slug
              }
            }
          }
        }
      `,
      variables: { email, password },
    });
  }
}
