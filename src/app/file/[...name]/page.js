import { notFound } from 'next/navigation';
import supabaseServer from '@/lib/supabase-server';
import Navbar from '@/components/layout/Display_Navbar';

const fetcher = (url) => fetch(url).then((res) => res.json());

async function getFileFromParams(params) {
  const name = params?.name?.join('/');
  const file = await fetcher(`http://localhost:3000/api/search-data?pc_name=${name}`);

  if (!file) {
    null;
  }

  return file;
}

export async function generateMetadata({ params }) {
  const file = await getFileFromParams(params);

  if (!file) {
    return {};
  }

  return {
    title: file.title,
    description: file.description,
  };
}

export async function generateStaticParams() {
  const allFiles = await fetcher(`http://localhost:3000/api/list-data`);
  return allFiles.map((file) => ({
    params: {
      name: file.name.split('/'),
    },
  }));
}

export default async function FilePage({ params }) {
  // check if user is logged in
  const user = await supabaseServer().auth.getUser();

  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const file = await getFileFromParams(params);

  if (!file) {
    notFound();
  }

  const content = await fetcher(
    `http://localhost:3000/api/download-data?pc_name=${params.name}`
  );
  const formattedDate = new Date(file.description).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div>
        <div className="hero text-center">
          <div className="max-w-md">
            <h4 className="py-4 text-2xl font-bold">{file.title}</h4>
            <span className="my-1 mb-2 text-lg font-medium text-gray-500">
              Last Updated at: {formattedDate}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-8 my-4 items-start text-left">
        <span className="mb-2 text-xl font-medium ">{content}</span>
      </div>
    </div>
  );
}
