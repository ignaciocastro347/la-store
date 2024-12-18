/* 84c914dc5b7de10351582e4d4584a48a5241323b
 * This file is automatically generated by graphql-let. */

import * as Types from '../../../__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OrderPartsFragment = { __typename?: 'Order', id: string, tracking_number: string, customer_name?: string | null, customer_contact: string, language: string, order_status?: string | null, payment_status?: string | null, amount: number, sales_tax: number, total: number, paid_total?: number | null, payment_id?: string | null, payment_gateway: Types.PaymentGatewayType, altered_payment_gateway?: string | null, discount?: number | null, delivery_fee: number, delivery_time?: string | null, created_at?: any | null, updated_at?: any | null, note?: string | null, customer: { __typename?: 'User', name: string, email: string }, payment_intent?: { __typename?: 'PaymentIntent', id: string, order_id: string, payment_gateway: string, tracking_number: string, payment_intent_info?: { __typename?: 'PaymentIntentInfo', client_secret?: string | null, is_redirect: boolean, payment_id: string, redirect_url?: string | null, amount: string, currency: string } | null } | null, products: Array<{ __typename?: 'Product', id: string, name: string, slug: string, price?: number | null, sale_price?: number | null, created_at?: any | null, shop_id?: string | null, quantity: number, unit: string, my_review?: Array<{ __typename?: 'Review', id: string, variation_option_id?: string | null, rating: number, comment: string, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }> }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, variation_options?: Array<{ __typename?: 'Variation', id: string, title: string }> | null, pivot?: { __typename?: 'OrderProductPivot', variation_option_id?: string | null, order_quantity: number, unit_price: number, subtotal: number } | null }>, coupon?: { __typename?: 'Coupon', code?: string | null, amount?: number | null, type?: string | null, id: string } | null, billing_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, shipping_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, refund?: { __typename?: 'Refund', id: string, title: string, amount: string, status?: Types.RefundStatus | null } | null, wallet_point?: { __typename?: 'WalletPoint', id: string, amount: number } | null, reviews?: Array<{ __typename?: 'Review', id: string, comment: string, rating: number, positive_feedbacks_count?: number | null, negative_feedbacks_count?: number | null, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }>, user: { __typename?: 'User', id: string, name: string }, my_feedback?: { __typename?: 'Feedback', id: string, positive?: boolean | null, negative?: boolean | null } | null }> | null };

export type PaymentIntentPartsFragment = { __typename?: 'PaymentIntent', id: string, order_id: string, payment_gateway: string, tracking_number: string, payment_intent_info?: { __typename?: 'PaymentIntentInfo', client_secret?: string | null, is_redirect: boolean, payment_id: string, redirect_url?: string | null, amount: string, currency: string } | null };

export type ReviewPartsFragment = { __typename?: 'Review', id: string, comment: string, rating: number, positive_feedbacks_count?: number | null, negative_feedbacks_count?: number | null, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }>, user: { __typename?: 'User', id: string, name: string }, my_feedback?: { __typename?: 'Feedback', id: string, positive?: boolean | null, negative?: boolean | null } | null };

export type OrdersQueryVariables = Types.Exact<{
  tracking_number?: Types.InputMaybe<Types.Scalars['String']['input']>;
  orderBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortedBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  customer_id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  shop_id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: { __typename?: 'OrderPaginator', data: Array<{ __typename?: 'Order', id: string, tracking_number: string, customer_name?: string | null, customer_contact: string, language: string, order_status?: string | null, payment_status?: string | null, amount: number, sales_tax: number, total: number, paid_total?: number | null, payment_id?: string | null, payment_gateway: Types.PaymentGatewayType, altered_payment_gateway?: string | null, discount?: number | null, delivery_fee: number, delivery_time?: string | null, created_at?: any | null, updated_at?: any | null, note?: string | null, customer: { __typename?: 'User', name: string, email: string }, payment_intent?: { __typename?: 'PaymentIntent', id: string, order_id: string, payment_gateway: string, tracking_number: string, payment_intent_info?: { __typename?: 'PaymentIntentInfo', client_secret?: string | null, is_redirect: boolean, payment_id: string, redirect_url?: string | null, amount: string, currency: string } | null } | null, products: Array<{ __typename?: 'Product', id: string, name: string, slug: string, price?: number | null, sale_price?: number | null, created_at?: any | null, shop_id?: string | null, quantity: number, unit: string, my_review?: Array<{ __typename?: 'Review', id: string, variation_option_id?: string | null, rating: number, comment: string, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }> }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, variation_options?: Array<{ __typename?: 'Variation', id: string, title: string }> | null, pivot?: { __typename?: 'OrderProductPivot', variation_option_id?: string | null, order_quantity: number, unit_price: number, subtotal: number } | null }>, coupon?: { __typename?: 'Coupon', code?: string | null, amount?: number | null, type?: string | null, id: string } | null, billing_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, shipping_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, refund?: { __typename?: 'Refund', id: string, title: string, amount: string, status?: Types.RefundStatus | null } | null, wallet_point?: { __typename?: 'WalletPoint', id: string, amount: number } | null, reviews?: Array<{ __typename?: 'Review', id: string, comment: string, rating: number, positive_feedbacks_count?: number | null, negative_feedbacks_count?: number | null, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }>, user: { __typename?: 'User', id: string, name: string }, my_feedback?: { __typename?: 'Feedback', id: string, positive?: boolean | null, negative?: boolean | null } | null }> | null }>, paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number } } };

