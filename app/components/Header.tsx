import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Logo from "../images/weaths.png";
import moment from "moment";
export interface HeaderProps {
    onChange: (val: string) => void;
}
const Header = ({ onChange }: HeaderProps) => {
    const [inputValue, setInputValue] = useState("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
        onChange(e.target.value);
    }
    const formatDate = moment(new Date()).format("L");
    const formatDay = moment(new Date()).format("dddd");
    return (
        <>
            <div className="bg-[#003366] block w-full">
                <div className="flex justify-between items-center px-[15px]">
                    <div className="flex flex-1 items-center">
                        <BiMenu className="text-[35px] mr-10 align-middle text-white hidden md:inline-block" />
                        <a href="./">
                            <img
                                src={Logo}
                                alt="logo"
                                className="h-16 w-auto"
                            />
                        </a>
                    </div>
                    <div className="text-white justify-center xs:hidden md:inline-block">
                        <h3 className="font-semibold text-xl cursor-default">{`${formatDate} ${formatDay}`}</h3>
                    </div>
                    <div className="text-right flex-1">
                        <input
                            type="text"
                            className="text-lg mr-10 text-white bg-transparent w-2 h-3 p-3 border-2 border-white rounded-full relative focus:w-2/5 ease-in-out duration-200"
                            value={inputValue}
                            onChange={handleChange}
                        ></input>
                        <div className="w-1 h-3 absolute bg-white top-[40px] right-[52px] rotate-[135deg]"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
