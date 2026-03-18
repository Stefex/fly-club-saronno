import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fly Angling Club Saronno SignUp Page | TailAdmin - Fly Angling Club Saronno Dashboard Template",
  description: "This is Fly Angling Club Saronno SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
