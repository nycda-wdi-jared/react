import { 
    EXPRESS_TEST_RESULTS, 
    DB_TEST_RESULTS, 
    EXPRESS_TEST_ERROR, 
    DB_TEST_ERROR, 
    SIGN_IN_RESULTS 
} from '../actions';

const initialState = {
    results: '',
    loginSuccessful: undefined
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case EXPRESS_TEST_RESULTS:
            return { ...state, results: "Test Succeeded!  " + action.data }
        case DB_TEST_RESULTS:
            return { ...state, results: "Test Succeeded!  " + action.data }
        case EXPRESS_TEST_ERROR:
            return { ...state, results: "Test Failed!  " + action.data }
        case DB_TEST_ERROR:
            return { ...state, results: "Test Failed!  " + action.data }
        case SIGN_IN_RESULTS:
            return { ...state, results: action.data, loginSuccessful: action.data.success }
        default:
            return state
    }
}

export default demo;