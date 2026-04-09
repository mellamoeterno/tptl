'use client'
import { useEffect, useState } from "react";

const ApiList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {                              //response.ok manually verify if a Fetch API request was successful
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong"); //err.message used in catch blocks to display specific details about why an error happened
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiList;