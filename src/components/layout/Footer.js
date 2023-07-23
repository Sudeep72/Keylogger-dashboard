export default function Footer() {
    return (
      <div className="fixed flex flex-col items-center justify-center inset-x-0 bottom-0 p-4 text-white mx-auto mt-8">
        <h4 className="mb-2 font-poppins font-bold">Need to Register or any Queries?</h4>
        <div className="relative">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-primary input-bordered w-auto pr-16"
          />
          <button className="btn btn-outline btn-primary absolute right-0 rounded-l-none">Airwave</button>
        </div>
      </div>
    );
  }
  