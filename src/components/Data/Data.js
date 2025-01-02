import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Data.css";

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="data">
      {data &&
        data.map((item) => (
          <Card title={item.title} itemId={item.id} key={item.id}></Card>
        ))}
    </div>
  );
};

export default Data;
