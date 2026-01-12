export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Understanding Docker Isolation</h1>

      <p>
        Docker runs applications inside isolated containers.
        This isolation helps protect applications from unwanted changes
        and ensures consistency across systems.
      </p>

      <p>
        This Next.js application is running inside a Docker container.
      </p>
    </main>
  );
}