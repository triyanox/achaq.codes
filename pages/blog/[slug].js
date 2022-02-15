import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Achaq from "../../assets/achaq.png";
import highlighter from "../../components/SyntaxHighlighter";
import Imagecomponent from "../../components/ImageComponent";
import BlogLayout from "../../Themes/BlogLayout";
export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const PostPage = ({
  frontMatter: {
    link,
    tags,
    thumbnailUrl,
    title,
    description,
    date,
    author,
    readTime,
  },
  mdxSource,
}) => {
  return (
    <BlogLayout
      pageTitle={title}
      description={description}
      siteName="Achaq Codes"
      thumbnailUrl={thumbnailUrl}
      title={title}
      author={author}
      tags={tags}
      link={`https://achaq.codes/blog/${link}`}
    >
      <article className="mx-auto mt-16 px-8 mb-20 prose lg:prose-md dark:prose-invert">
        <div className="flex flex-col items-start mt-12">
          <h1 className="text-2xl text-satrt bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text">
            {title}
          </h1>
          <div className="text-xs md:text-sm text-satrt text-gray-800 dark:text-gray-100 mb-12 flex justify-between gap-8 w-full px-2">
            <div className="flex flex-row justify-center">
              <Image
                className="rounded-full"
                src={Achaq}
                width={20}
                height={20}
                alt="Mohamed Achaq"
              />
              <span className="text-satrt text-gray-800 dark:text-gray-300 ml-4">
                {author}
              </span>
            </div>
            <div>
              <span className=" text-satrt text-gray-800 dark:text-gray-300 ">
                {date}
              </span>
              <span className="text-satrt text-gray-800 dark:text-gray-300 ml-4">
                {readTime + " min read"}
              </span>
            </div>
          </div>
        </div>
        <MDXRemote
          {...mdxSource}
          components={{ highlighter, Imagecomponent }}
        />
      </article>
    </BlogLayout>
  );
};

export default PostPage;