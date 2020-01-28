import List from "../components/list";
import { clients, projects, experiments, contributions } from "../data/work";

export default function Page() {
  return (
    <main>
      <h1>Work</h1>

      <section>
        <h2>Clients</h2>
        <p>People I've worked with</p>
        <List data={clients} />
      </section>

      <section>
        <h2>Projects</h2>
        <p>Stuff I've built.</p>
        <List data={projects} />
      </section>

      <section>
        <h2>Contributions</h2>
        <p>Project's I've helped out on</p>
        <List data={contributions} />
      </section>

      <section>
        <h2>Experiments</h2>
        <p>Weird stuff.</p>
        <List data={experiments} />
      </section>
    </main>
  );
}
