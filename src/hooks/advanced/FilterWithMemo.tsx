import { useMemo, useState } from 'react';

export default function FilterWithMemo() {
  const [query, setQuery] = useState('');
  const list = useMemo(() => Array.from({ length: 10000 }, (_, i) => `Item ${i}`), []);

  const filtered = useMemo(() => {
    return list.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }, [list, query]);

  return (
    <div>
      <h2>Filter With Memo</h2>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." />
      <ul>
        {filtered.slice(0, 10).map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}