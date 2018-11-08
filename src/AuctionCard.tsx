import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

interface Props {
  name: string;
  price: number;
}

function AuctionCard({ name, price }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>$ {price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Bid</Button>
      </CardActions>
    </Card>
  );
}

AuctionCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AuctionCard;
