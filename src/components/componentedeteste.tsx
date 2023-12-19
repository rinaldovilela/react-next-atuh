"use client";

import React from "react";
import { Input, Card, Spacer } from "@nextui-org/react";
import { useState } from "react";
export default function Cadastro() {
  const [value, setValue] = React.useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const validatePassword = (value: string) => {
    return value.length >= 8;
  };

  const isInvalidPassword = React.useMemo(() => {
    if (value === "") return false;
    return !validatePassword(value);
  }, [value]);

  const [password, setPassword] = useState("");

  const handleClearPassword = () => {
    setPassword("");
  };
  const [email, setEmail] = useState("");

  const handleClearEmail = () => {
    setEmail("");
  };

  return (
    <div className="bg-white">
      <section className="flex items-center justify-center min-h-screen">
        <Card className="max-w-520px p-20 bg-gradient-to-br from-green-100 to-green-200 ">
          <p className="text-24 font-bold text-center mb-10">Login</p>
          <Input
            isClearable
            value={value}
            type="email"
            label="Email"
            variant="bordered"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "success"}
            errorMessage={isInvalid && "Por favor insira um e-mail válido."}
            onValueChange={setValue}
            onClear={handleClearEmail}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-xs w-full"
          />
          <Spacer y={1} />
          <Input
            isClearable
            fullWidth
            type="password"
            label="Senha"
            variant="bordered"
            placeholder=""
            value={password}
            color={isInvalidPassword ? "danger" : "success"}
            onClear={handleClearPassword}
            onChange={(e) => setPassword(e.target.value)}
            className="max-w-xs"
          />
        </Card>
      </section>
    </div>
  );
}
