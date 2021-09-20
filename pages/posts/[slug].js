import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import remark from "remark";
import remarkHtml  from "remark-html";
import remarkUnwrapImages from 'remark-unwrap-images'
import Date from "../../components/date";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
// import sanitizeHtml from "sanitize-html";
import styles from "../../styles/posts.module.scss";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.STRAPI_URL}/posts`);
  const postData = await res.json();
  return {
    props: { postData },
  };
}

const Post = ({ postData }) => {

  const { asPath } = useRouter();
  const slug = asPath.split("/").at(-1);
  const post = postData.find((post) => post.slug == slug);
  const { title, text, cover } = post;

  const [content, setContent] = useState({});
  const processRawText = async () => {
    const result = await remark()
      .use(remarkUnwrapImages)
      .use(remarkHtml)
      .process(text);
    setContent({ result });
  };
  useEffect(() => {
    processRawText();
  }, [text]);
  const postHtml = content.result || "<h1>Loading...</h1>";

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
            <Date dateString={post.created_at} />
          </h3>
          <img
            className={styles.cover}
            alt={`${cover.formats.large.name}`}
            src={`${cover.formats.large.url}`}
          />
          <div
            className={styles.postText}
            dangerouslySetInnerHTML={{ __html: postHtml }}
          />
        </article>
      </div>
      <Footer />
    </>
  );
};
export default Post;