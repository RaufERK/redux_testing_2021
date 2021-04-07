const initState = {
  counter: 123,
  counter2: 2000,
  list: [
    { id: 1, label: 'Learn Reux' },
    { id: 2, label: 'Learn Node' },
    { id: 3, label: 'Learn MONGO@@@' },
  ],
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 };

    case 'DEC':
      return { ...state, counter: state.counter - 1 };

    case 'INC_2':
      return { ...state, counter2: state.counter2 + 1 };

    case 'DEC_2':
      return { ...state, counter2: state.counter2 - 1 };

    case 'ADD_ITEM':
      return {
        ...state,
        list: [...state.list, { id: Math.random(), label: payload }],
      };

    case 'DELETE':
      return { ...state, list: state.list.filter((el) => el.id !== payload) };

    case 'EDIT':
      const { id } = payload;
      return {
        ...state,
        list: state.list.map((el) => (el.id === id ? payload : el)),
      };
    default:
      return state;
  }
}
