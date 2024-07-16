// "use client";
import { Suspense } from "react";
import { View } from "./_/View";
import { echo } from "@/server/echo";

// export const dynamic = "force-dynamic";

export default function Page() {
  console.log("component: Page");

  /** next build 時にエラー。
   * Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
   * TypeError: Failed to parse URL from /api/echo?message=hello
   */
  /** "use client" にする必要があるが、 next dev 時にもサーバサイドエラーが出ている。
   */
  // const message = fetch("/api/echo?message=hello").then((response) => response.json());

  /** next build 時、ページは Dynamic として扱われる。
   * ┌ ƒ /                                    137 B          87.2 kB
   * ├ ○ /_not-found                          871 B          87.9 kB
   * └ ƒ /api/echo                            0 B                0 B
   *
   * ○  (Static)   prerendered as static content
   * ƒ  (Dynamic)  server-rendered on demand
   */
  /** next build → next start 後、ページを開くと、一瞬 "loading" が見えたあと、サーバサイドエラーになる。
   * TypeError: Failed to parse URL from /api/echo?message=hello
   */
  /** "use client" にする必要があるが、 next dev 時にもサーバサイドエラーが出ている。
   */
  // const message = fetch("/api/echo?message=hello", { cache: "no-store" }).then((response) => response.json());

  // Server Actions の形。
  // ※ `export const dynamic = "force-dynamic";` にすると Dynamic として扱われる。
  // ※ `"use client"` にするとエラーになる。（RSCにする必要がある）
  const message = echo(new Date().toLocaleString());

  return (
    <div>
      <Suspense fallback="loading">
        <View promise={message} />
      </Suspense>
    </div>
  );
}
