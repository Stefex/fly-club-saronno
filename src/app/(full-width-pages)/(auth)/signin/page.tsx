import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fly Angling Club Saronno SignIn Page | TailAdmin - Fly Angling Club Saronno Dashboard Template",
  description: "This is Fly Angling Club Saronno Signin Page TailAdmin Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
