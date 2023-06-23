const LearnNavbar = () => {
    return (
        // Enclose in a rounded box with each item padded apart
        <div className="flex flex-col items-center justify-center rounded-md bg-gray-200">
            <nav className="flex flex-row items-center justify-center gap-4 py-2 px-2">
                <div>
                    <a href="/learn">Learn</a>
                </div>
                <div>
                    <a href="/learn/generate">Generate</a>
                </div>
                <div>
                    <a href="/learn/upload">Upload</a>
                </div>
            </nav>
        </div>
    );
}

export default LearnNavbar;