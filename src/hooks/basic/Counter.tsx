import { useReducer, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // ❗ 非推荐：同步使用没问题，但异步可能出错
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // ✅ 推荐：函数式更新写法，避免闭包陷阱
  const handleIncrement2 = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement2 = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // ❌ 闭包陷阱示例：使用了旧的 count 快照
  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCount(count + 1); // 使用的是点击按钮时的旧值
      console.log("Async Increment (Bad):", count);
    }, 1000);
  };

  // ✅ 正确示范：使用函数式更新确保读取的是最新值
  const handleSafeAsyncIncrement = () => {
    setTimeout(() => {
      setCount((prev) => {
        console.log("Async Increment (Safe):", prev + 1);
        return prev + 1;
      });
    }, 1000);
  };

  const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <p className="text-4xl font-bold mb-4">{count}</p>

      {/* 同步按钮组 */}
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleIncrement}
        >
          +1 (count 依赖)
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleDecrement}
        >
          -1 (count 依赖)
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* 函数式更新写法 */}
      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={handleIncrement2}
        >
          +1 (函数式)
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={handleDecrement2}
        >
          -1 (函数式)
        </button>
      </div>

      {/* 闭包陷阱对比 */}
      <div className="flex gap-4 mt-4">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          onClick={handleAsyncIncrement}
        >
          Async +1 (闭包陷阱)
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={handleSafeAsyncIncrement}
        >
          Async +1 (安全写法)
        </button>
      </div>

      {/* 使用 useReducer 的示例 */}
      <p className="text-4xl font-bold my-4">{state.count}</p>
      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={() => dispatch({ type: "increment" })}
        >
          +1 (useReducer)
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -1 (useReducer)
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset (useReducer)
        </button>
      </div>
    </div>
  );
}
