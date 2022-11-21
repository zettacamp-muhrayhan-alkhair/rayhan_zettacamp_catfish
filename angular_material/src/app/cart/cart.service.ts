import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private apollo: Apollo) {}

  getAllTransaction() {
    return this.apollo.watchQuery({
      query: gql`
        query GetAllTransaction {
          GetAllTransaction(data: { typetr: "Draft", order_status: Draft }) {
            message
            data {
              transaction_data {
                _id
                total_price
                menu {
                  amount
                  note
                  recipe_id {
                    recipe_name
                    price
                  }
                }
              }
            }
          }
        }
      `,
    });
  }

  checkOut(data: any) {
    const _id = data;
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateTransaction($_id: ID) {
          UpdateTransaction(data: { _id: $_id }) {
            message
            data {
              _id
              menu {
                recipe_id {
                  recipe_name
                }
                amount
                note
              }
            }
          }
        }
      `,
      variables: { _id },
    });
  }
}
