import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function ProfileButton() {
  return (
    <div>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}
