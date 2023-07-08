const page = () => {
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <h1 className="text-4xl font-bold">
                About!
            </h1>
            <h2 className="text-2xl font-bold">
                How does PastPaperGen work?
            </h2>
            <p className="text-xl">
                Each new user if given by default a set number of tokens, using your tokens, you can generate past papers.
            </p>
            <h2 className="text-2xl font-bold">
                How do I get more tokens?
            </h2>
            <p className="text-xl">
                You can get more tokens by reporting bugs in our system, uploading questions and categorising them, or by joining one of our paid plans.
            </p>
            <p className="text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt suscipit, magni vero, tempore molestias tenetur pariatur, veritatis id ullam magnam deserunt numquam modi libero. Adipisci odio voluptate ut nesciunt omnis.
            </p>
        </div>
    );
}

export default page;