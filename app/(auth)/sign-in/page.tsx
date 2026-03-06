import { SignIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <SignIn
        routing="hash"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-transparent shadow-none",
          },
        }}
      />
    </main>
  );
}
