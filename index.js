//action creator
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}

//reducer | (previousState,action)=>newState
const initialState = {
    numOfCakes:10
}
const reducer = (state=initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}