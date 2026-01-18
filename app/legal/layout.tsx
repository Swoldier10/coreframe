export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-core-orange selection:text-white">
            <main className="max-w-3xl mx-auto px-6 py-24">
                <a href="/" className="inline-block mb-12 text-sm font-bold tracking-widest text-core-orange hover:text-black transition-colors uppercase">
                    ← Back to Coreframe
                </a>
                <div className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-core-orange hover:prose-a:text-black">
                    {children}
                </div>
            </main>
        </div>
    );
}
