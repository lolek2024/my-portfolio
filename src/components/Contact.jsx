import React from 'react'
export default function Contact() {
  return (
    <div className='flex flex-col items-center'>
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-4 text-center">Contact Me</h3>
        <form className="space-y-4 max-w-lg">
          <input className="w-full border p-2" type="text" placeholder="Your Name" />
          <input className="w-full border p-2" type="email" placeholder="Your Email" />
          <textarea className="w-full border p-2" rows="5" placeholder="Your Message"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded item-center">Send</button>
        </form>
      </div>
    </section>
    </div>
  );
}