export type PaginatorPartsFragment = { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number };

export type OrderQueryVariables = Types.Exact<{
  tracking_number?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
}>;


export type OrderQuery = { __typename?: 'Query', order: { __typename?: 'Order', id: string, tracking_number: string, customer_name?: string | null, customer_contact: string, language: string, order_status?: string | null, payment_status?: string | null, amount: number, sales_tax: number, total: number, paid_total?: number | null, payment_id?: string | null, payment_gateway: Types.PaymentGatewayType, altered_payment_gateway?: string | null, discount?: number | null, delivery_fee: number, delivery_time?: string | null, created_at?: any | null, updated_at?: any | null, note?: string | null, children: Array<{ __typename?: 'Order', id: string, tracking_number: string, customer_name?: string | null, customer_contact: string, language: string, order_status?: string | null, payment_status?: string | null, amount: number, sales_tax: number, total: number, paid_total?: number | null, payment_id?: string | null, payment_gateway: Types.PaymentGatewayType, altered_payment_gateway?: string | null, discount?: number | null, delivery_fee: number, delivery_time?: string | null, created_at?: any | null, updated_at?: any | null, note?: string | null, customer: { __typename?: 'User', name: string, email: string }, payment_intent?: { __typename?: 'PaymentIntent', id: string, order_id: string, payment_gateway: string, tracking_number: string, payment_intent_info?: { __typename?: 'PaymentIntentInfo', client_secret?: string | null, is_redirect: boolean, payment_id: string, redirect_url?: string | null, amount: string, currency: string } | null } | null, products: Array<{ __typename?: 'Product', id: string, name: string, slug: string, price?: number | null, sale_price?: number | null, created_at?: any | null, shop_id?: string | null, quantity: number, unit: string, my_review?: Array<{ __typename?: 'Review', id: string, variation_option_id?: string | null, rating: number, comment: string, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }> }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, variation_options?: Array<{ __typename?: 'Variation', id: string, title: string }> | null, pivot?: { __typename?: 'OrderProductPivot', variation_option_id?: string | null, order_quantity: number, unit_price: number, subtotal: number } | null }>, coupon?: { __typename?: 'Coupon', code?: string | null, amount?: number | null, type?: string | null, id: string } | null, billing_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, shipping_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, refund?: { __typename?: 'Refund', id: string, title: string, amount: string, status?: Types.RefundStatus | null } | null, wallet_point?: { __typename?: 'WalletPoint', id: string, amount: number } | null, reviews?: Array<{ __typename?: 'Review', id: string, comment: string, rating: number, positive_feedbacks_count?: number | null, negative_feedbacks_count?: number | null, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }>, user: { __typename?: 'User', id: string, name: string }, my_feedback?: { __typename?: 'Feedback', id: string, positive?: boolean | null, negative?: boolean | null } | null }> | null }>, customer: { __typename?: 'User', name: string, email: string }, payment_intent?: { __typename?: 'PaymentIntent', id: string, order_id: string, payment_gateway: string, tracking_number: string, payment_intent_info?: { __typename?: 'PaymentIntentInfo', client_secret?: string | null, is_redirect: boolean, payment_id: string, redirect_url?: string | null, amount: string, currency: string } | null } | null, products: Array<{ __typename?: 'Product', id: string, name: string, slug: string, price?: number | null, sale_price?: number | null, created_at?: any | null, shop_id?: string | null, quantity: number, unit: string, my_review?: Array<{ __typename?: 'Review', id: string, variation_option_id?: string | null, rating: number, comment: string, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }> }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, variation_options?: Array<{ __typename?: 'Variation', id: string, title: string }> | null, pivot?: { __typename?: 'OrderProductPivot', variation_option_id?: string | null, order_quantity: number, unit_price: number, subtotal: number } | null }>, coupon?: { __typename?: 'Coupon', code?: string | null, amount?: number | null, type?: string | null, id: string } | null, billing_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, shipping_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, refund?: { __typename?: 'Refund', id: string, title: string, amount: string, status?: Types.RefundStatus | null } | null, wallet_point?: { __typename?: 'WalletPoint', id: string, amount: number } | null, reviews?: Array<{ __typename?: 'Review', id: string, comment: string, rating: number, positive_feedbacks_count?: number | null, negative_feedbacks_count?: number | null, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }>, user: { __typename?: 'User', id: string, name: string }, my_feedback?: { __typename?: 'Feedback', id: string, positive?: boolean | null, negative?: boolean | null } | null }> | null } };

