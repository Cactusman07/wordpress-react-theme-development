import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadPosts() {
            const response = await fetch(url);
            if(!response.ok) {
                // Something failed
                return;
            }

            const posts = await response.json();
            setData(posts);
        }

        loadPosts();
    }, [url]);
    return data;
}