const middleWare=(store)=>(next)=>(action)=>{
    console.log("state before action",action," after " ,store.getState());
    return next(action);
}
export default middleWare;