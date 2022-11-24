import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private apollo: Apollo) {}

  getAllTransaction() {
    return this.apollo.query({
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
                    _id
                    recipe_name
                    price
                    link_recipe
                  }
                }
              }
            }
          }
        }
      `,
      fetchPolicy: 'network-only',
    });
  }

  getHistoryTransaction() {
    return this.apollo.query({
      query: gql`
        query GetAllTransaction {
          GetAllTransaction(data: { typetr: "Checkout" }) {
            message
            data {
              transaction_data {
                menu {
                  recipe_id {
                    recipe_name
                  }
                  amount
                }
                total_price
                order_status
                order_date
                user_id {
                  first_name
                  last_name
                }
              }
            }
          }
        }
      `,
      fetchPolicy: 'network-only',
    });
  }

  checkOut(data: any) {
    const _id = data;
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateTransaction($_id: ID) {
          UpdateTransaction(data: { _id: $_id, typetr: "Checkout" }) {
            message
            data {
              _id
              menu {
                recipe_id {
                  recipe_name
                  price
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

  cancelTransaction(data: any) {
    const _id = data;
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteTransaction($_id: ID) {
          DeleteTransaction(data: { _id: $_id }) {
            message
            data {
              _id
              menu {
                recipe_id {
                  recipe_name
                  price
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

  removeItem(data: any) {
    console.log(data);
    const recipe_id = data.recipe_id._id;
    const amount = data.amount;
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateTransaction($recipe_id: ID, $amount: Int) {
          UpdateTransaction(data: { recipe_id: $recipe_id, amount: $amount }) {
            message
            data {
              _id
              status
              menu {
                recipe_id {
                  _id
                  recipe_name
                }
                note
                amount
              }
              order_status
              total_price
            }
          }
        }
      `,
      variables: { recipe_id, amount },
    });
  }

  updateTransaction(data: any) {
    const recipe_id = data._id._id;
    const amount = data.amount;
    const note = data.note;
    // return data
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateTransaction(
          $recipe_id: ID
          $amount: Int
          $note: String
        ) {
          UpdateTransaction(
            data: { recipe_id: $recipe_id, amount: $amount, note: $note }
          ) {
            message
            data {
              _id
              status
              menu {
                recipe_id {
                  _id
                  recipe_name
                }
                note
                amount
              }
              order_status
              total_price
            }
          }
        }
      `,
      variables: { recipe_id, amount, note },
      fetchPolicy: 'network-only',
    });
  }
}
