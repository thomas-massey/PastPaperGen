export const metadata = {
    title: 'About us',
    description: 'This is my website',
    image: 'https://example.com/image.png',
};

export default function About({ children }) {
    return (
        <main>
            <h1>About us</h1>
            {children}
        </main>
    );
}