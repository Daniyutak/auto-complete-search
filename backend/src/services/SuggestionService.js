import suggestions from "../data/suggestions.json" with { type: "json" };
import normalizeText from "../utils/normalizeText.js";

class SuggestionService {

    getSuggestions(query) {

         if (!query) {
        return [];
    }

    const normalizedQuery = normalizeText(query);

    return suggestions.filter((suggestion) => {

        const normalizedSuggestion =
            normalizeText(suggestion.text);

        return normalizedSuggestion.includes(normalizedQuery);

    });


    }

}

export default new SuggestionService();