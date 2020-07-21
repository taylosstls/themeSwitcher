import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { HeaderTop, Container, LogoSwitcher } from './styles';

import imgLogo from '../../assets/switcher.svg';

interface Props {
  toggleTheme(): void;
}

// Functional Component
const Header: React.FC<Props> = ({ toggleTheme }) => {

  const { title, colors } = useContext(ThemeContext);

  return (
    <HeaderTop>
      <Container>
        <LogoSwitcher>
          <img src={imgLogo} alt="ThemeSwitcher" />
        ThemeSwitcher
      </LogoSwitcher>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.5, colors.primary)}
          onColor={colors.secundary}
        />
      </Container>
    </HeaderTop>
  );
};

export default Header;