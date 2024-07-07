"use client"

import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <h1 className="text-4xl">hello Tauri</h1>
      

      <button onClick={() => signIn('google')}>Login With Google</button>
      <button onClick={() => signOut()}>LogOut</button>

    </main>
  );
}
