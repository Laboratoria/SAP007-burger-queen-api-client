import * as S from './HeaderCardStyle';

const HeaderCard = ({ onClick, children}) => {
    return (
        <div className="container">
            <S.ButtonCard onClick={onClick}>
               
                <S.Content>{children}</S.Content>
                
                
            </S.ButtonCard>
        </div>
    )
}

export default HeaderCard