export type VerifyCheckoutMutationVariables = Types.Exact<{
  input: Types.CheckoutVerificationInput;
}>;


export type VerifyCheckoutMutation = { __typename?: 'Mutation', verifyCheckout: { __typename?: 'VerifiedCheckoutData', total_tax: number, shipping_charge: number, unavailable_products: Array<string>, wallet_amount: number, wallet_currency: number } };

export type CreateOrderMutationVariables = Types.Exact<{
  input: Types.CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, tracking_number: string, customer_name?: string | null, customer_contact: string, language: string, order_status?: string | null, payment_status?: string | null, amount: number, sales_tax: number, total: number, paid_total?: number | null, payment_id?: string | null, payment_gateway: Types.PaymentGatewayType, altered_payment_gateway?: string | null, discount?: number | null, delivery_fee: number, delivery_time?: string | null, created_at?: any | null, updated_at?: any | null, note?: string | null, customer: { __typename?: 'User', name: string, email: string }, payment_intent?: { __typename?: 'PaymentIntent', id: string, order_id: string, payment_gateway: string, tracking_number: string, payment_intent_info?: { __typename?: 'PaymentIntentInfo', client_secret?: string | null, is_redirect: boolean, payment_id: string, redirect_url?: string | null, amount: string, currency: string } | null } | null, products: Array<{ __typename?: 'Product', id: string, name: string, slug: string, price?: number | null, sale_price?: number | null, created_at?: any | null, shop_id?: string | null, quantity: number, unit: string, my_review?: Array<{ __typename?: 'Review', id: string, variation_option_id?: string | null, rating: number, comment: string, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }> }> | null, image?: { __typename?: 'Attachment', id?: string | null, original?: string | null, thumbnail?: string | null } | null, variation_options?: Array<{ __typename?: 'Variation', id: string, title: string }> | null, pivot?: { __typename?: 'OrderProductPivot', variation_option_id?: string | null, order_quantity: number, unit_price: number, subtotal: number } | null }>, coupon?: { __typename?: 'Coupon', code?: string | null, amount?: number | null, type?: string | null, id: string } | null, billing_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, shipping_address?: { __typename?: 'UserAddress', country?: string | null, city?: string | null, state?: string | null, zip?: string | null, street_address?: string | null } | null, refund?: { __typename?: 'Refund', id: string, title: string, amount: string, status?: Types.RefundStatus | null } | null, wallet_point?: { __typename?: 'WalletPoint', id: string, amount: number } | null, reviews?: Array<{ __typename?: 'Review', id: string, comment: string, rating: number, positive_feedbacks_count?: number | null, negative_feedbacks_count?: number | null, photos: Array<{ __typename?: 'Attachment', id?: string | null, thumbnail?: string | null, original?: string | null }>, user: { __typename?: 'User', id: string, name: string }, my_feedback?: { __typename?: 'Feedback', id: string, positive?: boolean | null, negative?: boolean | null } | null }> | null } };

export type CreateOrderPaymentMutationVariables = Types.Exact<{
  input: Types.CreateOrderPaymentInput;
}>;


export type CreateOrderPaymentMutation = { __typename?: 'Mutation', createOrderPayment: boolean };

export const PaymentIntentPartsFragmentDoc = gql`
    fragment PaymentIntentParts on PaymentIntent {
  id
  order_id
  payment_gateway
  tracking_number
  payment_intent_info {
    client_secret
    is_redirect
    payment_id
    redirect_url
    amount
    currency
  }
}
    `;
export const ReviewPartsFragmentDoc = gql`
    fragment ReviewParts on Review {
  id
  comment
  rating
  photos {
    id
    thumbnail
    original
  }
  user {
    id
    name
  }
  positive_feedbacks_count
  negative_feedbacks_count
  my_feedback {
    id
    positive
    negative
  }
}
    `;
