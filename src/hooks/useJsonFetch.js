import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {          
          throw new Error(data.status);
        }

        setData(data.status);
      } catch (e) {
        setError(e.message);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };

    fetchData();
  }, [url]);

  return [data, isLoading, hasError];
}