import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  getAllMenus() {
    return this.apollo.query({
      query: gql`
        query {
          MenuRecipe {
            message
            data {
              recipe_name
              ingredients {
                ingredient_id {
                  name
                }
              }
              link_recipe
              status
            }
            permit {
              name
              view
            }
          }
        }
      `,
    });
  }
}
