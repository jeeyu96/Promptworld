'use client';

import Link from 'next/link';       // use to navigate
import Image from 'next/image';     // optimize image
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {

  // mock the state the user is logged in or not
  const isUserLoggedIn = true;

  return (
    // navigation structure
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptworld Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text"> Promptworld </p>
      </Link>

      {/* Mobile Navigation */}
      <div className ="sm:flex hidden">
        {isUserLoggedIn? (
          <div className ="flex gap-3 md:gap-5"> 
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
          </div>
        ): (
          <>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav