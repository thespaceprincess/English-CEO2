import React from "react";
import { openPopupWidget } from "react-calendly";
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

// hover:from-1-l
// hover:to-1-r
// hover:from-2-l
// hover:to-2-r
// hover:from-3-l
// hover:to-3-r
// hover:from-4-l
// hover:to-4-r
// hover:from-5-l
// hover:to-5-r
// hover:from-6-l
// hover:to-6-r
// hover:from-7-l
// hover:to-7-r
// hover:from-8-l
// hover:to-8-r
// hover:from-9-l
// hover:to-9-r

function TileComponent({ name, idx }: any): any {
 let coloridx = (idx % 9) + 1;

 return (
  <li
   onClick={_ =>
    openPopupWidget({
     url: "https://calendly.com/theenglishceo/30min",
     prefill: {
      customAnswers: {
       a1: name,
      },
     },
    })
   }
   className={`bg-gray-50 w-full rounded-lg shadow-lg h-24 text-center table bg-gradient-to-r hover:from-${coloridx}-l hover:to-${coloridx}-r cursor-pointer`}
  >
   <span className="table-cell text-lg text-gray-700 hover:text-gray-900 font-bold align-middle pb-1 px-5">
    {name}
   </span>
  </li>
 );
}

function App() {
 return (
  <div className="min-h-screen items-center bg-gray-100">
   <div className="w-full table p-20">
    <div className="table-cell text-left text-4xl text-gray-600">English CEO</div>
    <div className="table-cell text-right align-baseline text-2xl italic text-gray-600">
     Just do it.
    </div>
   </div>
   <div className="w-full text-center text-3xl text-gray-600">Book a Trial Class</div>

   <div className="flex">
    <div className="flex-1 max-w-4xl mx-auto p-10 py-20">
     <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
      {names.map((name, idx) => (
       <TileComponent name={name} idx={idx} />
      ))}
     </ul>
    </div>
   </div>
  </div>
 );
}

export default App;
