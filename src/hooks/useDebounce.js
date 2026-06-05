import { useEffect, useState } from 'react';

export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// f -> timer(500 -> f -> debounced)
// fi -> timer(500 -> f -> x); timer(500 -> fi -> debounced)
// fil -> timer(500 -> fil -> debounced -> request)
