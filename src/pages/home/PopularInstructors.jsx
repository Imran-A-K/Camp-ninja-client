import React from "react";
import {AiFillLinkedin} from 'react-icons/ai'
import { BsFacebook } from "react-icons/bs";
const PopularInstructors = () => {
    const instructors = [
        {
          img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Samuel",
          sub: "Cricket Coach",
          promo: "Teached 1000's of students and former head coach at BCB.",
          fb: "https://www.facebook.com/",
          twitter: "https://www.twitter.com/",
        },
        {
          img: "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "John",
          sub: "Football Coach",
          promo: "Former head coach of BFF academy. Early staff at Mohamedan.",
          fb: "https://www.facebook.com/",
          twitter: "https://www.twitter.com/",
        },
        {
          img: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          title: "Gabriel",
          sub: "Tennis Coach",
          promo: "Former head coach of BTA academy. Early staff at Viking tennis.",
          fb: "https://www.facebook.com/",
          twitter: "https://www.twitter.com/",
        },  {
            img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title: "Bannon",
            sub: "Rugby Coach",
            promo: "Former coach of Dallas Academy. Early staff at Polo Rugby",
            fb: "https://www.facebook.com/",
            twitter: "https://www.twitter.com/",
          },
          {
            img: "https://images.pexels.com/photos/14783579/pexels-photo-14783579.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Hatice",
            sub: "Trecking Coach",
            promo: "Former coach of Darmoy Academy. Early staff at Erton Academy",
            fb: "https://www.facebook.com/",
            twitter: "https://www.twitter.com/",
          },
          {
            img: "https://images.unsplash.com/photo-1521702813222-1943f3fb9c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBzdHVkZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            title: "Csaba",
            sub: "Martial Arts Coach",
            promo: "Former coach of Taiku Academy. Early staff at Sero Sports",
            fb: "https://www.facebook.com/",
            twitter: "https://www.twitter.com/",
          },
      ];
      return (
        <div className="max-w-[1300px] mx-auto py-10 mt-4">
          <p className="text-4xl text-purple-500 text-center font-medium">Popular Instructors</p>
          {/* <p className="text-3xl font-semibold text-center py-3">Meet the Heroes</p> */}
          <p className="text-gray-500 text-base py-3 text-center w-[450px] max-sm:w-auto mx-auto">
          On Camp <span className="text-purple-600">Ninja</span>,qualified instructors from all over the world coach students.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 py-10">
            {instructors.map((instructor, i) => {
              return (
                <div
                  className="px-6 py-4 flex justify-center items-center flex-col rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-purple-600 group "
                  key={i}
                >
                  <img className="w-40 h-40 rounded-full" src={instructor.img} alt="services" />
                  <p className="text-xl group-hover:text-white font-semibold line-clamp-1">
                      {instructor.title}
                    </p>
                  <p className="text-sm text-center text-purple-600 group-hover:text-white capitalize py-2">
                    {instructor.sub}
                  </p>
                 
    
                  <p className="text-base text-center group-hover:text-white  py-2">
                    {instructor.promo}
                  </p>
                <div className="flex gap-5 items-center">
                <a href={instructor.fb} >
                  <BsFacebook className="text-purple-500 hover:text-white"/>
                  </a>
         
                  <a href={instructor.twitter}>
                  <AiFillLinkedin className="text-purple-500 hover:text-white"/>
                  </a> 
                </div>
            
    
               
                
                </div>
              );
            })}
          </div>
        </div>
      );
    };


export default PopularInstructors