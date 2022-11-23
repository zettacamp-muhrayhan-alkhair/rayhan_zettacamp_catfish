import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  getPublishRecipes() {
    return this.apollo.query({
      query: gql`
        query GetAllrecipes {
          GetAllrecipes(data: { published: "Publish" }) {
            message
            data {
              recipe_data {
                _id
                link_recipe
                recipe_name
                published
                status
                ingredients {
                  ingredient_id {
                    name
                    stock
                    status
                    available
                  }
                }
                link_recipe
                price
                status
              }
              info_page {
                count
              }
            }
          }
        }
      `,
      fetchPolicy: 'network-only',
    });
  }

  createTransaction(menu: any) {
    menu.recipe_id = menu._id;
    delete menu._id;
    menu = [menu];
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
