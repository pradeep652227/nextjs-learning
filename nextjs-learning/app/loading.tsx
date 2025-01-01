export default function Loader() {
    console.log('Loader is rendered');
    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            Loader
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
    )
}