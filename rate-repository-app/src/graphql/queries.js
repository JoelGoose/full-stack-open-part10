import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
    edges {
      node {
        description
        forksCount
        fullName
        ownerAvatarUrl
        ratingAverage
        reviewCount
        stargazersCount
        language
        id
      }
    }
  }
}
`

export const GET_USER = gql`
  query getUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            repositoryId
            createdAt
            text
            rating
          }
        }
      }
    }
  }
`
export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      id
      description
      forksCount
      fullName
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      language
      url
    }
  }
`

export const GET_REVIEWS = gql`
  query getReview($id: ID!) {
    repository(id: $id) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }}
  }
`