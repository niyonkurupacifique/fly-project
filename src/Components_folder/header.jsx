import React, { useState } from "react";
import logo from "./pictures/Logo.png";
import { Dropdown } from "rsuite";
import rwandaFlag from "./pictures/rwanda_flage.png";
import frenchFlag from './pictures/frenchFlage.jpg';
import americanFlag from './pictures/american_flage.png';
import { Link } from "react-router-dom";


function Header() {
  const [image, setImage] = useState(null);

  const handleSelect = (value) => {
    console.log("value is:" + value);
    if (value === "kiny") {
      setImage(rwandaFlag);
    } else if (value === "eng") {
      setImage(americanFlag);
    } else {
      setImage(frenchFlag);
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <img width={120} src={logo} alt="" />
           
          </div>
          
          <nav className="desktop:space-x-10 laptop:space-x-10 tablet:space-x-7 smartphone:space-x-3 pl-2 space-y-2 flex smartphone:flex-col tablet:flex-row laptop:flex- desktop:flex pr-10">
        <Link to='/home'> <div className="pt-2 text-blue-500 items-center smartphone:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-headerFontFamily text-headerFontSize font-headerFontWeight leading-headerLineHeight hover:text-gray-900">
              Home
            </div></Link>
            <div className="smartphone:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-headerFontFamily text-headerFontSize font-headerFontWeight leading-headerLineHeight hover:text-gray-900">
              About
            </div>
            <div className="smartphone:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-headerFontFamily text-headerFontSize font-headerFontWeight leading-headerLineHeight hover:text-gray-900">
              Help & Support
            </div>
            <div className="flex items-center space-x-1">
              {image && <img src={image} alt="flag" width="30" />}
              <Dropdown className="smartphone:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-headerFontFamily text-headerFontSize font-headerFontWeight leading-headerLineHeight hover:text-gray-900" onSelect={handleSelect} title="Language">
                <Dropdown.Item eventKey="kiny">Kiny</Dropdown.Item>
                <Dropdown.Item eventKey="eng">English</Dropdown.Item>
                <Dropdown.Item eventKey="franc">Français</Dropdown.Item>
              </Dropdown>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
