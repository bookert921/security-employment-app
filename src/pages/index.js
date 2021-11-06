import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";

const heroText = [
  "24/7 On-Site Security Guards",
  "Locally Managed",
  "Certified Professionals",
];

export default function Home() {
  return (
    <Layout>
      <Hero heroText={heroText} />
    </Layout>
  );
}
