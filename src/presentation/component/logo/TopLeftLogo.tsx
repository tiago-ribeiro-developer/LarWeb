import {
  LogoComponentStyled,
  LogoContainerComponentStyled,
} from "./LogoContainerComponentStyled";

const TopLeftLogo: React.FC = () => {
  return (
    <LogoContainerComponentStyled>
      <LogoComponentStyled
        src="https://www.lar.ind.br/wp-content/themes/lar-by-housecricket/images/logo.png"
        alt="Logo Lar"
      />
    </LogoContainerComponentStyled>
  );
};

export default TopLeftLogo;
