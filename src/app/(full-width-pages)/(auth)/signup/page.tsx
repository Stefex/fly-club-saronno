import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fy Angling Club Saornno SignUp Page | TailAdmin - Fy Angling Club Saornno Dashboard Template",
  description: "This is Fy Angling Club Saornno SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
