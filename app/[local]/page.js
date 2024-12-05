import Container from "../Components/Home/Container";

export default async function page() {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return <Container photos={photos} />;
}
