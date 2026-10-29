import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./assets/components/card";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = 3;

  const getPageFromURL = () => {
    const page = Number(searchParams.get("page"));

    return Number.isInteger(page) && page >= 1 && page <= totalPages
      ? page
      : 1;
  };

  const [currentPage, setCurrentPage] = useState(getPageFromURL);

  useEffect(() => {
    const page = getPageFromURL();

    setCurrentPage(page);

    if (searchParams.get("page") !== String(page)) {
      setSearchParams({ page: String(page) }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    setSearchParams({ page: String(page) });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Beautiful Places
          </h1>

          <p className="mx-auto max-w-2xl text-gray-600">
            Discover beautiful mountains, peaceful forests, stunning beaches,
            and the wonders of nature.
          </p>
        </div>

        <Card currentPage={currentPage} />

        <nav
          aria-label="Pagination"
          className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-1 rounded-xl border border-gray-200 bg-white px-4 py-4 font-medium text-gray-700 transition-colors disabled:cursor-not-allowed disabled:text-gray-400 hover:bg-green-400 hover:text-white disabled:hover:border-gray-200 disabled:hover:bg-white sm:px-6"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                aria-current={currentPage === page ? "page" : undefined}
                className={`h-14 min-w-14 rounded-xl border px-4 text-lg font-medium transition-colors ${
                  currentPage === page
                    ? "bg-green-400 text-white"
                    : "border-gray-200 bg-white text-gray-800 hover:bg-green-400 hover:text-white"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-1 rounded-xl border border-gray-200 bg-white px-5 py-4 font-medium text-gray-800 transition-colors disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:border-gray-200 hover:bg-green-400 hover:text-white disabled:hover:bg-white sm:px-6"
          >
            Next
          </button>
        </nav>
      </div>
    </main>
  );
}