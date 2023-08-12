import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../assets/styles/contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j8llmta",
        "template_hv35q13",
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
  
    <div className="md:w-1/2 md:flex md:justify-center md:items-center">
    <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center gap-2 p-5 border-2 rounded-lg md:w-1/2 md:gap-6">
      <label>Nom de la réservation</label>
      <input type="text" name="user_name" className=" rounded"/>
      <label for="number">Nombre de personnes</label>
      <select name="number" required className=" rounded">  
        <option value="">Choisir</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>@
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <label for="day">Jour de réservation</label>
      <input type="date" name="day" className=" rounded"></input>
      <label for="time">Heure de réservation</label>
      <input type="time" name="time" className=" rounded"></input>
      <label>Message</label>
      <textarea name="message" className=" rounded" />
      <button className=" rounded w-20 hover:bg-yellow-400 hover:opacity-50"><input type="submit" value="Send" /></button>
    </form>
    </div>
   
  );
}

export default Contact;

