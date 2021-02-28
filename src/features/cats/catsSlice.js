// Action Creators
export function fetchCats() {
    return function(dispatch) {
        dispatch({ type: "cats/catsLoading" })
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
            .then(r => r.json())
            .then(data => {
                dispatch({ type: "cats/catsLoaded", payload: data.images })
            })
    }
}



// Reducers
const initialState = {
    entities: [],
    status: "idle"
}
export default function catsReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case "cats/catsLoading":
            return {
                ...state,
                status: "loading"
            }
        case "cats/catsLoaded":
            return {
                ...state,
                entities: payload,
                status: "idle"
            }
        default:
            return state
    }
}
