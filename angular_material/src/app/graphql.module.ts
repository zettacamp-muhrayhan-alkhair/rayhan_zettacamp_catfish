import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const uri = environment.apiUrl; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({
      uri,
      headers: new HttpHeaders().set(
        'Authorization',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZlYzVjMmNlNjM1YjJmYjZhODFmMmQiLCJlbWFpbCI6Im0ubXVnbmllcjJAeW9wbWFpbC5jb20iLCJpYXQiOjE2Njc4Nzk4NTUsImV4cCI6MTY2Nzk2NjI1NX0.j7OyVCCc0Up2VXwLrXCGbDoH0XtoTULGWBrdthojIyQ'
      ),
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
