import React, { useEffect, useRef } from 'react';

interface LatexRendererProps {
  content: string;
  block?: boolean;
  className?: string;
}

const LatexRenderer: React.FC<LatexRendererProps> = ({ content, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && (window as any).katex) {
      try {
        // Use renderToString to bypass quirks mode check (document.compatMode) that exists in katex.render
        const html = (window as any).katex.renderToString(content, {
          throwOnError: false,
          displayMode: block,
        });
        containerRef.current.innerHTML = html;
      } catch (e) {
        console.error("KaTeX rendering error:", e);
        containerRef.current.innerText = content;
      }
    }
  }, [content, block]);

  return <span ref={containerRef} className={`${className} ${block ? 'block my-2' : 'inline-block'}`} />;
};

export default LatexRenderer;