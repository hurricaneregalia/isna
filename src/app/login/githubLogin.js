import React from "react";
import { signIn } from "../lib/auth";

export default function GithubLogin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button>Login with github</button>
    </form>
  );
}
