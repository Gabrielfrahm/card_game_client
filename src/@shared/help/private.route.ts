import { GetServerSidePropsContext, PreviewData } from "next";
import { parseCookies } from "nookies";
import { ParsedUrlQuery } from "querystring";

export default function privateRoute(
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  isPrivate: boolean
) {
  const { ["eldencard"]: data } = parseCookies(ctx);
  let verifyToken: string = "";
  if (data) {
    const { token } = JSON.parse(data);
    verifyToken = token;
  }

  if (!verifyToken && isPrivate) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (verifyToken && !isPrivate) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  return null;
}
