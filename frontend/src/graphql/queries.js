import { gql } from "@apollo/client";


export const GET_SUGGESTIONS = gql`

    query GetSuggestions($query: String!) {

        suggestions(query: $query) {

            id
            text
            href

        }

    }

`;