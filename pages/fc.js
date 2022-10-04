import React from "react";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function fc() {
  const [faren, setfaren] = useState(null);
  const [celsius, setcelsius] = useState(null);
  return (
    <div>
      <Head>
        <script src="https://cdn.tailwindcss.com/"></script>
      </Head>
      <div className="flex flex-col">
        <div className="w-[100vw] h-[50vh] bg-red-500 text-white">
          <div className="flex space-x-2 justify-center">
            <div className="pt-[10px]">
              <Link href="/cf">
                <img
                  className="cursor-pointer rotate-180"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/forward.png"
                />
              </Link>
            </div>
            <h1 className="text-center font-bold tracking-widest pt-2.5 text-2xl">
              Farenheit
            </h1>
            <div className="pt-[10px]">
              <Link href="/ck">
                <img
                  className="cursor-pointer"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/forward.png"
                />
              </Link>
            </div>
          </div>
          <div className="flex space-x-2 mt-[100px] justify-center items-center">
            <input
              type="text"
              className="border-b-[2px] border-white p-2.5 w-[100px] h-[40px] bg-transparent focus:outline-none font-bold text-2xl flex items-center"
              value={faren}
              onChange={(e) => {
                setfaren(e.target.value);

                let tinc = (parseInt(e.target.value) - 32) * 5/9;

                setcelsius(tinc);
              }}
            />
            <span className="text-2xl font-bold">℉</span>
          </div>
        </div>
        <div className="w-[100vw] h-[50vh] text-black bg-white">
          <h1 className="text-center font-bold tracking-widest pt-2.5 text-2xl">
            Celsius
          </h1>
          <div className="flex space-x-2 mt-[100px] justify-center items-center">
            <span className="text-2xl font-bold">{celsius}℃</span>
          </div>
        </div>
      </div>
    </div>
  );
}
