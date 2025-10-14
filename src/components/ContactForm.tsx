"use client";

import { useActionState, useTransition } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";

interface IContactFormProps {
  contact?: {
    name: string;
    email: string;
  };
  submitAction: (formData: FormData) => Promise<any>;
}

export function ContactForm({ contact, submitAction }: IContactFormProps) {
  const [, clientSubmitAction, isPending] = useActionState(
    async (_previousData: any, formData: FormData) => submitAction(formData),
    null
  );

  return (
    <form className="space-y-4" action={clientSubmitAction}>
      <div className="space-y-1.5">
        <Label>Nome</Label>
        <Input defaultValue={contact?.name} name="name" />
      </div>

      <div className="space-y-1.5">
        <Label>E-mail</Label>
        <Input defaultValue={contact?.email} name="email" />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending && <Loader2Icon className="size-4 mr-1 animation-spin" />}
        {contact ? "Salvar" : "Criar"}
      </Button>
    </form>
  );
}
