export var reduceOpacityReducer = (state = 1, action) => {
	switch (action.type) {
		case 'REDUCE_OPACITY':
			return { opacity: action.opacity }
		default:
			return state;
	}
}