const redux = require('redux')
const createStore = redux.createStore
// Declaring initial state
const initialState={
    loading:false,
    users:[],
    error:''
}

// Defining Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure = (error) =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

// Defining Reducers
const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
    }
}

// Creating Store
const store = createStore(reducer)