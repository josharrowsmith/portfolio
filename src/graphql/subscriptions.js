/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const hits = /* GraphQL */ `
  subscription Hits($id: String!) {
    hits(id: $id) {
      id
      hits
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLiked = /* GraphQL */ `
  subscription OnCreateLiked {
    onCreateLiked {
      id
      projectId
      likes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLiked = /* GraphQL */ `
  subscription OnUpdateLiked {
    onUpdateLiked {
      id
      projectId
      likes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLiked = /* GraphQL */ `
  subscription OnDeleteLiked {
    onDeleteLiked {
      id
      projectId
      likes
      createdAt
      updatedAt
    }
  }
`;
