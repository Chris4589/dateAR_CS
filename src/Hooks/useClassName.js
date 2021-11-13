import { useCallback, useState } from "react";

export const useClassName = (init) => {
  const [className, setClassName] = useState(init);

  const addClassName = useCallback(
    () => {
    
      if (className.split(' ').includes('Dashboard__sidebar_add')) {
        setClassName('Dashboard__sidebar');
      } else {
        setClassName('Dashboard__sidebar Dashboard__sidebar_add');
      }
  
      return className;
    },
    [className],
  );
  
  return [
    addClassName,
    className,
  ];
}
