import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

//api
import api from "../../services";
import { history } from "../../routes/history";

const useStyles = makeStyles({
  card: {
    minWidth: 150,
    maxWidth: 150,
    margin: "10px"
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
});

export default function SimpleCard({ data }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={data.sprites.front_default} alt={"..."} />
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            size="small"
            onClick={() => history.push("/details", { id: data.id })}
          >
            {data.name}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
