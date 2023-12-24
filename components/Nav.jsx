'use client';

import Link from 'next/link';       // use to navigate
import Image from 'next/image';     // optimize image
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } 
from 'next-auth/react';

const Nav = () => {

  // mock the state the user is logged in or not
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState (null);
  const [toggleDropdown, setToggleDropdown] = useState (false);

  useEffect(() => {
    // Code to run on component mount or update
    const setProviders = async () => {
      const response = await setProviders();

      setProviders(response);
    }

    setProviders();
  }, [])

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

      {/* Desktop Navigation */}
      <div className ="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className ="flex gap-3 md:gap-5"> 
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image 
                src = "/assets/images/logo.svg"
                width = {37}
                height = {37}
                className = "rounded-full"
                alt = "Profile"
              />
            </Link>
          </div>
        ): (
          <>
          {providers && 
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => {setToggleDropdown((prev) => {!prev})}}
        />
        <p className="logo_text"> Promptworld </p>
          </div>
        ) : (
          <>
          {providers && 
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>

    </nav>

    
  )
}

export default Nav