import suggestionService from "../services/SuggestionService.js";

export default {

    Query: {

        suggestions(_, { query }) {
            return suggestionService.getSuggestions(query);
        }

    }

};