import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact () {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("");
    

    function encode(data) {
        return Object.keys(data)
        Map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
             )
        .join("&");
    }

        function handleSubmit(e) {
            e.preventDefault();
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded"},
                body:encode({"form-name": "contact", name, email, message}),
                

            })
            emailjs.sendForm('service_n6nd0xa', 'template_1jesasf',e.target, 'Tc-bxRzp8lsUETzyb')
            .then(() => alert("Message Sent"))
            .catch((error) => alert(error));
        }


      




    return (
    <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
            width="100%/"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)"}}
            src="https://www.google.com/maps/embed/v1/place?q=Goose+Creek,+SC,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                </div>
            
             <h2 className="title-font font semibold text-white tracking-widest test-xs">
                    EMAIL

                </h2>
                <a className="text-indigo-400 leading-relaxed">
                monquavism@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    PHONE
                </h2>
                <p className="leading-relaxed">843-735-0887</p>




            </div>
            </div>
            </div>

            <form
            onSubmit={handleSubmit}
            netlify 
            name="contact"
            className="lg:w-1/3 md:w-1/2 flex flex-col md: ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Hire Me
                </h2>
               
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                        Name
                    </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                        Email
                    </label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label 
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400">
                        Messsage
                    </label>    
                    <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 rounded border border-gray-700 foucs:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button
                
                type='submit'
                className="text-white bg-indigo-500 border-0 py-2 px-6 foucs:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit 
                </button>

            </form>
        </div>
        </section>
        

    );


}