"use client";

import React, { useMemo } from "react";
import { Input, Card, Spacer, Checkbox, Button } from "@nextui-org/react";
import { useState } from "react";
import { Rowdies } from "next/font/google";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalidEmail = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  const validatePassword = (value: string | any[]) => value.length >= 8;

  const isInvalidPassword = useMemo(() => {
    if (password === "") return false;
    return !validatePassword(password);
  }, [password]);

  const handleEmailChange = (value: React.SetStateAction<string>) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: React.SetStateAction<string>) => {
    setPassword(value);
  };

  const handleClearEmail = () => {
    setEmail("");
  };

  const handleClearPassword = () => {
    setPassword("");
  };

  return (
    <div className="bg-white ">
      <section className=" flex items-center justify-center min-h-screen">
        <Card className="w-1/3 p-10 bg-gradient-to-br from-green-100 to-green-200 items-center ">
          <p className="text-2xl font-bold text-center mb-10 text-green-600 drop-shadow-2xl">
            Faça o Login
          </p>
          <Input
            isClearable
            value={email}
            type="email"
            label="Email"
            variant="faded"
            isInvalid={isInvalidEmail}
            color={isInvalidEmail ? "danger" : "success"}
            errorMessage={
              isInvalidEmail && "Por favor insira um e-mail válido."
            }
            onValueChange={handleEmailChange}
            onClear={handleClearEmail}
            className="w-full  border-white-500"
          />
          <Spacer y={1} />
          <Input
            isClearable
            fullWidth
            type="password"
            label="Senha"
            variant="faded"
            placeholder=""
            value={password}
            color={isInvalidPassword ? "danger" : "success"}
            errorMessage={
              isInvalidPassword && "Por favor insira uma senha válida."
            }
            onClear={handleClearPassword}
            onValueChange={handlePasswordChange}
            className="w-full border-solid border-black "
          />
          <div className="w-full flex flex-row justify-between">
            <Checkbox color="success">
              <p className="text-10">Lembrar-me</p>
            </Checkbox>
            <a href="/login/recuperarsenha" className="text-10">Esqueceu a senha ?</a>
          </div>
          <Spacer y={1} />
          <Button color="success">Entrar</Button>
        </Card>
      </section>
    </div>
  );
}
