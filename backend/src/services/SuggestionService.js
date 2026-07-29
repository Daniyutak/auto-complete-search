import suggestions from "../data/suggestions.json" with { type: "json" };

import env from "../config/env.js";
import normalizeText from "../utils/normalizeText.js";

const indexedSuggestions = suggestions.map((suggestion) => ({
    ...suggestion,
    normalizedText: normalizeText(suggestion.text),
}));

class SuggestionService {

    getSuggestions(query) {

        try {

            if (!this.validateQuery(query)) {
                return [];
            }

            return this.searchSuggestions(query);

        } catch (error) {

            console.error("[SuggestionService] Error while searching suggestions:");
            console.error(error);

            // Deixa o resolver decidir como responder ao cliente.
            throw error;

        }

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

    for (const suggestion of indexedSuggestions) {

        const text = suggestion.normalizedText;

        // Ignora tudo que não começa com a pesquisa
        if (!text.startsWith(normalizedQuery)) {
            continue;
        }

        results.push(suggestion);

        // Encontrou a quantidade máxima?
        // Pode parar imediatamente.
        if (results.length >= env.MAX_SUGGESTIONS) {
            return results;
        }

    }

    return results;

}

}

export default new SuggestionService();