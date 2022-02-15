/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const counter = /* GraphQL */ `
  query Counter($id: ID!) {
    counter(id: $id) {
      id
      hits
      createdAt
      updatedAt
    }
  }
`;
export const getLiked = /* GraphQL */ `
  query GetLiked($id: ID!) {
    getLiked(id: $id) {
      id
      projectId
      likes
      createdAt
      updatedAt
    }
  }
`;
export const listLikeds = /* GraphQL */ `
  query ListLikeds(
    $filter: ModelLikedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        likes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
