import React from "react";
import gameLinks from "../data/SitesAndLinks";


export default function Games(){




    return (


        <div className=" flex w-full justify-around text-white p-2 border-2">
            {
                gameLinks.map((site, index) =>(
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