/* 6c3ce85dab4eb222eff52b6df3b2ee66ebf3e07a
 * This file is automatically generated by graphql-let. */

import * as Types from '../../../__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FlashSalesQueryVariables = Types.Exact<{
  search?: Types.InputMaybe<Types.Scalars['String']['input']>;
  orderBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortedBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  language?: Types.InputMaybe<Types.Scalars['String']['input']>;
  searchJoin?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type FlashSalesQuery = { __typename?: 'Query', flashSales: { __typename?: 'FlashSalePaginator', data: Array<{ __typename?: 'FlashSale', id: string, title?: string | null, slug?: string | null, description?: string | null, start_date?: string | null, end_date?: string | null, sale_status?: boolean | null, type?: string | null, rate?: number | null, language?: string | null, products?: Array<{ __typename?: 'Product', id: string, name: string, slug: string, product_type: Types.ProductType, price?: number | null, sale_price?: number | null, min_price?: number | null, max_price?: number | null, quantity: number, unit: string, sku?: string | null, is_digital?: boolean | null, is_external?: boolean | null, ratings?: number | null, status: Types.ProductStatus, external_product_url?: string | null, external_product_button_text?: string | null, in_flash_sale?: number | null, type?: { __typename?: 'Type', id: string, name?: string | null, slug?: string | null, settings?: { __typename?: 'TypeSettings', productCard?: string | null } | null } | null, image?: { __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null } | null, video?: Array<{ __typename?: 'Video', url: string }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null }> | null, sale_builder?: { __typename?: 'SaleBuilder', data_type?: string | null, product_ids?: Array<string> | null } | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, cover_image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null }>, paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number } } };

export type FlashSalePartsFragment = { __typename?: 'FlashSale', id: string, title?: string | null, slug?: string | null, description?: string | null, start_date?: string | null, end_date?: string | null, sale_status?: boolean | null, type?: string | null, rate?: number | null, language?: string | null, sale_builder?: { __typename?: 'SaleBuilder', data_type?: string | null, product_ids?: Array<string> | null } | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, cover_image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null };

export type ProductPartsFragment = { __typename?: 'Product', id: string, name: string, slug: string, product_type: Types.ProductType, price?: number | null, sale_price?: number | null, min_price?: number | null, max_price?: number | null, quantity: number, unit: string, sku?: string | null, is_digital?: boolean | null, is_external?: boolean | null, ratings?: number | null, status: Types.ProductStatus, external_product_url?: string | null, external_product_button_text?: string | null, in_flash_sale?: number | null, type?: { __typename?: 'Type', id: string, name?: string | null, slug?: string | null, settings?: { __typename?: 'TypeSettings', productCard?: string | null } | null } | null, image?: { __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null } | null, video?: Array<{ __typename?: 'Video', url: string }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null };

export type PaginatorPartsFragment = { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number };

export type FlashSaleQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  slug?: Types.InputMaybe<Types.Scalars['String']['input']>;
  language?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type FlashSaleQuery = { __typename?: 'Query', flashSale: { __typename?: 'FlashSale', id: string, title?: string | null, slug?: string | null, description?: string | null, start_date?: string | null, end_date?: string | null, sale_status?: boolean | null, type?: string | null, rate?: number | null, language?: string | null, products?: Array<{ __typename?: 'Product', id: string, name: string, slug: string, product_type: Types.ProductType, price?: number | null, sale_price?: number | null, min_price?: number | null, max_price?: number | null, quantity: number, unit: string, sku?: string | null, is_digital?: boolean | null, is_external?: boolean | null, ratings?: number | null, status: Types.ProductStatus, external_product_url?: string | null, external_product_button_text?: string | null, in_flash_sale?: number | null, type?: { __typename?: 'Type', id: string, name?: string | null, slug?: string | null, settings?: { __typename?: 'TypeSettings', productCard?: string | null } | null } | null, image?: { __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null } | null, video?: Array<{ __typename?: 'Video', url: string }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null }> | null, sale_builder?: { __typename?: 'SaleBuilder', data_type?: string | null, product_ids?: Array<string> | null } | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, cover_image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null } };

export type FlashSaleProductBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type FlashSaleProductBySlugQuery = { __typename?: 'Query', productsByFlashSale: { __typename?: 'ProductPaginator', data: Array<{ __typename?: 'Product', id: string, name: string, slug: string, product_type: Types.ProductType, price?: number | null, sale_price?: number | null, min_price?: number | null, max_price?: number | null, quantity: number, unit: string, sku?: string | null, is_digital?: boolean | null, is_external?: boolean | null, ratings?: number | null, status: Types.ProductStatus, external_product_url?: string | null, external_product_button_text?: string | null, in_flash_sale?: number | null, type?: { __typename?: 'Type', id: string, name?: string | null, slug?: string | null, settings?: { __typename?: 'TypeSettings', productCard?: string | null } | null } | null, image?: { __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null } | null, video?: Array<{ __typename?: 'Video', url: string }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null }>, paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number } } };

