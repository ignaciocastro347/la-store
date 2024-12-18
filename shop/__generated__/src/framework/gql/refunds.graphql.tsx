/* 60e9b1b06db96f156ddc6ee384dbd49feb944b4a
 * This file is automatically generated by graphql-let. */

import * as Types from '../../../__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RefundsQueryVariables = Types.Exact<{
  orderBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortedBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  shop_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  order_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  customer_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type RefundsQuery = { __typename?: 'Query', refunds: { __typename?: 'RefundPaginator', data: Array<{ __typename?: 'Refund', id: string, title: string, amount: string, status?: Types.RefundStatus | null, created_at?: any | null, updated_at?: any | null, order?: { __typename?: 'Order', tracking_number: string } | null }>, paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number } } };

export type PaginatorPartsFragment = { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number };

export type RefundReasonsQueryVariables = Types.Exact<{
  search?: Types.InputMaybe<Types.Scalars['String']['input']>;
  orderBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortedBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  language?: Types.InputMaybe<Types.Scalars['String']['input']>;
  searchJoin?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type RefundReasonsQuery = { __typename?: 'Query', refundReasons: { __typename?: 'RefundReasonsPaginator', data: Array<{ __typename?: 'RefundReason', id: string, name?: string | null, slug?: string | null }>, paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number } } };

export type CreateRefundMutationVariables = Types.Exact<{
  input: Types.CreateRefundInput;
}>;


export type CreateRefundMutation = { __typename?: 'Mutation', createRefund: { __typename?: 'Refund', id: string, title: string, description: string, images?: Array<{ __typename?: 'Attachment', thumbnail?: string | null, original?: string | null, id?: string | null }> | null } };

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
export const RefundsDocument = gql`
    query Refunds($orderBy: String, $sortedBy: String, $shop_id: Int, $order_id: Int, $customer_id: Int, $first: Int = 10, $page: Int) {
  refunds(
    orderBy: $orderBy
    sortedBy: $sortedBy
    shop_id: $shop_id
    order_id: $order_id
    customer_id: $customer_id
    first: $first
    page: $page
  ) {
    data {
      id
      title
      amount
      status
      order {
        tracking_number
      }
      created_at
      updated_at
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${PaginatorPartsFragmentDoc}`;

/**
 * __useRefundsQuery__
 *
 * To run a query within a React component, call `useRefundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefundsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      sortedBy: // value for 'sortedBy'
 *      shop_id: // value for 'shop_id'
 *      order_id: // value for 'order_id'
 *      customer_id: // value for 'customer_id'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useRefundsQuery(baseOptions?: Apollo.QueryHookOptions<RefundsQuery, RefundsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RefundsQuery, RefundsQueryVariables>(RefundsDocument, options);
      }
export function useRefundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RefundsQuery, RefundsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RefundsQuery, RefundsQueryVariables>(RefundsDocument, options);
        }
export function useRefundsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RefundsQuery, RefundsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RefundsQuery, RefundsQueryVariables>(RefundsDocument, options);
        }
export type RefundsQueryHookResult = ReturnType<typeof useRefundsQuery>;
export type RefundsLazyQueryHookResult = ReturnType<typeof useRefundsLazyQuery>;
export type RefundsSuspenseQueryHookResult = ReturnType<typeof useRefundsSuspenseQuery>;
export type RefundsQueryResult = Apollo.QueryResult<RefundsQuery, RefundsQueryVariables>;
export const RefundReasonsDocument = gql`
    query RefundReasons($search: String, $orderBy: String, $sortedBy: String, $language: String, $searchJoin: String, $first: Int = 15, $page: Int) {
  refundReasons(
    search: $search
    orderBy: $orderBy
    sortedBy: $sortedBy
    language: $language
    searchJoin: $searchJoin
    first: $first
    page: $page
  ) {
    data {
      id
      name
      slug
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${PaginatorPartsFragmentDoc}`;

/**
 * __useRefundReasonsQuery__
 *
 * To run a query within a React component, call `useRefundReasonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefundReasonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefundReasonsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      orderBy: // value for 'orderBy'
 *      sortedBy: // value for 'sortedBy'
 *      language: // value for 'language'
 *      searchJoin: // value for 'searchJoin'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useRefundReasonsQuery(baseOptions?: Apollo.QueryHookOptions<RefundReasonsQuery, RefundReasonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RefundReasonsQuery, RefundReasonsQueryVariables>(RefundReasonsDocument, options);
      }
export function useRefundReasonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RefundReasonsQuery, RefundReasonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RefundReasonsQuery, RefundReasonsQueryVariables>(RefundReasonsDocument, options);
        }
export function useRefundReasonsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RefundReasonsQuery, RefundReasonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RefundReasonsQuery, RefundReasonsQueryVariables>(RefundReasonsDocument, options);
        }
export type RefundReasonsQueryHookResult = ReturnType<typeof useRefundReasonsQuery>;
export type RefundReasonsLazyQueryHookResult = ReturnType<typeof useRefundReasonsLazyQuery>;
export type RefundReasonsSuspenseQueryHookResult = ReturnType<typeof useRefundReasonsSuspenseQuery>;
export type RefundReasonsQueryResult = Apollo.QueryResult<RefundReasonsQuery, RefundReasonsQueryVariables>;
export const CreateRefundDocument = gql`
    mutation CreateRefund($input: CreateRefundInput!) {
  createRefund(input: $input) {
    id
    title
    description
    images {
      thumbnail
      original
      id
    }
  }
}
    `;
export type CreateRefundMutationFn = Apollo.MutationFunction<CreateRefundMutation, CreateRefundMutationVariables>;

/**
 * __useCreateRefundMutation__
 *
 * To run a mutation, you first call `useCreateRefundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRefundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRefundMutation, { data, loading, error }] = useCreateRefundMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRefundMutation(baseOptions?: Apollo.MutationHookOptions<CreateRefundMutation, CreateRefundMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRefundMutation, CreateRefundMutationVariables>(CreateRefundDocument, options);
      }
export type CreateRefundMutationHookResult = ReturnType<typeof useCreateRefundMutation>;
export type CreateRefundMutationResult = Apollo.MutationResult<CreateRefundMutation>;
export type CreateRefundMutationOptions = Apollo.BaseMutationOptions<CreateRefundMutation, CreateRefundMutationVariables>;