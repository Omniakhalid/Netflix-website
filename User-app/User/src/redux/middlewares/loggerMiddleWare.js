const middleware = (store) => (next) => (action) => {
	// console.log("State before your action", action, "was", store.getState());
	// do whatever logic
	return next(action);
};

export default middleware;