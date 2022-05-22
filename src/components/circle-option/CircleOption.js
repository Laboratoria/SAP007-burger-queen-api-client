import * as S from "./CircleOptionStyle.js";


const CircleOption = (props) => {
  return (
    <S.Container>
      <S.Label><S.InputCircleOption type="radio" {...props} /> {props.text} </S.Label>
    </S.Container>
  );
};

export default CircleOption;

