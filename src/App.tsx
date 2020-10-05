import React from "react";
import "./tailwind.output.css";

let names = [
 "English for Influencers",
 "English for Digital Nomads",
 "English for Engineers",
 "English for Content Creators",
 "English for Entrepreneurs",
 "English for Economists",
 "English for Finance",
 "English for Sales",
 "English for Lawyers",
 "English for International Students",
 "English for Immigration",
 "English for Job Interviews",
 "English for Marketing Professionals",
 "English for Gaming",
 "English for Dating",
 "English for Travel",
 "English for Developers",
 "Conversational English",
 "English for Business",
 "English for Ravers and Parties",
 "English for Executives",
 "English for Science",
 "English for Bloggers",
 "English for YouTubers",
 "English for Yoga",
 "English for Mindfulness",
 "English for Arts",
 "English for Musicians",
 "English for Social Studies",
 "English for Managers",
 "English for Fashion Industry",
 "English for Designers",
];

function TileComponent(name: any): any {
 let colors = ["purple", "red", "green", "blue", "orange", "yellow", "teal", "indigo", "pink"];
 let color = colors[Math.floor(Math.random() * colors.length)];
 let color2 = colors[Math.floor(Math.random() * colors.length)];
 return (
  <li
   className={`bg-gray-50 rounded-lg shadow-lg h-24 text-center table bg-gradient-to-r hover:from-${color}-200 to-${color2}-200 cursor-pointer`}
  >
   <span className="table-cell text-lg text-gray-700 hover:text-gray-900 font-bold align-middle pb-1 px-5">
    {name.name}
   </span>
  </li>
 );
}

function App() {
 return (
  <div className="min-h-screen items-center bg-gray-100">
   <div className="w-full text-center text-3xl pt-20 text-gray-600">Book a Trial Class</div>
   <div className="flex">
    <div className="flex-1 max-w-4xl mx-auto p-10 py-20">
     <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
      {names.map(name => (
       <TileComponent name={name} />
      ))}
     </ul>
    </div>
   </div>
  </div>
 );
}

export default App;
