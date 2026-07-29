import { useCallback, useEffect, useRef, useState } from "react";

function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });
  const [pendingQuote, setPendingQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [transitionPhase, setTransitionPhase] = useState("visible");
  const latestQuoteRef = useRef(currentQuote);

  useEffect(() => {
    latestQuoteRef.current = currentQuote;
  }, [currentQuote]);

  const fetchQuote = useCallback(async (previousQuote = null) => {
    setError("");

    let candidate = null;
    let attempts = 0;

    while (!candidate && attempts < 4) {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_QUOTE_API_URL}/api/quote`,
        );
        if (!res.ok) throw new Error("Failed to fetch quote");

        const data = await res.json();
        candidate = { text: data.text, author: data.author };

        if (
          previousQuote &&
          candidate.text === previousQuote.text &&
          candidate.author === previousQuote.author
        ) {
          candidate = null;
        }
      } catch (err) {
        candidate = null;
      }

      attempts += 1;
    }

    if (!candidate) {
      setError("Failed to load quote");
      setLoading(false);
      return;
    }

    if (previousQuote) {
      setPendingQuote(candidate);
      setTransitionPhase("fadingOut");

      window.setTimeout(() => {
        setTransitionPhase("fadingIn");

        window.setTimeout(() => {
          setCurrentQuote(candidate);
          latestQuoteRef.current = candidate;
          setPendingQuote(null);
          setTransitionPhase("visible");
          setLoading(false);
        }, 300);
      }, 300);
      return;
    }

    setCurrentQuote(candidate);
    latestQuoteRef.current = candidate;
    setPendingQuote(null);
    setTransitionPhase("visible");
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchQuote();

    const intervalId = window.setInterval(() => {
      fetchQuote(latestQuoteRef.current);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, [fetchQuote]);

  return (
    <div className="mt-16 flex justify-center">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200/80 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur-sm">
        <div className="min-h-[96px]">
          {loading ? (
            <div className="mx-auto my-6 h-8 w-8 animate-spin rounded-full border-b-2 border-slate-900"></div>
          ) : error ? (
            <p className="font-semibold text-rose-800">{error}</p>
          ) : (
            <div className="relative min-h-[96px]">
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  transitionPhase === "visible"
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <blockquote className="text-sm italic leading-6 text-gray-700">
                  “{currentQuote.text}”
                </blockquote>
                <cite className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  — {currentQuote.author || "Unknown"}
                </cite>
              </div>

              {pendingQuote && (
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    transitionPhase === "fadingIn"
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <blockquote className="text-sm italic leading-6 text-gray-700">
                    “{pendingQuote.text}”
                  </blockquote>
                  <cite className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    — {pendingQuote.author || "Unknown"}
                  </cite>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuoteDisplay;
