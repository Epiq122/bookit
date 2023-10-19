"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h2 className="display-4 fw-bold">{error?.message}</h2>
          <p className="fs-3">
            <span className="text-danger">Oops!</span>
            An unexpected error occurred.
          </p>
          <div className="lead">Sorry about that</div>
          <button className="btn btn-primary" onClick={() => reset?.()}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
