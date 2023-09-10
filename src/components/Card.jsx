import React from "react";

const Card = () => {
  return (
    <div>
      <div className="relative h-[250px] w-[150px]d rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <a href="#" className="flex items-center gap-x-2">
            <img
              className="h-7 w-7 rounded-full object-cover"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt="avatar"
            />
            <span className="text-sm font-semibold text-white">Delba</span>
          </a>

          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
