/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const hit = /* GraphQL */ `
  mutation Hit(
    $input: CreateCounterInput!
    $condition: ModelCounterConditionInput
  ) {
    hit(input: $input, condition: $condition) {
      id
      hits
      createdAt
      updatedAt
    }
  }
`;
export const createLiked = /* GraphQL */ `
  mutation CreateLiked(
    $input: CreateLikedInput!
    $condition: ModelLikedConditionInput
  ) {
    createLiked(input: $input, condition: $condition) {
      id
      projectId
      likes
      createdAt
      updatedAt
    }
  }
`;
export const updateLiked = /* GraphQL */ `
  mutation UpdateLiked(
    $input: UpdateLikedInput!
    $condition: ModelLikedConditionInput
  ) {
    updateLiked(input: $input, condition: $condition) {
      id
      projectId
      likes
      createdAt
      updatedAt
    }
  }
`;
export const deleteLiked = /* GraphQL */ `
  mutation DeleteLiked(
    $input: DeleteLikedInput!
    $condition: ModelLikedConditionInput
  ) {
    deleteLiked(input: $input, condition: $condition) {
      id
      projectId
      likes
      createdAt
      updatedAt
    }
  }
`;
