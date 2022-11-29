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
              last_name
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

  createUser(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateUser($data: userParams) {
          CreateUser(data: $data) {
            message
            data {
              first_name
              last_name
              email
              password
              role
            }
          }
        }
      `,
      variables: { data },
      fetchPolicy: 'network-only',
    });
  }
}
