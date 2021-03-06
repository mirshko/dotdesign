import SEO from "../components/seo";

function Custom404() {
  return (
    <main>
      <SEO title="404" path="/404" />

      <h1>Whoops, that page is gone.</h1>

      <div className="h-5" />

      <p>There&apos;s nothing here</p>
    </main>
  );
}

export default Custom404;
