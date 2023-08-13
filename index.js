const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

const BUY_TEA = 'BUY_TEA'

//action creator
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}

const buyTea = () =>{
    return{
        type:BUY_TEA,
        info:'Redux action to buy Tea'
    }
}

//reducer | (previousState,action)=>newState
const initialState = {
    numOfCakes:10,
    numOfTeas:15
}
const reducer = (state=initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        case BUY_TEA:return{
            ...state,
            numOfTeas:state.numOfTeas-1
        }
        default:return state
    }
}

// Creating store
const store = createStore(reducer)
console.log('Initial State : ',store.getState())
const unsubscribe = store.subscribe(()=>console.log('Updated State : ' , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
console.log('------ TEA -----')
store.dispatch(buyTea())
store.dispatch(buyTea())
store.dispatch(buyTea())
unsubscribe()


