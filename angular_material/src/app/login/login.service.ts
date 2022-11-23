import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apollo: Apollo) {}

  getToken(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation Login($data: userParams) {
          Login(data: $data) {
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
      variables: { data },
    });
  }
}
