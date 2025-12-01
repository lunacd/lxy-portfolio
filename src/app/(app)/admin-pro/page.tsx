import { redirect } from "next/navigation";

export default async function AdminProPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/access`);
  const accessData = await res.json();
  console.log("Access Data:", accessData.collections.users.fields.sessions.fields);
  if (!accessData.canAccessAdmin) {
    redirect("/admin/login?redirect=/admin-pro");
  }
  return <div>Admin Pro Page</div>;
}
