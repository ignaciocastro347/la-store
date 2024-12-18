/* b5f7d8887ec87d2fa57c17169c6fb41408d4fcbb
 * This file is automatically generated by graphql-let. */

import * as Types from '../../../__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type WishlistsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type WishlistsQuery = { __typename?: 'Query', wishlists: { __typename?: 'ProductPaginator', data: Array<{ __typename?: 'Product', id: string, name: string, slug: string, product_type: Types.ProductType, price?: number | null, sale_price?: number | null, min_price?: number | null, max_price?: number | null, quantity: number, unit: string, sku?: string | null, is_digital?: boolean | null, is_external?: boolean | null, ratings?: number | null, status: Types.ProductStatus, language?: string | null, type?: { __typename?: 'Type', id: string, name?: string | null, slug?: string | null, settings?: { __typename?: 'TypeSettings', productCard?: string | null } | null } | null, shop?: { __typename?: 'Shop', name?: string | null, slug?: string | null } | null, image?: { __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null, variations?: Array<{ __typename?: 'AttributeValue', id: string, value: string, meta?: string | null, attribute: { __typename?: 'Attribute', id: string, name: string, slug: string } }> | null, variation_options?: Array<{ __typename?: 'Variation', id: string, title: string, price: number, sale_price?: number | null, quantity: number, is_disable: boolean, image?: { __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null } | null, options: Array<{ __typename?: 'VariationOption', name: string, value: string }> }> | null }>, paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number } } };

export type PaginatorPartsFragment = { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number };

export type InWishlistQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type InWishlistQuery = { __typename?: 'Query', in_wishlist: boolean };

export type ToggleWishlistMutationVariables = Types.Exact<{
  input: Types.CreateWishlistInput;
}>;


export type ToggleWishlistMutation = { __typename?: 'Mutation', toggleWishlist: boolean };

export type RemoveFromWishlistMutationVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;


export type RemoveFromWishlistMutation = { __typename?: 'Mutation', deleteWishlist: boolean };

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
export const WishlistsDocument = gql`
    query Wishlists($first: Int = 15, $page: Int) {
  wishlists(first: $first, page: $page) {
    data {
      id
      name
      slug
      type {
        id
        name
        slug
        settings {
          productCard
        }
      }
      product_type
      price
      sale_price
      min_price
      max_price
      quantity
      unit
      sku
      is_digital
      is_external
      ratings
      status
      language
      shop {
        name
        slug
      }
      image {
        id
        thumbnail
        original
      }
      tags {
        id
        name
        slug
      }
      variations {
        id
        value
        meta
        attribute {
          id
          name
          slug
        }
      }
      variation_options {
        id
        title
        price
        sale_price
        quantity
        is_disable
        image {
          id
          thumbnail
          original
        }
        options {
          name
          value
        }
      }
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${PaginatorPartsFragmentDoc}`;

/**
 * __useWishlistsQuery__
 *
 * To run a query within a React component, call `useWishlistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWishlistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWishlistsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useWishlistsQuery(baseOptions?: Apollo.QueryHookOptions<WishlistsQuery, WishlistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WishlistsQuery, WishlistsQueryVariables>(WishlistsDocument, options);
      }
export function useWishlistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WishlistsQuery, WishlistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WishlistsQuery, WishlistsQueryVariables>(WishlistsDocument, options);
        }
export function useWishlistsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<WishlistsQuery, WishlistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WishlistsQuery, WishlistsQueryVariables>(WishlistsDocument, options);
        }
export type WishlistsQueryHookResult = ReturnType<typeof useWishlistsQuery>;
export type WishlistsLazyQueryHookResult = ReturnType<typeof useWishlistsLazyQuery>;
export type WishlistsSuspenseQueryHookResult = ReturnType<typeof useWishlistsSuspenseQuery>;
export type WishlistsQueryResult = Apollo.QueryResult<WishlistsQuery, WishlistsQueryVariables>;
export const InWishlistDocument = gql`
    query InWishlist($id: ID!) {
  in_wishlist(product_id: $id)
}
    `;

/**
 * __useInWishlistQuery__
 *
 * To run a query within a React component, call `useInWishlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useInWishlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInWishlistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInWishlistQuery(baseOptions: Apollo.QueryHookOptions<InWishlistQuery, InWishlistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InWishlistQuery, InWishlistQueryVariables>(InWishlistDocument, options);
      }
export function useInWishlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InWishlistQuery, InWishlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InWishlistQuery, InWishlistQueryVariables>(InWishlistDocument, options);
        }
export function useInWishlistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<InWishlistQuery, InWishlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InWishlistQuery, InWishlistQueryVariables>(InWishlistDocument, options);
        }
export type InWishlistQueryHookResult = ReturnType<typeof useInWishlistQuery>;
export type InWishlistLazyQueryHookResult = ReturnType<typeof useInWishlistLazyQuery>;
export type InWishlistSuspenseQueryHookResult = ReturnType<typeof useInWishlistSuspenseQuery>;
export type InWishlistQueryResult = Apollo.QueryResult<InWishlistQuery, InWishlistQueryVariables>;
export const ToggleWishlistDocument = gql`
    mutation ToggleWishlist($input: CreateWishlistInput!) {
  toggleWishlist(input: $input)
}
    `;
export type ToggleWishlistMutationFn = Apollo.MutationFunction<ToggleWishlistMutation, ToggleWishlistMutationVariables>;

/**
 * __useToggleWishlistMutation__
 *
 * To run a mutation, you first call `useToggleWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleWishlistMutation, { data, loading, error }] = useToggleWishlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useToggleWishlistMutation(baseOptions?: Apollo.MutationHookOptions<ToggleWishlistMutation, ToggleWishlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleWishlistMutation, ToggleWishlistMutationVariables>(ToggleWishlistDocument, options);
      }
export type ToggleWishlistMutationHookResult = ReturnType<typeof useToggleWishlistMutation>;
export type ToggleWishlistMutationResult = Apollo.MutationResult<ToggleWishlistMutation>;
export type ToggleWishlistMutationOptions = Apollo.BaseMutationOptions<ToggleWishlistMutation, ToggleWishlistMutationVariables>;
export const RemoveFromWishlistDocument = gql`
    mutation RemoveFromWishlist($slug: String!) {
  deleteWishlist(slug: $slug)
}
    `;
export type RemoveFromWishlistMutationFn = Apollo.MutationFunction<RemoveFromWishlistMutation, RemoveFromWishlistMutationVariables>;

/**
 * __useRemoveFromWishlistMutation__
 *
 * To run a mutation, you first call `useRemoveFromWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromWishlistMutation, { data, loading, error }] = useRemoveFromWishlistMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useRemoveFromWishlistMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromWishlistMutation, RemoveFromWishlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFromWishlistMutation, RemoveFromWishlistMutationVariables>(RemoveFromWishlistDocument, options);
      }
export type RemoveFromWishlistMutationHookResult = ReturnType<typeof useRemoveFromWishlistMutation>;
export type RemoveFromWishlistMutationResult = Apollo.MutationResult<RemoveFromWishlistMutation>;
export type RemoveFromWishlistMutationOptions = Apollo.BaseMutationOptions<RemoveFromWishlistMutation, RemoveFromWishlistMutationVariables>;