import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "@mui/material";
import "./Card.css";

export default function MediaCard(props) {
  const [itemId, setItemId] = useState(0);
  const handleClick = (props) => {
    setItemId(props.itemId);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [itemId]);
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography className="h5" gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          href="/post-details"
          className="link"
          onClick={() => handleClick(props)}
          size="small"
        >
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}
