'use client';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const session = useSession();
    const [userName, setUserName] = useState('');
    const [saved, setSaved] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const { status } = session;
   
    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name);
        }
    }, [status, session]);

    async function handleFormInfoUpdate(e) {
        e.preventDefault();
        setSaved(false);
        setIsSaving(true);
        const response = await fetch('/api/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName }),
        });
        setIsSaving(false);
        if (response.ok) {
            setSaved(true);
        }
    }

    async function handleFileChange(e) {
        const files = e.target.files;
        if (files?.length === 1) {
            console.log('upload');
            const data = new FormData();
            data.set('files', files[0]);
            await fetch('api/upload', {
                method: 'POST',
                body: data,
            });
        }
    }

    if (status === 'loading') {
        return 'Loading...';
    }

    if (status === 'unauthenticated') {
        return redirect('/login');
    }

    const userImage = session.data.user.image;

    return (
        <section className="mt-8 text-center mb-8">
            <h1 className="text-primary text-center 
        font-bold text-4xl mb-4">
                Profile Page
            </h1>
            <div className="max-w-md mx-auto ">
                {saved && (
                    <h2 className="bg-green-100 text-center p-4 rounded-lg border border-green-300 ">
                        Proflie Saved!
                    </h2>
                )}
                {isSaving && (
                    <h2 className="bg-blue-100 text-center p-4 rounded-lg border border-blue-300 ">
                        Saving...
                    </h2>
                )}
                <div className="flex gap-4 items-center">
                    <div>
                        <div className="rounded-lg p-2 relative m">
                            <Image className="rounded-lg mb-1"
                                src={userImage} width={96} height={96} alt="avatar" />
                            <label>
                                <input type="file" className="hidden" onChange={(handleFileChange)} />
                                <span className="border rounded-lg p-2 block text-center">Edit</span>
                            </label>
                        </div>
                    </div>
                    <form className="grow" onSubmit={handleFormInfoUpdate}>
                        <input type="text"
                            value={userName} onChange={e => setUserName(e.target.value)}
                            placeholder="First and last name" />
                        <input type="email" disabled={true} value={session.data.user.email} />
                        <button type="submit" className="bg-primary text-white px-8 py-2 rounded-xl">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}