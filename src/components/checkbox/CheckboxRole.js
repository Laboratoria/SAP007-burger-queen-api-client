import * as S from "./CheckboxRoleStyle.js";


const CheckboxRole = (props) => {
  return (
    <S.Container>
      <S.Label><S.InputCheckboxRole type="radio" {...props} /> {props.text} </S.Label>
    </S.Container>
  );
};

export default CheckboxRole;

