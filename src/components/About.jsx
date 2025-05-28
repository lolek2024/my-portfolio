import React from 'react'
import aboutme from '../assets/aboutme.jpg'
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-4 text-center" >About Me</h3>
            <p className='text'>
            Backend Developer with over a year of experience building secure and scalable systems. I mainly use NestJS, MySQL and PHP to create and maintain APIs. I've worked on systems like QR-based inventory management and a QR-based inventory tracking and eKYC platform, and I always make sure my code is clean, tested, make sure to document, and follows best practices. I'm focused, detail-oriented, and always looking to improve my skills and the systems I work on.
            </p>
        </div>
        </section>

        <div className='flex flex-col lg:flex-row gap-4 justify-center items-center w-full bg-gray-100 p-8'>
            <img src={aboutme} className='h-60 rounded-lg' alt="" srcset="" />
            <div id="skills" className="py-20 ">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-semibold mb-4">Backend Developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <br/>
                    <div className='flex flex-col lg:flex-row gap-25'>
                        <ul className="list-disc pl-5 space-y-2">
                        <li>Birthday: August 30, 1996</li>
                        <li>Website: http://10.86.1.46:5173/</li>
                        <li>Phone: +6392 0552 3939</li>
                        <li>City: Minglanilla, Cebu City, PH 6046</li>
                    
                        </ul>
                        <ul className="list-disc pl-5 space-y-2">
                        <li>Age: 28</li>
                        <li>Degree: Bachelor's Degree</li>
                        <li>Email: lolekparas19@gmail.com</li>
                        </ul>
                    </div>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae quod eveniet sit debitis sapiente error corporis tempora, distinctio eligendi.</p>
                    
                </div>
            </div>
        </div>
    </div>
  );
}
