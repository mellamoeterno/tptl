'use client'
import { useEffect, useState } from "react";

const ApiList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => { 
      try {                                             //try is used to use catch (err) to catch the error if an value is false
        setLoading(true);
        setError(null);

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");     //fetch retrieves various resources from a server, sends Data, handle responses,
                                                                                        //& manage requests between different domains

        if (!response.ok) {                              //response.ok manually verify if a Fetch API request was successful 
          throw new Error("Failed to fetch data");      //The ! operator is used with response.ok to negate the boolean value, checking if the response was not successful.
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong"); //err.message used in catch blocks to display specific details about why an error happened
      } finally {                                        //finally execute code regardless of whether a block succeeds or fails
        setLoading(false);
      }
    };

    fetchData();
  }, []);                                                //the useEffect runs only on mount

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