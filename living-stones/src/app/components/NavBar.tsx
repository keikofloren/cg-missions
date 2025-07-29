export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Living Stones</h1>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="/missions" className="text-white hover:text-gray-300">Missions</a></li>
                    <li><a href="/merchandise" className="text-white hover:text-gray-300">Merchandise</a></li>
                </ul>
            </div>
        </nav>
    );
}