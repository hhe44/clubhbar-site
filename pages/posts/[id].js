import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import remark from "remark";
import html from "remark-html";
import Date from "../../components/date";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import sanitizeHtml from "sanitize-html";
import styles from "../../styles/posts.module.scss";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.STRAPI_URL}/home`);
  const postData = await res.json();
  return {
    props: { postData },
  };
}

const Post = ({ postData }) => {

  const { asPath } = useRouter();
  const id = asPath.slice(-1);
  const post = postData.posts[id - 1];
  const { title, text, cover } = post;

  const [content, setContent] = useState({});
  useEffect(() => {
    const processRawText = async () => {
      const result = await remark().use(html).process(text);
      setContent({ result });
    };
    processRawText();
  }, [text]);
  const cleanHtml = sanitizeHtml(content.result);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <article className={styles.content}>
          <h1>{title}</h1>
          <h3>
            <Date dateString={post.create_date} />
          </h3>
          <img
            className={styles.cover} alt={`${cover.formats.large.name}`}
            src={`https://clubhbar-strapi.herokuapp.com${cover.formats.large.url}`}
          />
          <div
            className={styles.postText}
            dangerouslySetInnerHTML={{ __html: cleanHtml }}
          />
        </article>
      </div>
      <Footer />
    </>
  );
};
export default Post;
