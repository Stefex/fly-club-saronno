import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fy Angling Club Saornno SignIn Page | TailAdmin - Fy Angling Club Saornno Dashboard Template",
  description: "This is Fy Angling Club Saornno Signin Page TailAdmin Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
