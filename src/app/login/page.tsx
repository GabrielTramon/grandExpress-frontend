"use client";
import Input from "@/components/input";
import React, { useState } from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl border border-gray-100 p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h1>

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg 
                     hover:bg-blue-700 transition-all duration-200 mt-4"
        >
          Entrar
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Não tem uma conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Criar   
          </a>
        </p>
      </form>
    </div>
  );
}
