import { getAPIClient } from "@/@shared/lib/http";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Home() {
  return (
    <div>
      <h1>dale</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const apiClient = getAPIClient(ctx);
  const { ["eldencard"]: data } = parseCookies(ctx);
  const { token } = JSON.parse(data);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // await apiClient.get("/login");

  return {
    props: {},
  };
};
