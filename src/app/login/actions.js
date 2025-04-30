"use server";

import { signIn } from "../lib/auth";

export async function githubLoginAction() {
  await signIn("github");
}
