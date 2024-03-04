const Footer = () => {
  return (
    <footer className="py-4 px-8 w-full bg-[#212121] flex items-center justify-between">
      <p className="text-center text-gray-200">
        © 2024{" "}
        <a className="font-medium" href="https://github.com/cbdev74">
          cbdev74
        </a>
        . All rights reserved.
      </p>

      <h1 className="font-medium text-gray-300 text-md flex justify-center items-center">
        v0.0.3
      </h1>
    </footer>
  );
};

export default Footer;
