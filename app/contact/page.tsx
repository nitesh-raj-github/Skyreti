
'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',message:''});

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <input className="w-full p-2 mb-3 text-black" placeholder="Name" />
      <input className="w-full p-2 mb-3 text-black" placeholder="Email" />
      <textarea className="w-full p-2 mb-3 text-black" placeholder="Message" />
      <button className="bg-pink-500 px-6 py-2 rounded">Send</button>
    </div>
  );
}
