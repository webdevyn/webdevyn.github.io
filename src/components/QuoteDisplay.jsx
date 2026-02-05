import {useState, useEffect} from "react";

function QuoteDisplay() {
    const [quote, setQuote] = useState({text: '', author: ''});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://webdevyn-github-io-quote-backend.onrender.com')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch quote');
                return res.json();
            })
            .then(data => {
                setQuote({text: data.text, author: data.author});
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load quote');
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-rose-50 to-rose-100">
                <div className="text-center p-8 max-w-md">
                    <h2 className="text-2xl font-bold text-rose-800 mb-2">{error}</h2>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-12 text-center">
                    <div className="quote-text mb-8">
                        <blockquote className="text-4xl md:text-5xl lg:text-6xl leading-tight font-light tracking-wide text-slate-900/90 italic mb-8 px-8 py-12">
                            "{quote.text}"
                        </blockquote>
                        <div className="quote-author flex items-center justify-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"></div>
                            <cite className="text-xl md:text-2xl font-semibold text-slate-700 not-italic">
                                — {quote.author}
                            </cite>
                        </div>
                    </div>

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-2xl hover:from-blue-600 hover:to-indigo-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuoteDisplay;