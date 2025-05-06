import React, { useRef, useState, useEffect, useCallback } from "react";

const itemHeight = 35;
const visibleCount = 20; // 容器显示 20 条
const totalCount = 10000;

const VirtualList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount + 1, totalCount);
  const offsetY = startIndex * itemHeight;

  const visibleItems = [];
  for (let i = startIndex; i < endIndex; i++) {
    visibleItems.push(
      <div
        key={i}
        style={{
          height: `${itemHeight}px`,
          borderBottom: "1px solid #eee",
          paddingLeft: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        Item #{i}
      </div>
    );
  }

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${itemHeight * visibleCount}px`,
        overflowY: "auto",
        border: "1px solid #ccc",
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: `${itemHeight * totalCount}px`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: offsetY,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

export default VirtualList;
