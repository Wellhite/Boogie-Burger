import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
    mutation($input: ProductInput!) {
        createProduct(input: $input) {
            id
            name
            description
            price
            category
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation($id: ID!, $input: ProductInput!) {
        updateProduct(id: $id, input: $input) {
            id
            name
            description
            price
            category
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation($id: ID!) {
        deleteProduct(id: $id) {
            id
            name
            description
            price
            category
        }
    }
`;

