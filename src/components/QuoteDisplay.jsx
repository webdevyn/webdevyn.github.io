import { useState, useEffect } from "react";

function QuoteDisplay() {
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // function to fetch a quote
    const fetchQuote = () => {
        setLoading(true);
        setError('');

        fetch(`${process.env.REACT_APP_QUOTE_API_URL}/api/quote`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch quote');
                return res.json();
            })
            .then(data => {
                setQuote({ text: data.text, author: data.author });
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load quote');
                setLoading(false);
            });
    };

    // initial fetch
    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="bg-gradient-to-br via-white to-indigo-100 py-5 ">
            <div className=" mx-auto">
                <div className="bg-gray-500 backdrop-blur-md rounded-md shadow-2xl border border-white/50 p-12 text-center w-auto min-w-[300px] max-w-xl">
                    {/* Quote content */}
                    <div className="quote-text mb-8 min-h-[150px]">
                        {loading ? (
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto my-12"></div>
                        ) : error ? (
                            <p className="text-rose-800 font-bold">{error}</p>
                        ) : (
                            <>
                                <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight font-light tracking-wide text-slate-900/90 italic mb-4 px-4">
                                    "{quote.text}"
                                </blockquote>
                                <div className="quote-author flex items-center justify-center gap-3">
                                    <cite className="text-xl md:text-2xl font-semibold text-slate-700 not-italic">
                                        — {quote.author || "Unknown"}
                                    </cite>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Quote button */}
                    <button
                        onClick={fetchQuote}
                        className="mt-4 px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-950 text-white text-lg font-semibold rounded-md hover:from-gray-950 hover:to-gray-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuoteDisplay;
