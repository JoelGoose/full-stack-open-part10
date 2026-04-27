import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Repositories {
  repositories {
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
      }
    }
  }
}
`

export const GET_USER = gql`
  query getUser {
    me {
      id
      username
    }
  }
`