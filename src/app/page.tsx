import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <main className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome{session?.user?.name ? `, ${session.user.name}` : ''}!</h1>
    </main>
  );
}
