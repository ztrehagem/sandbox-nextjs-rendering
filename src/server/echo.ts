"use server";

export const echo = async (message: string): Promise<string> => {
  console.log("start echo()");

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log("resolving echo()");
      resolve(message);
    }, 1000);
  });
}
