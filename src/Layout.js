import React from "react";
import Games from "./components/Games";
import Navbar from "./components/Navbar"

export default function Layout(){
    return(
        <div className="p-4 flex flex-col gap-8">
           <Navbar />
            <Games />

        </div>
    )
}