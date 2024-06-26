import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.css";
import Header from "../components/header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Yunusjon Yusupov</title>;
