import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "helloworld",
        "helloworld",
        form.current,
        "ZTFzwtOtJR9mghOR6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

      <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:items-center"  id="nous-contacter">
         <h2 className=" mb-10 xl:mb-3 mt-11 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Pour réserver une table <br />en quelques cliques</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="test flex flex-col items-center justify-center gap-2 rounded-lg md:w-1/2 md:gap-2"
         
        >
          <label className="text-white md:text-center">Nom de la réservation</label>
          <input type="text" name="user_name" className=" rounded" />
          <label for="number" className="text-white md:text-center">
            Nombre de personnes
          </label>
          <select name="number" required className=" rounded">
            <option value="">Choisir</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>@<option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
          <label for="day" className="text-white md:text-center">
            Jour de réservation
          </label>
          <input type="date" name="day" className=" rounded"></input>
          <label for="time" className="text-white md:text-center">
            Heure de réservation
          </label>
          <input type="time" name="time" className=" rounded"></input>
          <label className="text-white md:text-center">Instructions spécifiques</label>
          <textarea name="message" className="rounded  lg:w-80 xl:h-20" />
          <button className=" rounded-lg bg-white px-8 py-2 mt-3 hover:opacity-30 hover:bg-green-700">
            <input type="submit" value="Send" />
          </button>
        </form>
      </div>
    
  );
}

export default Contact;
