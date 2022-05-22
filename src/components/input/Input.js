import React from "react";

const Input = ({ label, id, ...props }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <id= {id} {...props} />
    </Container>
  );
};

export default Input;
