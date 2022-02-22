import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../themes/Layout";
import BlogPrev from "../components/BlogPrev";
export default function Blog({ posts }) {
  return (
    <Layout
      pageTitle="Blog - Mohamed Achaq"
      description="Blog Page for Achaq Codes"
      siteName="Achaq Codes"
    >
      <section
        id="Blog"
        className="container h-screen px-12 justify-center items-center "
      >
        <div className="w-full text-black dark:text-white pt-16 text-center">
          <h1 className="text-2xl mb-4">Blog</h1>
          <h2 className="text-lg">Check out my blog post !</h2>
        </div>
        <div className=" flex justify-start items-center flex-col  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-4 md:mx-4 lg:mx-8 mt-8 justify-center items-start  ">
            {posts
              .sort(
                (a, b) =>
                  Number(new Date(b.frontMatter.date)) -
                  Number(new Date(a.frontMatter.date))
              )
              .map((post, index) => (
                <Link href={"/blog/" + post.slug} passHref key={index}>
                  <a>
                    <BlogPrev
                      title={post.frontMatter.title}
                      description={post.frontMatter.description}
                      image={post.frontMatter.thumbnailUrl}
                      date={post.frontMatter.date}
                      readTime={post.frontMatter.readTime}
                    />
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
