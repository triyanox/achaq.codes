import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../Themes/Layout";
export default function Blog({ posts }) {
  return (
    <Layout
      pageTitle="Blog | Achaq Codes"
      description="Blog Page for Achaq Codes"
      siteName="Achaq Codes"
    >
      <section
        id="Blog"
        className="container px-12 lg:px-24  flex justify-center items-center flex-col mt-8 lg:mt-12 mb-4 "
      >
        <div className=" flex justify-start items-center flex-col mt-0 lg:mt-4  ">
          <div className=" flex justify-start items-center flex-col ">
            <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text">
              Blog
            </h1>
            <h3 className="text-gray-400 dark:text-gray-400 mb-2 text-center">
              Check out my posts !
            </h3>
          </div>

          <div className="grid grid-cols-1  gap-4 mx-2 mt-8 justify-center items-start p-4 ">
            {posts.sort(
      (a, b) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    ).map((post, index) => (
              <Link href={"/blog/" + post.slug} passHref key={index}>
                <div className="w-full cursor-pointer">
                  <h1 className="text-xl md:text-2xl text-satrt bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text mb-2">
                    {post.frontMatter.title}
                  </h1>
                  <div className="text-sm md:text-lg text-satrt text-gray-800 dark:text-gray-100 mb-8">
                    <p>{post.frontMatter.description}</p>
                    <span className="text-sm text-satrt text-gray-800 dark:text-gray-300 ">
                      {post.frontMatter.date}
                    </span>
                    <span className="text-sm text-satrt text-gray-800 dark:text-gray-300 ml-4">
                      {post.frontMatter.readTime + " min read"}
                    </span>
                  </div>
                </div>
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
  })
  return {
    props: {
      posts,
    },
  };
};
