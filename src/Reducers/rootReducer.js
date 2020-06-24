const initState ={
    posts : [
        {id:'1', title:'sunt aut facere repellat ', body:'lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'},
        {id:'1', title:' provident occaecati excepturi', body:'lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution  letters.'},
        {id:'1', title:'d fact that a reader will be distract', body:'lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer