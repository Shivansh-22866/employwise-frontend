"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { loginUser } from "../services/api";
import { motion } from "framer-motion";
import { IconBrandGithub } from "@tabler/icons-react";

const LoginPage = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem("token", data.token);
      window.location.href = "/users";
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative w-full bg-slate-900/95 flex items-center justify-center overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <BackgroundGradient className="p-1 rounded-[22px] max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-xl shadow-2xl space-y-6 min-w-[400px]">
            <div className="text-center">
              <motion.h2 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
                Welcome Back
              </motion.h2>
              <p className="text-gray-400">Enter your credentials to continue</p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-red-900/50 rounded-lg flex items-center gap-2"
              >
                <span className="text-red-400">⚠️</span>
                <span className="text-red-300">{error}</span>
              </motion.div>
            )}

            <div className="space-y-4">
              <LabelInputContainer>
                <Label className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="eve.holt@reqres.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label className="text-gray-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-800 border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white"
                />
              </LabelInputContainer>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-600 to-orange-600 text-white p-3 rounded-lg font-medium 
                        hover:from-pink-700 hover:to-orange-700 transition-all relative overflow-hidden"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 border-2 border-white/30 rounded-full animate-spin border-t-transparent" />
                  Authenticating...
                </div>
              ) : (
                "Sign In →"
              )}
            </motion.button>

            <div className="text-center text-gray-400 text-sm mt-4">
              <p>Demo credentials:</p>
              <p className="font-mono text-orange-300">email: eve.holt@reqres.in</p>
              <p className="font-mono text-pink-300">password: cityslicka</p>
            </div>
          </form>
        </BackgroundGradient>

        <div className="text-center mt-6">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <IconBrandGithub className="h-5 w-5" />
            View Source Code
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};