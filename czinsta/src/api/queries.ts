import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const POSTS = gql`
    query Posts($first: Int, $after: String, $last: Int, $before: String) {
        posts(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
                ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...postFields
                account{
                    ...accountFields
                }
            }
        }
    }
    ${fragments.POST}
    ${fragments.PAGE_INFO}
    ${fragments.ACCOUNT}
`

export const POST  = gql`
    query Post($id: ID!) {
        post(id: $id) {
            ...postFields
        }
    }
    ${fragments.PROJECT}
`

export const ACCOUNTS = gql`
    query accounts($first: Int, $after: String, $last: Int, $before: String) {
        accounts(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
            ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...accountFields
            }
        }
    }
    ${fragments.ACCOUNT}
    ${fragments.PAGE_INFO}
`

export const ACCOUNT = gql`
    query Account($id: ID!) {
        account(id: $id){
            ...accountFields
        }
    }
    ${fragments.ACCOUNT}
`

export const SELF = gql`
    query Self {
        self {
            ...AccountFields
        }
    }
    ${fragments.ACCOUNT}
`