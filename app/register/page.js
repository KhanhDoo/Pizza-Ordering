"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";


export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [creatingUser,setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    
    
    async function handleFormSubmit(e) { 
        e.preventDefault();
        setUserCreated(false);
        setError(false);
        setCreatingUser(true);
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
           
        })
        if(response.ok) {
            setUserCreated(true);
        }
        else {
            setError(true);
        }
        setCreatingUser(false);
    }
    
    return (
        <section className="mt-8">
            <h1 className="text-primary text-center 
            font-bold text-4xl mb-4">
                Register Page
            </h1>
            {userCreated && (
                <div className="my-4 text-center">
                    User created.<br/> Now you can {' '}
                    <Link className="underline" href="/login">
                        Login &raquo;
                    </Link>
                </div>
            )}
            {error && (
                <div className="my-4 text-center">
                    Error creating user.<br/> Try again later.
                </div>
            )}
            <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="Email" value={email}
                    disabled={creatingUser}
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password}
                    disabled={creatingUser}
                    onChange={e => setPassword(e.target.value)}/>
                <button type="submit"
                    disabled={creatingUser}>
                    Register
                </button>
                <div className="my-4 text-center text-gray-500">
                    or login with providers
                </div>
                <button
                    onClick={() => signIn('google',{ callbackUrl: '/' })}
                    className="flex gap-4 justify-center items-center">
                    <Image src="/google.png" alt="google"
                    width={32} height={32} />
                    Login with Google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?
                    <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div>
            </form>
        </section>
    );
}   