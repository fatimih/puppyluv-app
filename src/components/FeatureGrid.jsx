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

  // CSS for the alternating pulsing animations
  useEffect(() => {
    // Create style element
    const style = document.createElement('style');
    
    // Add keyframes animations for alternating pulsing
    style.innerHTML = `
      @keyframes pulseLeftArrow {
        0% { opacity: 0.5; }
        25% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 0.5; }
      }
      
      @keyframes pulseRightArrow {
        0% { opacity: 0.5; }
        50% { opacity: 0.5; }
        75% { opacity: 1; }
        100% { opacity: 0.5; }
      }
    `;
    
    // Append to document head
    document.head.appendChild(style);
    
    // Clean up
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Base styles for indicators - positioning below the grid
  const indicatorStyle = {
    position: 'absolute',
    bottom: '-5px', // Position further below the grid
    transform: 'none', // Remove the vertical centering
    cursor: 'pointer',
    zIndex: 10,
    padding: '0',
    background: 'transparent',
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
        paddingBottom: '0', // Add padding to make room for the arrows
      }}
    >
      {/* Left scroll indicator - positioned to the left of the right arrow */}
      {isHovered && showLeftIndicator && !isWrapped && (
        <div 
          onClick={scrollLeft}
          onMouseEnter={() => setLeftHovered(true)}
          onMouseLeave={() => setLeftHovered(false)}
          style={{
            ...indicatorStyle,
            right: '90px', // Position left arrow to the left of the right arrow
            animation: 'pulseLeftArrow 2s infinite', // Left arrow animation
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="24" y1="12" x2="6" y2="12"></line>
            <polyline points="12 18 6 12 12 6"></polyline>
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
      
      {/* Right scroll indicator - position unchanged */}
      {isHovered && showRightIndicator && !isWrapped && (
        <div 
          onClick={scrollRight}
          onMouseEnter={() => setRightHovered(true)}
          onMouseLeave={() => setRightHovered(false)}
          style={{
            ...indicatorStyle,
            right: '50px',
            animation: 'pulseRightArrow 2s infinite', // Right arrow animation
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="0" y1="12" x2="18" y2="12"></line>
            <polyline points="12 6 18 12 12 18"></polyline>
          </svg>
        </div>
      )}
    </div>
  );
};

export default FeatureGrid;