import Image from "next/image";

const Header = () => {
  return (
    <>
      <header
        className={
          "w-full bg-[#7D28F7] transition-all flex items-center"
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-3 sm:py-4">
          <Image
            src="/assets/logo.png"
            width={500}
            height={500}
            className="h-8 w-auto"
            alt="Logo Image"
          />
        </nav>
      </header>
    </>
  );
}

export default Header;