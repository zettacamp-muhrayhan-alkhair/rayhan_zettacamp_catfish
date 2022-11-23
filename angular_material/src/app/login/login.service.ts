import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apollo: Apollo) {}

  getAuthorization(value: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation Login($value: userParams) {
          Login(data: $value) {
            message
            token
            user {
              role
              usertype {
                name
                slug
                view
              }
            }
          }
        }
      `,
      variables: { value },
    });
  }
}
