import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromoManagementService {
  promos = new BehaviorSubject<any>([]);
  promos$ = this.promos.asObservable();

  constructor(private apollo: Apollo) {}

  createPromo(valueForm: any) {
    const title = valueForm.title;
    const sub_title = valueForm.sub_title;
    const ref = valueForm.ref;
    const description = valueForm.description;
    const image_url = valueForm.image_url;
    console.log(valueForm);

    return this.apollo.mutate({
      mutation: gql`
        mutation CreatePromo(
          $ref: String
          $title: String
          $sub_title: String
          $description: String
          $image_url: String
        ) {
          CreatePromo(
            promo_input: {
              title: $title
              sub_title: $sub_title
              ref: $ref
              description: $description
              image_url: $image_url
            }
          ) {
            _id
            ref
            image_url
            description
            title
            sub_title
          }
        }
      `,
      variables: { title, sub_title, ref, description, image_url },
    });
  }

  getPromos() {
    return this.apollo.query({
      query: gql`
        query {
          GetAllPromos(pagination: { limit: 20, page: 0 }) {
            _id
            image_url
            title
            sub_title
            ref
            description
          }
        }
      `,
    });
  }
}
