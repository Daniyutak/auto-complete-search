import suggestions from "../data/suggestions.json" with { type: "json" };

class SuggestionService {

    getSuggestions(query) {

        if (!query) {
            return [];
        }

        return suggestions.filter((suggestion) =>
            suggestion.text
                .toLowerCase()
                .includes(query.toLowerCase())
        );

    }

}

export default new SuggestionService();