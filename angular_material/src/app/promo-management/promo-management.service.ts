import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

interface ICreateData {
  title: string;
  sub_title: string;
  ref: string;
  description: string;
}

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
    console.log(valueForm);

    return this.apollo.mutate({
      mutation: gql`
        mutation (
          $ref: String
          $title: String
          $sub_title: String
          $description: String
        ) {
          CreatePromo(
            promo_input: {
              ref: $ref
              title: $title
              sub_title: $sub_title
              description: $description
            }
          ) {
            _id
          }
        }
      `,
      variables: [title, sub_title, ref, description],
    });
  }

  getPromos() {
    return this.apollo.query({
      query: gql`
        query {
          GetAllPromos(pagination: { limit: 1000, page: 0 }) {
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
