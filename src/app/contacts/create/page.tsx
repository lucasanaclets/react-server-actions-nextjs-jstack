import { ContactForm } from "@/components/ContactForm";
import { db } from "@/lib/db";
import { sleep } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function CreateContactPage() {
  async function submitAction(formData: FormData) {
    "use server";

    const data = Object.fromEntries(formData) as {
      name: string;
      email: string;
    };

    await sleep();
    await db.contact.create({ data });
  }

  return (
    <>
      <header>
        <Link
          href="/"
          className="text-muted-foreground flex items-center gap-1 text-xs mb-2 dark:hover:text-sky-300 hover:text-sky-600"
        >
          <ArrowLeftIcon className="size-4" />
          <span>Voltar para a lista</span>
        </Link>
        <h1 className="font-semibold text-3xl tracking-tighter">
          Criar contato
        </h1>
      </header>

      <ContactForm submitAction={submitAction} />
    </>
  );
}
