import React from "react";
import SitesAndLinks from "../data/SitesAndLinks";


export default function Mainpage(){




    return (


        <div className="border-2 border-black flex w-full justify-between">
            {
                SitesAndLinks.map((site, index) =>(
                    <div className="" key={index}>
                        <a href={site.url}>
                            <img className="w-16 h-16" src={site.image} alt={site.name} />  
                        </a>
                        <h3>{site.name}</h3>
                      
                        
                    </div>
                ))
            }
        </div>

    )
}