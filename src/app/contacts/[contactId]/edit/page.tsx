import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { EditContactForm } from "./EditContactForm";

interface IEditContactPageProps {
  params: {
    contactId: string;
  };
}

export default async function EditContactPage({
  params,
}: IEditContactPageProps) {
  const { contactId } = params;

  const contact = await db.contact.findUnique({
    where: { id: contactId },
  });

  if (!contact) {
    return redirect("/");
  }

  return <EditContactForm contact={contact} />;
}
