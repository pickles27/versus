import { auth0 } from "@/lib/auth0";
import Image from "next/image";

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-8">
      <Image
        width={200}
        height={200}
        src="/raccoon-dumpster.png"
        alt="Raccoon in a dumpster"
      />
      <h1 className="text-2xl font-bold">
        Welcome{session?.user?.nickname ? `, ${session.user.nickname}` : ""}!
      </h1>
    </div>
  );
}
