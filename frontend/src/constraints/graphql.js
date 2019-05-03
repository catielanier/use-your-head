import gql from 'graphql-tag';

export const CREATE_ADMIN_MUTATION = gql`
    mutation CREATE_ADMIN_MUTATION(
        $email: String!
        $name: String!
        $password: String!
        $verifyPassword: String!
    ) {
        createAdmin(
            email: $email
            name: $name
            password: $password
            verifyPassword: $verifyPassword
        ) {
            id
            email
            name
        }
    }
`;

export const LOGIN_ADMIN_MUTATION = gql`
    mutation LOGIN_ADMIN_MUTATION(
        $email: String!
        $password: String!
    ) {
        loginAdmin(
            email: $email
            passowrd: $password
        ) {
            id
            email
            name
        }
    }
`;