import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class StockManagementService {
  constructor(private apollo: Apollo) {}

  getAllIngredients(): any {
    return this.apollo.watchQuery({
      query: gql`
        query GetAllIngredients {
          GetAllIngredients(data: {}) {
            message
            data {
              name
              stock
              status
              available
            }
          }
        }
      `,
    }).valueChanges;
  }

  createIngredient(ingredient: any) {
    const name = ingredient.name;
    const stock = ingredient.stock;
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateIngredient($name: String, $stock: String) {
          CreateIngredient(data: { name: $name, stock: $stock }) {
            message
            data {
              name
              stock
              status
            }
          }
        }
      `,
      variables: { name, stock },
    });
  }
}
