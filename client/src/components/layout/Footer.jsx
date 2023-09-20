import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import React from "react";

const Footer = () => {
  return (
    <div className="mb-8 text-gray-100 bg-gray-800">
      <header className="flex items-center justify-between p-6 mx-8 mb-4 border-b-2 border-gray-200">
        <h2 className="text-xl text-gray-200">
          Get connected with us on social networks :
        </h2>
        <div className="flex items-center justify-between gap-10">
          <AiFillFacebook size={25} />
          <AiOutlineTwitter size={25} />
          <AiOutlineGoogle size={25} />
          <AiOutlineInstagram size={25} />
          <AiFillLinkedin size={25} />
          <AiFillGithub size={25} />
        </div>
      </header>
      <main className="grid grid-cols-3 p-4">
        <div className="flex flex-col gap-4 text-lg text-center capitalize">
          <h3 className="text-xl uppercase">Products</h3>
          <p>electronics</p>
          <p>clothing</p>
          <p>sports</p>
          <p>jewellery</p>
        </div>
        <div className="flex flex-col gap-4 text-lg text-center capitalize">
          <h3 className="text-xl uppercase">useful links</h3>
          <p>pricing</p>
          <p>settings</p>
          <p>orders</p>
          <p>help</p>
        </div>
        <div className="flex flex-col gap-4 text-lg text-center capitalize">
          <h3 className="text-xl uppercase">contact</h3>
          <p>phone</p>
          <p>mail</p>
          <p>home</p>
          <p>tele</p>
        </div>
      </main>
      <footer className="flex items-center justify-center p-6 mx-8 mt-4 border-t-2 border-gray-200">
        <p>© 2023 Copyright: Shopwithus.com</p>
      </footer>
    </div>
  );
};

export default Footer;
