import { useState } from "react";
import "../app/styles/tailwind.css";
import Card from "../app/components/Card/Card";
import Header from "../app/components/Header";
// import Wave from './components/Wave/Wave';
// interface AppProps{
//       onChange: (val: string) =>void
// }
function Index() {
    const [country, setCountry] = useState("");
    const handleChange = (val: string) => {
        setCountry(val);
    };
    return (
        <div className="App flex flex-col overflow-auto relative w-full h-[100vh]">
            <Header onChange={handleChange} />
            <div className="flex justify-center items-center">
                <div className="mt-16 md:min-w-8/12 md:w-9/12 md:max-w-10/12 m-auto bg-white/10 rounded-lg shadow-lg overflow-x-auto z-10 xs:w-full">
                    <Card country={country} />
                </div>
            </div>
            {/* <div className='bottom-0 hidden md:inline-block max-w-[1536px] overflow-invisible'> 
                        <Wave />
                  </div> */}
        </div>
    );
}

export default Index;
