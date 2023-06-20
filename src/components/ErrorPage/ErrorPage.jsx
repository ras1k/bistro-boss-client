import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  console.log(error)

  return (
    <div id="error-page">
      <div>
        <div className='mx-auto mt-20 w-96'>
          <img src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif" alt="" />
        </div>
        <div className="">
          <div className="text-center">
            <p className="text-base font-semibold text-red-700">{error.status}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-5xl">
              <i>{error.statusText || error.message}</i>
            </h1>
            <p className="mt-4 text-base leading-7 text-red-600">
              {error.data}
            </p>
            <div className="mt-4 flex items-center justify-center gap-x-3">
              <Link to='/'>
                <button type="button" className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Back to home
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}