export const FlashSalePartsFragmentDoc = gql`
    fragment FlashSaleParts on FlashSale {
  id
  title
  slug
  description
  start_date
  end_date
  sale_status
  type
  rate
  language
  sale_builder {
    data_type
    product_ids
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
export const ProductPartsFragmentDoc = gql`
    fragment ProductParts on Product {
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
  image {
    id
    thumbnail
    original
  }
  video {
    url
  }
  tags {
    id
    name
    slug
  }
  status
  external_product_url
  external_product_button_text
  in_flash_sale
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
export const FlashSalesDocument = gql`
    query FlashSales($search: String, $orderBy: String, $sortedBy: String, $language: String, $searchJoin: String, $first: Int = 15, $page: Int) {
  flashSales(
    search: $search
    orderBy: $orderBy
    sortedBy: $sortedBy
    language: $language
    searchJoin: $searchJoin
    first: $first
    page: $page
  ) {
    data {
      ...FlashSaleParts
      products {
        ...ProductParts
      }
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${FlashSalePartsFragmentDoc}
${ProductPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;

/**
 * __useFlashSalesQuery__
 *
 * To run a query within a React component, call `useFlashSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlashSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlashSalesQuery({
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
export function useFlashSalesQuery(baseOptions?: Apollo.QueryHookOptions<FlashSalesQuery, FlashSalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlashSalesQuery, FlashSalesQueryVariables>(FlashSalesDocument, options);
      }
export function useFlashSalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlashSalesQuery, FlashSalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlashSalesQuery, FlashSalesQueryVariables>(FlashSalesDocument, options);
        }
export function useFlashSalesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FlashSalesQuery, FlashSalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FlashSalesQuery, FlashSalesQueryVariables>(FlashSalesDocument, options);
        }
export type FlashSalesQueryHookResult = ReturnType<typeof useFlashSalesQuery>;
export type FlashSalesLazyQueryHookResult = ReturnType<typeof useFlashSalesLazyQuery>;
export type FlashSalesSuspenseQueryHookResult = ReturnType<typeof useFlashSalesSuspenseQuery>;
export type FlashSalesQueryResult = Apollo.QueryResult<FlashSalesQuery, FlashSalesQueryVariables>;
export const FlashSaleDocument = gql`
    query FlashSale($id: ID, $slug: String, $language: String) {
  flashSale(id: $id, slug: $slug, language: $language) {
    ...FlashSaleParts
    products {
      ...ProductParts
    }
  }
}
    ${FlashSalePartsFragmentDoc}
${ProductPartsFragmentDoc}`;

/**
 * __useFlashSaleQuery__
 *
 * To run a query within a React component, call `useFlashSaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlashSaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlashSaleQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useFlashSaleQuery(baseOptions?: Apollo.QueryHookOptions<FlashSaleQuery, FlashSaleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlashSaleQuery, FlashSaleQueryVariables>(FlashSaleDocument, options);
      }
export function useFlashSaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlashSaleQuery, FlashSaleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlashSaleQuery, FlashSaleQueryVariables>(FlashSaleDocument, options);
        }
export function useFlashSaleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FlashSaleQuery, FlashSaleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FlashSaleQuery, FlashSaleQueryVariables>(FlashSaleDocument, options);
        }
export type FlashSaleQueryHookResult = ReturnType<typeof useFlashSaleQuery>;
export type FlashSaleLazyQueryHookResult = ReturnType<typeof useFlashSaleLazyQuery>;
export type FlashSaleSuspenseQueryHookResult = ReturnType<typeof useFlashSaleSuspenseQuery>;
export type FlashSaleQueryResult = Apollo.QueryResult<FlashSaleQuery, FlashSaleQueryVariables>;
export const FlashSaleProductBySlugDocument = gql`
    query FlashSaleProductBySlug($slug: String!, $first: Int = 15, $page: Int) {
  productsByFlashSale(slug: $slug, first: $first, page: $page) {
    data {
      ...ProductParts
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${ProductPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;

/**
 * __useFlashSaleProductBySlugQuery__
 *
 * To run a query within a React component, call `useFlashSaleProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlashSaleProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlashSaleProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useFlashSaleProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<FlashSaleProductBySlugQuery, FlashSaleProductBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlashSaleProductBySlugQuery, FlashSaleProductBySlugQueryVariables>(FlashSaleProductBySlugDocument, options);
      }
export function useFlashSaleProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlashSaleProductBySlugQuery, FlashSaleProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlashSaleProductBySlugQuery, FlashSaleProductBySlugQueryVariables>(FlashSaleProductBySlugDocument, options);
        }
export function useFlashSaleProductBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FlashSaleProductBySlugQuery, FlashSaleProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FlashSaleProductBySlugQuery, FlashSaleProductBySlugQueryVariables>(FlashSaleProductBySlugDocument, options);
        }
export type FlashSaleProductBySlugQueryHookResult = ReturnType<typeof useFlashSaleProductBySlugQuery>;
export type FlashSaleProductBySlugLazyQueryHookResult = ReturnType<typeof useFlashSaleProductBySlugLazyQuery>;
export type FlashSaleProductBySlugSuspenseQueryHookResult = ReturnType<typeof useFlashSaleProductBySlugSuspenseQuery>;
export type FlashSaleProductBySlugQueryResult = Apollo.QueryResult<FlashSaleProductBySlugQuery, FlashSaleProductBySlugQueryVariables>;