import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  createTransaction(menu: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateTransaction($menu: [menuFieldsParams]) {
          CreateTransaction(data: { menu: $menu }) {
            message
            data {
              status
              order_status
              menu {
                recipe_id {
                  price
                }
              }
            }
          }
        }
      `,
      variables: { menu },
    });
  }
}
