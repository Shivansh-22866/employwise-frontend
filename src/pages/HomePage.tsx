"use client"

import React, { useEffect } from "react";
import { Spotlight } from "../components/ui/spotlight-new";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { Button } from "../components/ui/moving-border";
import HomeCards from "../components/HomeCards";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const placeholders = [
    "Frontend Assignment for Employwise",
    "Integrates Reqres API",
    "Modern Javascript and Typescript frameworks",
    "Sleek Design",
    "Session Management",
  ];
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  const {token} = useAuth()
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="h-[40rem] w-full rounded-md flex flex-col sm:gap-16 gap-3 items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="group relative border rounded-full border-orange-600 px-8 py-2 bg-gradient-to-l text-transparent from-pink-600 to-orange-700 bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-700 hover:bg-clip-padding hover:text-white cursor-pointer transition-all duration-300 ease-in-out hover:border-transparent">
  Employwise Frontend Assignment
</div>

          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              User Management <br />
              <span className="bg-gradient-to-l text-transparent from-orange-600 to-pink-600 bg-clip-text">
                with Reqres API.
              </span>
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              A simple frontend for handling various user data and token management via Reqres API
            </p>
            <div className="my-16 flex flex-col sm:flex-row items-center justify-center mx-auto gap-4">
              <span className="hidden sm:block">
                <PlaceholdersAndVanishInput
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
              </span>
              <Button
                borderRadius="1.75rem"
                className="bg-gradient-to-l from-orange-600 to-pink-600 text-white"
                onClick={() => navigate(token ? "/users" : "/login")}
              >
                {token ? "See Users" : "Sign In"}
              </Button>
            </div>
          </div>
        </div>
        <HomeCards/>
      </div>
    </>
  );
};

export default HomePage;
