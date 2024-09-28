import React from "react";
import Games from "./components/Games";

export default function Layout(){
    return(
        <div className="p-4 ">
            <h1 className="font-Inter text-center text-white text-4xl">My Homepage</h1>
            <Games />

        </div>
    )
}