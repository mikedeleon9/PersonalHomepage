import React from "react";
import SitesAndLinks from "../data/SitesAndLinks";


export default function Mainpage(){




    return (


        <div className=" flex w-full justify-between">
            {
                SitesAndLinks.map((site, index) =>(
                    <div className="flex flex-col items-center" key={index}>
                        <a href={site.url}
                          target="_blank" 
                          rel="noopener noreferrer">
                            <img className="w-16 h-16" src={site.image} alt={site.name} />  
                        </a>
                        <h3>{site.name}</h3>
                      
                        
                    </div>
                ))
            }
        </div>

    )
}