import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    
      <div className="container px-5 py-10 mx-auto text-center">
        
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          About Me 
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              
                
                <p className="leading-relaxed mb-10">{testimonial.quote}</p>
                <div className="inline-flex items-right text-align-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-23 rounded-full flex-shrink-0 object-cover object-center"
                  />
                 
                </div>
              </div>
            
          ))}
        </div>
      </div>
   
  );
}