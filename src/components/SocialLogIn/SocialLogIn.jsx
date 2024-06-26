"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogIn = () => {
    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = (provider) => {

        const response = signIn(provider, { redirect: false });
    }

    if (session.status === 'authenticated') {
        router.push('/');
    }

    return (
        <div>
            <div className='flex justify-center items-center gap-4 text-3xl'>
                <button onClick={() => handleSocialLogin('google')} className='bg-[#F5F5F8] p-2 rounded-full'><FcGoogle /></button>
                <button onClick={() => handleSocialLogin('github')} className='bg-[#F5F5F8] p-2 rounded-full'><FaGithub /></button>
            </div>
        </div>
    );
};

export default SocialLogIn;