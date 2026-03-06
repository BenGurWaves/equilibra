import { SignUp } from "@clerk/nextjs";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <SignUp
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
