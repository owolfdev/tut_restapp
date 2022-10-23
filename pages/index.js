import Link from "next/link";
import { getRandomQuote } from "../util/getRandomQuote";

export default function Home(props) {
  const qjson = JSON.stringify(props.quote, null, 2);

  return (
    <div className="container mx-auto text-center max-w-md mt-8">
      <h1 className="text-4xl">rest app</h1>
      <p>a rest service</p>

      <div className="mt-7 flex justify-between">
        <Link href="/api">
          <a className="underline font-bold">Developer Api</a>
        </Link>
        <button type="button">Refresh</button>
      </div>

      <div className=" text-left p-6 mt-5 rounded-lg bg-slate-300">
        <pre>{qjson}</pre>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const quote = await getRandomQuote();
  return {
    props: {
      quote,
    },
  };
}
