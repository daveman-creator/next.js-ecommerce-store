'use client';

export default function RootError(error) {
  return (
    <div>
      Ups! something went wrong
      <p>{error.message}</p>
    </div>
  );
}
