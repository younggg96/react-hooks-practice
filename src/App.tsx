import React from 'react';
import Counter from './hooks/basic/Counter';
import FormWithReducer from './hooks/mid/FormWithReducer';
import FilterWithMemo from './hooks/advanced/FilterWithMemo';
import AuthExample from './hooks/context/AuthExample';
import TodoApp from './hooks/projects/TodoApp';
import CountdownTimer from './hooks/basic/CountdownTimer';
import InputBinding from './hooks/basic/InputBinding';
import FetchPosts from './hooks/basic/FetchPosts';

function App() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Hooks Practice</h1>

      {/* Hook Examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-700">Hooks Examples</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Basic Hooks</h3>
          <h4 className="text-lg font-semibold text-gray-600 mt-4 mb-2">Counter (useState)</h4>
          <Counter />
          <hr className="my-4 border-gray-300" />
          <h4 className="text-lg font-semibold text-gray-600 mt-4 mb-2">Countdown Timer (useEffect)</h4>
          <CountdownTimer />
          <hr className="my-4 border-gray-300" />
          <h4 className="text-lg font-semibold text-gray-600 mt-4 mb-2">Input Binding (useState)</h4>
          <InputBinding />
          <hr className="my-4 border-gray-300" />
          <h4 className="text-lg font-semibold text-gray-600 mt-4 mb-2">Fetch Posts (useEffect &amp; Fetch)</h4>
          <FetchPosts />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Form with Reducer</h3>
          <FormWithReducer />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Memoization</h3>
          <FilterWithMemo />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Context API</h3>
          <AuthExample />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Todo App</h3>
          <TodoApp />
        </div>
      </div>
    </div>
  );
}

export default App;