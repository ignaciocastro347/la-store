/* fec2a8f51af70f44ca2b039e5173c52cd4699b0c
 * This file is automatically generated by graphql-let. */

import * as Types from '../../../__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthorsQueryVariables = Types.Exact<{
  text?: Types.InputMaybe<Types.Scalars['String']['input']>;
  is_approved?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  orderBy?: Types.InputMaybe<Array<Types.QueryAuthorsOrderByOrderByClause> | Types.QueryAuthorsOrderByOrderByClause>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  language?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AuthorsQuery = { __typename?: 'Query', authors: { __typename?: 'AuthorPaginator', data: Array<{ __typename?: 'Author', id: string, name: string, is_approved?: boolean | null, slug?: string | null, bio?: string | null, quote?: string | null, born?: string | null, death?: string | null, languages?: string | null, socials?: Array<{ __typename?: 'ShopSocials', url?: string | null, icon?: string | null }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, cover_image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null }>, paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number } } };

export type AuthorPartsFragment = { __typename?: 'Author', id: string, name: string, is_approved?: boolean | null, slug?: string | null, bio?: string | null, quote?: string | null, born?: string | null, death?: string | null, languages?: string | null, socials?: Array<{ __typename?: 'ShopSocials', url?: string | null, icon?: string | null }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, cover_image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null };

export type PaginatorPartsFragment = { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number };

export type TopAuthorsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  language?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type TopAuthorsQuery = { __typename?: 'Query', topAuthors: Array<{ __typename?: 'Author', id: string, name: string, is_approved?: boolean | null, slug?: string | null, bio?: string | null, quote?: string | null, born?: string | null, death?: string | null, languages?: string | null, socials?: Array<{ __typename?: 'ShopSocials', url?: string | null, icon?: string | null }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, cover_image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null }> };

export type AuthorQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']['input']>;
  language?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', id: string, name: string, is_approved?: boolean | null, slug?: string | null, bio?: string | null, quote?: string | null, born?: string | null, death?: string | null, languages?: string | null, socials?: Array<{ __typename?: 'ShopSocials', url?: string | null, icon?: string | null }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, cover_image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null } };

export const AuthorPartsFragmentDoc = gql`
    fragment AuthorParts on Author {
  id
  name
  is_approved
  slug
  bio
  quote
  born
  death
  languages
  socials {
    url
    icon
  }
  image {
    id
    original
    thumbnail
  }
  cover_image {
    id
    original
    thumbnail
  }
}
    `;
export const PaginatorPartsFragmentDoc = gql`
    fragment PaginatorParts on PaginatorInfo {
  count
  currentPage
  firstItem
  hasMorePages
  lastItem
  lastPage
  perPage
  total
}
    `;
export const AuthorsDocument = gql`
    query Authors($text: String, $is_approved: Boolean, $orderBy: [QueryAuthorsOrderByOrderByClause!], $first: Int = 15, $page: Int, $language: String) {
  authors(
    text: $text
    orderBy: $orderBy
    is_approved: $is_approved
    first: $first
    page: $page
    language: $language
  ) {
    data {
      ...AuthorParts
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${AuthorPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;

/**
 * __useAuthorsQuery__
 *
 * To run a query within a React component, call `useAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorsQuery({
 *   variables: {
 *      text: // value for 'text'
 *      is_approved: // value for 'is_approved'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, options);
      }
export function useAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, options);
        }
export function useAuthorsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthorsQuery, AuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument, options);
        }
export type AuthorsQueryHookResult = ReturnType<typeof useAuthorsQuery>;
export type AuthorsLazyQueryHookResult = ReturnType<typeof useAuthorsLazyQuery>;
export type AuthorsSuspenseQueryHookResult = ReturnType<typeof useAuthorsSuspenseQuery>;
export type AuthorsQueryResult = Apollo.QueryResult<AuthorsQuery, AuthorsQueryVariables>;
export const TopAuthorsDocument = gql`
    query TopAuthors($limit: Int = 15, $language: String) {
  topAuthors(limit: $limit, language: $language) {
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;

/**
 * __useTopAuthorsQuery__
 *
 * To run a query within a React component, call `useTopAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopAuthorsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useTopAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<TopAuthorsQuery, TopAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopAuthorsQuery, TopAuthorsQueryVariables>(TopAuthorsDocument, options);
      }
export function useTopAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopAuthorsQuery, TopAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopAuthorsQuery, TopAuthorsQueryVariables>(TopAuthorsDocument, options);
        }
export function useTopAuthorsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TopAuthorsQuery, TopAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TopAuthorsQuery, TopAuthorsQueryVariables>(TopAuthorsDocument, options);
        }
export type TopAuthorsQueryHookResult = ReturnType<typeof useTopAuthorsQuery>;
export type TopAuthorsLazyQueryHookResult = ReturnType<typeof useTopAuthorsLazyQuery>;
export type TopAuthorsSuspenseQueryHookResult = ReturnType<typeof useTopAuthorsSuspenseQuery>;
export type TopAuthorsQueryResult = Apollo.QueryResult<TopAuthorsQuery, TopAuthorsQueryVariables>;
export const AuthorDocument = gql`
    query Author($slug: String, $language: String) {
  author(slug: $slug, language: $language) {
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;

/**
 * __useAuthorQuery__
 *
 * To run a query within a React component, call `useAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useAuthorQuery(baseOptions?: Apollo.QueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, options);
      }
export function useAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, options);
        }
export function useAuthorSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, options);
        }
export type AuthorQueryHookResult = ReturnType<typeof useAuthorQuery>;
export type AuthorLazyQueryHookResult = ReturnType<typeof useAuthorLazyQuery>;
export type AuthorSuspenseQueryHookResult = ReturnType<typeof useAuthorSuspenseQuery>;
export type AuthorQueryResult = Apollo.QueryResult<AuthorQuery, AuthorQueryVariables>;