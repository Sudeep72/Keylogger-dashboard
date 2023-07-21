'use client';
import React from 'react';
import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';
import File from '../components/file/File';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <div>
       <h2 className="text-4xl font-extrabold text-center pt-5 py-7 font-raleway">
          <span>It's time to wake up and smell the </span>
          <span className='text-primary'>
            <Typewriter
              options={{
                strings: ['Mutating Hash!!', 'Evolving Hash!!'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>
        <File />
        <div className='items-center justify-center flex flex-col pt-3'>
          <button
            className="w-32 px-4 py-2 mt-4 btn btn-outline btn-primary"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return <Auth view={view} />;
}
