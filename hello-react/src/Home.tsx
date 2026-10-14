// import React from "react";
import Button from "./Button";

interface HomeProps {
  imageUrl: string;
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <Button imageUrl={props.imageUrl}>{5}</Button>
      <Button imageUrl={props.imageUrl} height={200}>
        <div>
          <p>ICOON</p>
          <p>Label</p>
        </div>
      </Button>
    </div>
  );
};

export default Home;
