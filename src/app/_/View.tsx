import React, { use } from "react";

export const View = ({ promise }: { promise: Promise<string> }): React.ReactNode => {
  const message = use(promise);

  return (
    <p>{message}</p>
  )
}
