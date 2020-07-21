import styled from 'styled-components';

export const HeaderTop = styled.header`
  width: 100%;
  display: flex;
  background: ${props => props.theme.colors.primary};
  padding: 0 30px;
  box-shadow: 0 5px 5px rgba(0,0,0, 0.3);
  transition: background .3s;
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100px;
  color: #fff;
  align-items: center;
  justify-content: space-between;
`;

export const LogoSwitcher = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 5px;

  img {
    width: 60px;
    margin-right: 20px;
  }
`;