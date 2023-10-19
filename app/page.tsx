import Home from "@/components/Home";
import Error from "@/app/error";

export const metadata = {
  title: "Homepage - BookIT",
};

async function getRooms() {
  const res = await fetch(`${process.env.API_URL}/rooms`);
  return res.json();
}

export default async function HomePage() {
  const data = await getRooms();
  if (data?.message) {
    return <Error error={data} />;
  }
  return <Home data={data} />;
}
