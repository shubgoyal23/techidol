import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center text-2xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="text-yellow-400 mt-8">Go To Home Page</Link>
    </div>
  );
}