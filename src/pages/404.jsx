import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components";

function NotFoundPage() {
  return (
    <Layout pageTitle="Page not found">
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
}

export default NotFoundPage;
