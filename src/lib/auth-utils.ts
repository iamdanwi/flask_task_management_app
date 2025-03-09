"use server"

import { cookies } from "next/headers"

// This is a simplified auth utility for demo purposes
// In a real app, you would use a proper auth library like NextAuth.js or Auth.js

// Type for user data
export interface User {
  id: string
  name: string
  email: string
}

// Function to check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies()
  const authCookie = cookieStore.get("auth-token")

  return !!authCookie
}

// Function to get current user
export async function getCurrentUser(): Promise<User | null> {
  const isAuth = await isAuthenticated()

  if (!isAuth) {
    return null
  }

  // In a real app, you would decode the JWT or fetch user data from your database
  // This is just a mock implementation
  return {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
  }
}

// Function to sign in user
export async function signIn(email: string, password: string): Promise<User> {
  // In a real app, you would validate credentials against your database
  // This is just a mock implementation

  // Set auth cookie
  cookies().set("auth-token", "mock-token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return {
    id: "user-1",
    name: "John Doe",
    email,
  }
}

// Function to sign up user
export async function signUp(name: string, email: string, password: string): Promise<User> {
  // In a real app, you would create a new user in your database
  // This is just a mock implementation

  // Set auth cookie
  cookies().set("auth-token", "mock-token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return {
    id: "user-1",
    name,
    email,
  }
}

// Function to sign out user
export async function signOut(): Promise<void> {
  cookies().delete("auth-token")
}

