"use client";
import Typewriter from 'typewriter-effect';
import { useAuth, VIEWS } from 'src/components/AuthProvider';

function Navbar() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <>
        <div className="right-0 top-0 m-4 hidden pt-2 lg:absolute lg:block xl:block 2xl:block">
          <button className="btn-primary btn-outline btn px-4 py-2" onClick={signOut}>
            Sign Out
          </button>
        </div>
        <h2 className="py-7 pt-5 text-center font-poppins text-4xl font-extrabold">
          <span>It's time to wake up and smell the </span>
          <span className="text-primary">
            <Typewriter
              options={{
                strings: ['Mutating Hash!!', 'Evolving Hash!!'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>
      </>
    );
  }
}
export default Navbar;