export const OrderPartsFragmentDoc = gql`
    fragment OrderParts on Order {
  id
  tracking_number
  customer_name
  customer_contact
  customer_name
  language
  customer {
    name
    email
  }
  order_status
  payment_status
  payment_intent {
    ...PaymentIntentParts
  }
  products {
    id
    name
    slug
    price
    sale_price
    created_at
    my_review {
      id
      variation_option_id
      rating
      comment
      photos {
        id
        thumbnail
        original
      }
    }
    image {
      id
      original
      thumbnail
    }
    variation_options {
      id
      title
    }
    pivot {
      variation_option_id
      order_quantity
      unit_price
      subtotal
    }
    shop_id
    quantity
    unit
  }
  amount
  sales_tax
  total
  paid_total
  payment_id
  payment_gateway
  altered_payment_gateway
  coupon {
    code
    amount
    type
  }
  discount
  delivery_fee
  delivery_time
  coupon {
    id
    code
  }
  billing_address {
    country
    city
    state
    zip
    street_address
  }
  shipping_address {
    country
    city
    state
    zip
    street_address
  }
  refund {
    id
    title
    amount
    status
  }
  wallet_point {
    id
    amount
  }
  created_at
  updated_at
  note
  reviews {
    ...ReviewParts
  }
}
    ${PaymentIntentPartsFragmentDoc}
${ReviewPartsFragmentDoc}`;
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
export const OrdersDocument = gql`
    query Orders($tracking_number: String, $orderBy: String, $sortedBy: String, $customer_id: ID, $shop_id: ID, $first: Int = 10, $page: Int) {
  orders(
    tracking_number: $tracking_number
    orderBy: $orderBy
    sortedBy: $sortedBy
    customer_id: $customer_id
    shop_id: $shop_id
    first: $first
    page: $page
  ) {
    data {
      ...OrderParts
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${OrderPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      tracking_number: // value for 'tracking_number'
 *      orderBy: // value for 'orderBy'
 *      sortedBy: // value for 'sortedBy'
 *      customer_id: // value for 'customer_id'
 *      shop_id: // value for 'shop_id'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export function useOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersSuspenseQueryHookResult = ReturnType<typeof useOrdersSuspenseQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const OrderDocument = gql`
    query Order($tracking_number: String, $id: ID) {
  order(tracking_number: $tracking_number, id: $id) {
    ...OrderParts
    children {
      ...OrderParts
    }
  }
}
    ${OrderPartsFragmentDoc}`;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      tracking_number: // value for 'tracking_number'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(baseOptions?: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export function useOrderSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderSuspenseQueryHookResult = ReturnType<typeof useOrderSuspenseQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const VerifyCheckoutDocument = gql`
    mutation VerifyCheckout($input: CheckoutVerificationInput!) {
  verifyCheckout(input: $input) {
    total_tax
    shipping_charge
    unavailable_products
    wallet_amount
    wallet_currency
  }
}
    `;
export type VerifyCheckoutMutationFn = Apollo.MutationFunction<VerifyCheckoutMutation, VerifyCheckoutMutationVariables>;

/**
 * __useVerifyCheckoutMutation__
 *
 * To run a mutation, you first call `useVerifyCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCheckoutMutation, { data, loading, error }] = useVerifyCheckoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifyCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<VerifyCheckoutMutation, VerifyCheckoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyCheckoutMutation, VerifyCheckoutMutationVariables>(VerifyCheckoutDocument, options);
      }
export type VerifyCheckoutMutationHookResult = ReturnType<typeof useVerifyCheckoutMutation>;
export type VerifyCheckoutMutationResult = Apollo.MutationResult<VerifyCheckoutMutation>;
export type VerifyCheckoutMutationOptions = Apollo.BaseMutationOptions<VerifyCheckoutMutation, VerifyCheckoutMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    ...OrderParts
  }
}
    ${OrderPartsFragmentDoc}`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateOrderPaymentDocument = gql`
    mutation CreateOrderPayment($input: CreateOrderPaymentInput!) {
  createOrderPayment(input: $input)
}
    `;
export type CreateOrderPaymentMutationFn = Apollo.MutationFunction<CreateOrderPaymentMutation, CreateOrderPaymentMutationVariables>;

/**
 * __useCreateOrderPaymentMutation__
 *
 * To run a mutation, you first call `useCreateOrderPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderPaymentMutation, { data, loading, error }] = useCreateOrderPaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderPaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderPaymentMutation, CreateOrderPaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderPaymentMutation, CreateOrderPaymentMutationVariables>(CreateOrderPaymentDocument, options);
      }
export type CreateOrderPaymentMutationHookResult = ReturnType<typeof useCreateOrderPaymentMutation>;
export type CreateOrderPaymentMutationResult = Apollo.MutationResult<CreateOrderPaymentMutation>;
export type CreateOrderPaymentMutationOptions = Apollo.BaseMutationOptions<CreateOrderPaymentMutation, CreateOrderPaymentMutationVariables>;