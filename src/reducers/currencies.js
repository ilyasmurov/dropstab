const initialState = {
  data: [],
  load: false,
  done: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "currency/load":
      return {
        ...state,
        load: true,
        data: [],
        error: false
      };
    case "currency/success": {
      return {
        ...state,
        load: true,
        done: true,
        data: action.value
      };
    }
    case "currency/error":
      return {
        ...state,
        load: false,
        done: false,
        error: action.value
      };

    default:
      return state;
  }
};
