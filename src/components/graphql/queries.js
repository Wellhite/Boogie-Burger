import gql from 'graphql-tag';

export const GET_ALL_PRODUCTS = gql`
    query {
        getAllProducts {
            id
            name
            description
            price
            category
        }
    }
`;

export const GET_PRODUCT = gql`
    query($id: ID!) {
        getProduct(id: $id) {
            id
            name
            description
            price
            category
        }
    }
`;

