import Head from "next/head";
import List from "../components/list";
import { clients, contributions, experiments, projects } from "../data";

export default function Page() {
  return (
    <main className="p-sm">
      <Head>
        <title>Portfolio | Jeff Reiner, Design Engineer</title>
        <meta name="title" content="Portfolio | Jeff Reiner, Design Engineer" />
        <meta
          property="og:title"
          content="Portfolio | Jeff Reiner, Design Engineer"
        />
        <meta
          property="twitter:title"
          content="Portfolio | Jeff Reiner, Design Engineer"
        />
      </Head>

      <h1>Portfolio</h1>

      <p className="measure mt-md">
        Cool projects and individuals I've worked with.
        <br />
        Includes both Web 2.0 and Web3 projects and experiments.
      </p>

      <section className="mt-lg">
        <h2 className="mb-sm">Clients</h2>
        <p className="measure-tight mb-sm">
          Companies and individuals I've had the pleasure to work with to build
          some pretty cool things.
        </p>
        <List data={clients} />
      </section>

      <section className="mt-lg">
        <h2 className="mb-sm">Projects</h2>
        <p className="measure-tight mb-sm">
          My pride and joy; apps I've built and am working on with some of the
          best people around.
        </p>
        <List data={projects} />
      </section>
    </main>
  );
}
