'use client';
import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';
import Navbar from '@/components/layout/Navbar';
import File from '@/components/file/File';
import Loading from '@/components/layout/Loading';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <Loading />;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <div>
        <Navbar />
        <File />
        <div className="2xk:hidden flex flex-col items-center justify-center pt-3 lg:hidden xl:hidden ">
          <button
            className="btn-primary btn-outline btn mt-4 w-32 px-4 py-2"
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
