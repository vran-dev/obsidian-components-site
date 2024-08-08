import { MutableRefObject, useEffect, useState } from "react";

export default function (
  containerRef: MutableRefObject<HTMLDivElement | null>
) {
  const [columnCount, setColumnCount] = useState(3);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const cr = entry.contentRect;
        setContainerWidth(cr.width);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const width = containerWidth;
    if (width == null) {
      return;
    }

    if (width <= 576) {
      setColumnCount(2);
    } else if (width <= 992) {
      setColumnCount(3);
    } else {
      setColumnCount(4);
    }
  }, [containerWidth]);
  return { columnCount, setColumnCount };
}
