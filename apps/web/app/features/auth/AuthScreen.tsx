"use client";
import { useState } from "react";
import { AuthenticationFlow } from "../types";

export const AuthScreen = () => {
  const [state, setState] = useState<AuthenticationFlow>("signIn");
  return (
    <div className="h-full w-full bg-slate-700">
      <div>This is authscreen</div>
    </div>
  );
};
