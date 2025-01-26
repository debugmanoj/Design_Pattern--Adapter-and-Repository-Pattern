export function toyReducer(state, action) {
    switch (action.type) {
        case "SET_TOYS": {
            if (!Array.isArray(action.toys)) {
                console.error("SET_TOYS requires an array of toys.");
                return state;
            }

            const flattenedToys = action?.toys?.flat()

            // Flatten the nested arrays and replace the state
            return [...flattenedToys]; // Replace the state with the flattened array of toys
        }
        case 'ADD_TOY':

            return [...state, action]; // Add a new toy to the list
        case 'REMOVE_TOY':
            return state.filter((toy) => {
                return toy?._id !== action?.details?._id
            }
            ); // Remove a toy
        default:
            return state; // If no action matches, keep the state the same
    }
}