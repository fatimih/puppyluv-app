import React, { useState, useRef, useEffect } from 'react';

const FeatureGrid = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const [showRightIndicator, setShowRightIndicator] = useState(true);
  const [isWrapped, setIsWrapped] = useState(false);
  const gridRef = useRef(null);
  const containerRef = useRef(null);

  // Check if grid is wrapped (items stacked on mobile) or has horizontal overflow
  const checkGridLayout = () => {
    if (gridRef.current) {
      const { scrollWidth, clientWidth } = gridRef.current;
      const computedStyle = window.getComputedStyle(gridRef.current);
      
      // Check if flex-wrap is "wrap" (mobile view)
      const isFlexWrapped = computedStyle.flexWrap === 'wrap';
      setIsWrapped(isFlexWrapped);
      
      // Only show right indicator if content overflows AND not wrapped
      setShowRightIndicator(!isFlexWrapped && scrollWidth > clientWidth);
    }
  };

  // Track scroll position
  const handleScroll = () => {
    if (gridRef.current && !isWrapped) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
      
      // Show left indicator if scrolled right
      setShowLeftIndicator(scrollLeft > 10);
      
      // Show right indicator if more content to scroll
      setShowRightIndicator(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  };

  // Check layout on mount and resize
  useEffect(() => {
    checkGridLayout();
    
    const handleResize = () => {
      checkGridLayout();
      handleScroll();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Base styles for indicators
  const indicatorStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    zIndex: 10,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  };

  // Hover handler for indicators
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'relative', 
        width: '100%',
      }}
    >
      {/* Left scroll indicator circle - only show when not wrapped */}
      {isHovered && showLeftIndicator && !isWrapped && (
        <div 
          onClick={scrollLeft}
          onMouseEnter={() => setLeftHovered(true)}
          onMouseLeave={() => setLeftHovered(false)}
          style={{
            ...indicatorStyle,
            left: '50px',
            backgroundColor: leftHovered ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
      )}
      
      <div
        ref={gridRef}
        className="feature-grid"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onScroll={handleScroll}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (typeof child.type === 'function') {
              return React.cloneElement(child, { isGridHovered: isHovered });
            }
            return child;
          }
          return child;
        })}
      </div>
      
      {/* Right scroll indicator circle - only show when not wrapped */}
      {isHovered && showRightIndicator && !isWrapped && (
        <div 
          onClick={scrollRight}
          onMouseEnter={() => setRightHovered(true)}
          onMouseLeave={() => setRightHovered(false)}
          style={{
            ...indicatorStyle,
            right: '50px',
            backgroundColor: rightHovered ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default FeatureGrid;