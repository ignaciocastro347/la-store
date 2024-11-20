import { useMemo } from 'react';

interface ReverseProps {
  items: {
    [key: string]: any;
  }[];
}

export const useReverse = ({ items }: ReverseProps) => {
  const reverse = useMemo(() => {
    return items && items?.length > 1
      ? items?.map(items?.pop, [...items])
      : items;
  }, [items]);

  return reverse;
};

// TODO: To improve this code, consider using a more straightforward and correct approach to reverse the array, such as using the slice method to create a shallow copy of the array and then applying the reverse method. This avoids mutating the original array and ensures the code behaves as expected.