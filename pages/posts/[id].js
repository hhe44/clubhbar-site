import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import sanitizeHtml from 'sanitize-html';

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
} 

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}

export default function Post({ postData }) {
  const cleanHtml = sanitizeHtml(postData.contentHtml);
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navbar />
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </article>
      <Footer />
    </>
  )
}
