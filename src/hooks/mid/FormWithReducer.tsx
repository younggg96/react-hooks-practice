import { useReducer } from 'react';

type State = { name: string; email: string };
type Action = { field: string; value: string };

const reducer = (state: State, action: Action): State => ({
  ...state,
  [action.field]: action.value,
});

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, { name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  return (
    <div>
      <h2>Form With Reducer</h2>
      <input name="name" value={state.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={state.email} onChange={handleChange} placeholder="Email" />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}