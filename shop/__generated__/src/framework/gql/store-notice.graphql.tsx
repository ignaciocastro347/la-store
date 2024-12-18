/* 10681b666b9844774c2a2f50b3a3c3d71dd91d4a
 * This file is automatically generated by graphql-let. */

import * as Types from '../../../__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StoreNoticePartsFragment = { __typename?: 'StoreNotice', id: string, priority: Types.StoreNoticePriority, notice: string, description?: string | null, effective_from?: string | null, expired_at: string, type?: Types.StoreNoticeType | null, created_by?: string | null, updated_by?: string | null, created_at?: any | null, updated_at?: any | null, is_read?: boolean | null, creator_role?: string | null, creator?: { __typename?: 'User', id: string, name: string, permissions: Array<{ __typename?: 'Permissions', id: string, name: string }> } | null, users?: Array<{ __typename?: 'User', id: string, name: string, email: string }> | null, shops?: Array<{ __typename?: 'Shop', id: string, owner_id: number, name?: string | null, slug?: string | null }> | null, read_status?: { __typename?: 'StoreNoticeRead', id?: string | null, name?: string | null, email?: string | null, pivot?: { __typename?: 'StoreNoticeUserPivot', store_notice_id?: string | null, user_id?: string | null, is_read: boolean } | null } | null };

export type StoreNoticesQueryVariables = Types.Exact<{
  text?: Types.InputMaybe<Types.Scalars['String']['input']>;
  shop_id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  language?: Types.InputMaybe<Types.Scalars['String']['input']>;
  orderBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortedBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first: Types.Scalars['Int']['input'];
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  search?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type StoreNoticesQuery = { __typename?: 'Query', storeNotices: { __typename?: 'StoreNoticesPaginator', data: Array<{ __typename?: 'StoreNotice', id: string, priority: Types.StoreNoticePriority, notice: string, description?: string | null, effective_from?: string | null, expired_at: string, type?: Types.StoreNoticeType | null, created_by?: string | null, updated_by?: string | null, created_at?: any | null, updated_at?: any | null, is_read?: boolean | null, creator_role?: string | null, creator?: { __typename?: 'User', id: string, name: string, permissions: Array<{ __typename?: 'Permissions', id: string, name: string }> } | null, users?: Array<{ __typename?: 'User', id: string, name: string, email: string }> | null, shops?: Array<{ __typename?: 'Shop', id: string, owner_id: number, name?: string | null, slug?: string | null }> | null, read_status?: { __typename?: 'StoreNoticeRead', id?: string | null, name?: string | null, email?: string | null, pivot?: { __typename?: 'StoreNoticeUserPivot', store_notice_id?: string | null, user_id?: string | null, is_read: boolean } | null } | null }>, paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number } } };

export type PaginatorPartsFragment = { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number };

export const StoreNoticePartsFragmentDoc = gql`
    fragment StoreNoticeParts on StoreNotice {
  id
  priority
  notice
  description
  effective_from
  expired_at
  type
  created_by
  updated_by
  created_at
  updated_at
  is_read
  creator_role
  creator {
    id
    name
    permissions {
      id
      name
    }
  }
  users {
    id
    name
    email
  }
  shops {
    id
    owner_id
    name
    slug
  }
  read_status {
    id
    name
    email
    pivot {
      store_notice_id
      user_id
      is_read
    }
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
export const StoreNoticesDocument = gql`
    query StoreNotices($text: String, $shop_id: ID, $id: ID, $language: String, $orderBy: String, $sortedBy: String, $first: Int!, $page: Int, $search: String) {
  storeNotices(
    text: $text
    shop_id: $shop_id
    id: $id
    sortedBy: $sortedBy
    language: $language
    orderBy: $orderBy
    first: $first
    page: $page
    search: $search
  ) {
    data {
      ...StoreNoticeParts
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${StoreNoticePartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;

/**
 * __useStoreNoticesQuery__
 *
 * To run a query within a React component, call `useStoreNoticesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreNoticesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreNoticesQuery({
 *   variables: {
 *      text: // value for 'text'
 *      shop_id: // value for 'shop_id'
 *      id: // value for 'id'
 *      language: // value for 'language'
 *      orderBy: // value for 'orderBy'
 *      sortedBy: // value for 'sortedBy'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useStoreNoticesQuery(baseOptions: Apollo.QueryHookOptions<StoreNoticesQuery, StoreNoticesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoreNoticesQuery, StoreNoticesQueryVariables>(StoreNoticesDocument, options);
      }
export function useStoreNoticesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoreNoticesQuery, StoreNoticesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoreNoticesQuery, StoreNoticesQueryVariables>(StoreNoticesDocument, options);
        }
export function useStoreNoticesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StoreNoticesQuery, StoreNoticesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StoreNoticesQuery, StoreNoticesQueryVariables>(StoreNoticesDocument, options);
        }
export type StoreNoticesQueryHookResult = ReturnType<typeof useStoreNoticesQuery>;
export type StoreNoticesLazyQueryHookResult = ReturnType<typeof useStoreNoticesLazyQuery>;
export type StoreNoticesSuspenseQueryHookResult = ReturnType<typeof useStoreNoticesSuspenseQuery>;
export type StoreNoticesQueryResult = Apollo.QueryResult<StoreNoticesQuery, StoreNoticesQueryVariables>;