import { gql } from "@apollo/client";

export const ACCOUNT = gql`
    fragment accountFields on Account {
        id
        name
        gitHub
        imageURI
    }
`;

export const POST = gql`
    fragment postFields on Post {
        id
        name
        description
        link
        year
        modified
        created
    }
`;

export const COMMENT = gql`
    fragment commentFields on Comment {
        id
        content
        modified
        created
    }
`;

export const PAGE_INFO = gql`
    fragment pageInfoFields on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;