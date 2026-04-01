import logo from '../../assets/images/logo.webp'

const Header = () => {
  return (
    <header className="absolute h-min inset-0 w-full flex px-[5%] pt-8 items-center justify-between z-50">
      <a href="#/">
        <img
          width="2553"
          height="807"
          className="Logo w-32 saturate-0 brightness-[1000]"
          src={logo}
          alt="free, temporary, email, disposable, mail, email address"
        />
      </a>
    </header>
  );
};

export default Header;
