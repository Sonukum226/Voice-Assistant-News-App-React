import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  return (
    // this is card from Material UI
    <Card>
      <CardActionArea>
        <CardMedia
          image={
            urlToImage ||
            "https://videohive.img.customer.envatousercontent.com/files/350344331/news%20preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=de01da4b4ebc1de8271edcae293ef3ab"
          }
        />
        <div>
          {/* Publish Date Date  */}
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          {/* source like BBC CNN News */}
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        {/* Title of the news */}
        <Typography gutterBottom varieent="h5">
          {title}
        </Typography>
        <CardContent>
          {/* Description of the news */}
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
