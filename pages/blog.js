import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../Themes/Layout";
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
        className="container px-8 lg:px-16  flex justify-center items-center flex-col mt-8 lg:mt-12 mb-4 "
      >
        <div className=" flex justify-start items-center flex-col mt-0 lg:mt-4  ">
          <div className=" flex justify-start items-center flex-col ">
            <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-[#007CF0] dark:text-[#00DFD8]">
              Blog
            </h1>
            <h3 className="text-gray-400 dark:text-gray-400 mb-2 text-center">
              Check out my posts !
            </h3>
          </div>

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
