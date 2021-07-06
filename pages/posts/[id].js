import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Image from "next/image";
import Date from "../../components/date";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import sanitizeHtml from "sanitize-html";
import styles from "../../styles/posts.module.scss";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return { props: { postData } };
};

export default function Post({ postData }) {
  const { contentHtml, date, title, id } = postData;

  const cleanHtml = sanitizeHtml(contentHtml);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <article className={styles.content}>
          <h1>{title}</h1>
          <h3><Date dateString={date} /></h3>
          <div className={styles.imageWrap}>
            <Image
              alt={id}
              src={`/images/posts/${id}.png`}
              layout="fill"
              objectFit="cover"
              quality={50}
            />
          </div>
          <div className={styles.postText} dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        </article>
      </div>
      <Footer />
    </>
  );
}
