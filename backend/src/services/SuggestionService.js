import suggestions from "../data/suggestions.json" with { type: "json" };

import env from "../config/env.js";
import normalizeText from "../utils/normalizeText.js";

class SuggestionService {

    getSuggestions(query) {

        if (!this.validateQuery(query)) {
            return [];
        }

        return this.searchSuggestions(query);

    }

    validateQuery(query) {

        return (
            typeof query === "string" &&
            query.trim().length >= env.MIN_QUERY_LENGTH
        );

    }

    searchSuggestions(query) {

    const normalizedQuery = normalizeText(query);

    const results = [];

    for (const suggestion of suggestions) {

        const suggestionText =
            normalizeText(suggestion.text);

        if (!suggestionText.includes(normalizedQuery)) {
            continue;
        }

        results.push(suggestion);

        if (results.length >= env.MAX_SUGGESTIONS) {
            break;
        }

    }

    return results;
    }

}

export default new SuggestionService();