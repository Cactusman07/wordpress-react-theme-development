import { useEffect, useState } from 'react';

interface Post {
    title: {
      rendered: string;
    };
}
  
  interface UseFetchDataReturn {
    data: Post[] | null;
    isLoading: boolean;
}

export default function useFetch(url: string): UseFetchDataReturn {
    const [data, setData] = useState<Post[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      async function fetchData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      }
      fetchData();
    }, [url]);
  
    return { data, isLoading };
};
