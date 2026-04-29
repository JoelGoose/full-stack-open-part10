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
        id
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