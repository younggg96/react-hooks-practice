import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function FetchPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]); // 依赖数组中包含page，当page变化时重新获取数据

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Fetch Posts</h2>
      
      {/* 加载状态 */}
      {isLoading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading posts...</p>
        </div>
      )}
      
      {/* 错误状态 */}
      {error && (
        <div className="bg-red-100 p-4 rounded-md mb-4 text-red-700">
          Error: {error}
        </div>
      )}
      
      {/* 文章列表 */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="border border-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
      
      {/* 分页控制 */}
      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50"
          onClick={handlePrevPage}
          disabled={page === 1 || isLoading}
        >
          Previous
        </button>
        <span className="py-2">Page {page}</span>
        <button
          className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50"
          onClick={handleNextPage}
          disabled={isLoading}
        >
          Next
        </button>
      </div>
    </div>
  );
} 