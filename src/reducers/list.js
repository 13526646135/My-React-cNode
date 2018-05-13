const listState={
    loading:true,
    data:[]
}
function list(state=listState,action) {
    switch (action.type){
        case 'LIST_UPDATA':
            return{
                loading:true,
                data:state.data
            }
        case 'LIST_UPDATA_SUCC':
            return {
                data:action.data.data,
                loading:false
            }
        case 'LIST_UPDATA_ERROR':
            return {
                data:[],
                loading:false
            }
        default:
            return state;

    }
}
export default list;
