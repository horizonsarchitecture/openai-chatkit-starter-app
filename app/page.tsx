import App from "./App";
import AccessDenied from "@/components/AccessDenied";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const token = params.token;
  const expectedToken = process.env.TOKEN;

  // If TOKEN env var is set, validate the token parameter
  if (expectedToken) {
    const isValidToken = token === expectedToken;

    if (!isValidToken) {
      return <AccessDenied />;
    }
  }

  return <App />;
}
