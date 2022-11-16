import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class StockManagementService {
  constructor(private apollo: Apollo) {}

  getAllIngredients() {
    return this.apollo.watchQuery({
      query: gql`
        query GetAllIngredients {
          GetAllIngredients(data: {}) {
            message
            data {
              _id
              name
              stock
              status
              available
            }
          }
        }
      `,
    });
  }

  getOneIngredient() {
    const _id = '';
    return this.apollo.query({
      query: gql`
       query GetOneIngredient(data: {_id: $_id}) {
        message,
        data{
           _id
            name
            status 
            stock
            available
        }
      }
    `,
      variables: { _id },
    });
  }

  createIngredient(ingredient: any) {
    const name = ingredient.name;
    const stock = Number(ingredient.stock);
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateIngredient($name: String, $stock: Int) {
          CreateIngredient(data: { name: $name, stock: $stock }) {
            message
            data {
              _id
              name
              stock
              status
              available
            }
          }
        }
      `,
      variables: { name, stock },
    });
  }

  updateIngredient(newIngredient: any) {
    const _id = newIngredient._id;
    const name = newIngredient.name;
    const stock = Number(newIngredient.stock);
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateIngredient($_id: ID, $name: String, $stock: Int) {
          CreateIngredient(data: { _id: $_id, name: $name, stock: $stock }) {
            message
            userId
            data {
              _id
              name
              stock
              status
              available
            }
          }
        }
      `,
      variables: { _id, name, stock },
    });
  }

  deleteIngredient(ingredient: any) {
    const _id = ingredient._id;
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteIngredient($_id: ID) {
          DeleteIngredient(data: { _id: $_id }) {
            message
            data {
              _id
              name
              stock
              status
              available
            }
          }
        }
      `,
      variables: { _id },
    });
  }
}
