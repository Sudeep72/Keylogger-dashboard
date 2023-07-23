import FileLoading from '@/components/layout/File_Loading';
import LoadingNav from 'src/components/layout/Loading_Navbar';

export default function Loading() {
    return (
        <div>
            <LoadingNav />
            <FileLoading />
        </div>
    )
}