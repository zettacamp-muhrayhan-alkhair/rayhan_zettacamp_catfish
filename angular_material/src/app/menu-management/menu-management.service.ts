import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MenuManagementService {
  constructor(private apollo: Apollo) {}

  getAllIngredients() {
    return this.apollo.watchQuery({
      query: gql`
        query GetAllIngredients {
          GetAllIngredients(data: {}) {
            message
            data {
              ingredient_data {
                _id
                name
                stock
                status
                available
              }
              info_page {
                count
              }
            }
          }
        }
      `,
    });
  }

  getAllRecipes() {
    return this.apollo.watchQuery({
      query: gql`
        query GetAllrecipes {
          GetAllrecipes(data: {}) {
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
                    _id
                    name
                    stock
                    status
                    available
                  }
                  stock_used
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
    });
  }

  getAllRecipesWithPage(inputLimit, inputPage) {
    let limit: Number;
    let page: Number;
    if (!inputLimit || !inputPage) {
      limit = inputLimit;
      page = 1;
    } else {
      limit = inputLimit;
      page = inputPage + 1;
    }
    return this.apollo.watchQuery({
      query: gql`
        query GetAllrecipes($limit: Int, $page: Int) {
          GetAllrecipes(data: { limit: $limit, page: $page }) {
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
                    _id
                    name
                    stock
                    status
                    available
                  }
                  stock_used
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
      variables: { limit, page },
    });
  }

  getPublishRecipes() {
    return this.apollo.watchQuery({
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
    });
  }

  getOneRecipe(element: any) {
    const _id = element._id;
    return this.apollo.query({
      query: gql`
        query GetOneRecipe($_id: ID) {
          GetOneRecipe(data: { _id: $_id }) {
            message
            data {
              _id
              recipe_name
              status
              published
              ingredients {
                ingredient_id {
                  _id
                  name
                  stock
                }
                stock_used
              }
            }
          }
        }
      `,
      variables: { _id },
    });
  }

  deleteIngredientUpdateRecipe(element: any, ingredientId: any) {
    const _id = element._id;
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateRecipe($_id: ID, $ingredientId: [ID]) {
          UpdateRecipe(data: { _id: $_id, ingredient_id: $ingredientId }) {
            message
            data {
              _id
              recipe_name
              status
              published
              ingredients {
                ingredient_id {
                  name
                  stock
                }
                stock_used
              }
            }
          }
        }
      `,
      variables: {
        _id,
        ingredientId,
      },
    });
  }

  createRecipe(element: any) {
    const recipe_name = element.recipe_name;
    const link_recipe = element.link_recipe;
    const price = Number(element.price);
    const ingredients = element.ingredients;
    for (let ingredient of ingredients) {
      ingredient.stock_used = Number(ingredient.stock_used);
    }
    const ingredient_id = element.ingredients.ingredient_id;
    return this.apollo
      .mutate({
        mutation: gql`
          mutation CreateRecipe(
            $recipe_name: String
            $link_recipe: String
            $price: Int
            $ingredients: [recipeIngredientsParams]
          ) {
            CreateRecipe(
              data: {
                recipe_name: $recipe_name
                link_recipe: $link_recipe
                price: $price
                ingredients: $ingredients
              }
            ) {
              message
              data {
                _id
                recipe_name
                status
                published
                ingredients {
                  ingredient_id {
                    name
                    stock
                  }
                  stock_used
                }
              }
            }
          }
        `,
        variables: { recipe_name, link_recipe, price, ingredients },
      })
      .subscribe((data: any) => {
        Swal.fire({
          title: 'Recipe Added',
          icon: 'success',
          text: data.data.CreateRecipe.message,
        });
      });
  }

  updateRecipe(element: any) {
    const published = element.published;
    const _id = element._id;
    const recipe_name = element.recipe_name;
    const link_recipe = element.link_recipe;
    const price = Number(element.price);
    const ingredients = element.ingredients;
    for (let ingredient of ingredients) {
      ingredient.stock_used = Number(ingredient.stock_used);
    }
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateRecipe(
          $_id: ID
          $recipe_name: String
          $link_recipe: String
          $price: Int
          $ingredients: [recipeIngredientsParams]
          $published: String
        ) {
          UpdateRecipe(
            data: {
              _id: $_id
              recipe_name: $recipe_name
              link_recipe: $link_recipe
              price: $price
              ingredients: $ingredients
              published: $published
            }
          ) {
            message
            data {
              _id
              recipe_name
              status
              published
              ingredients {
                ingredient_id {
                  name
                  stock
                }
                stock_used
              }
            }
          }
        }
      `,
      variables: {
        _id,
        recipe_name,
        link_recipe,
        price,
        ingredients,
        published,
      },
    });
  }

  updatePublished(element: any) {
    const published = element.published;
    const _id = element._id;
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateRecipe($_id: ID, $published: String) {
          UpdateRecipe(data: { _id: $_id, published: $published }) {
            message
            data {
              _id
              recipe_name
              status
              published
              ingredients {
                ingredient_id {
                  name
                  stock
                }
                stock_used
              }
            }
          }
        }
      `,
      variables: {
        _id,
        published,
      },
    });
  }

  deleteRecipe(element: any) {
    const _id = element._id;
    return this.apollo
      .mutate({
        mutation: gql`
          mutation DeleteRecipe($_id: ID) {
            DeleteRecipe(data: { _id: $_id }) {
              message
              data {
                _id
                recipe_name
                status
                published
                ingredients {
                  ingredient_id {
                    name
                    stock
                  }
                  stock_used
                }
              }
            }
          }
        `,
        variables: { _id },
      })
      .subscribe(
        (data: any) => {
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: data.data.DeleteRecipe.data.message,
          });
        },
        (err) =>
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message,
          })
      );
  }
}
