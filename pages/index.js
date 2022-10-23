import Link from "next/link";
import { useQuery } from "react-query";

export default function Home() {
  const { isLoading, isFetching, error, data, refetch } = useQuery(
    "quote",
    () => fetch("/api").then((res) => res.json())
  );

  const handleClick = () => {
    refetch();
  };

  return (
    <div className="container mx-auto text-center max-w-md mt-8">
      <h1 className="text-4xl">rest app</h1>
      <p>a rest service</p>

      <div className="mt-7 flex justify-between">
        <Link href="/api">
          <a className="underline font-bold">Developer Api</a>
        </Link>

        <button
          type="button"
          className=" bg-blue-600 text-white px-2 py-1 rounded shadow-md hover:bg-blue-500 active:text-black active:bg-blue-300 hover:ring-2 ring-blue-700  "
          onClick={handleClick}
        >
          Refresh
        </button>
      </div>

      <div className=" text-left p-6 mt-5 rounded-lg bg-slate-300">
        {isFetching ? (
          <pre>Fetching...</pre>
        ) : (
          <pre>&ldquo;{data?.row.quote}&rdquo;</pre>
        )}
      </div>
    </div>
  );
}
