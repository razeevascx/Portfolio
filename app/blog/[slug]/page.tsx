import { getBlogPostBySlug, getBlogPosts } from "@/lib/notion/blog";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { useMDXComponents } from "@/mdx-components";
import Image from "next/image";
import * as motion from "motion/react-client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ShareButton from "@/components/ui/ShareButton";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  const description = post.excerpt || post.content.substring(0, 160);
  const canonical = `https://rajeevpuri.com.np/blog/${post.slug}`;

  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Rajeev Puri"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
    },
  } as any;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function normalizeRawTables(markdown: string): string {
  return markdown.replace(
    /<table([^>]*)>([\s\S]*?)<\/table>/g,
    (fullMatch, tableAttributes, tableContent) => {
      if (/<tbody|<thead|<tfoot/i.test(tableContent)) {
        return fullMatch;
      }

      return `<table${tableAttributes}><tbody>${tableContent}</tbody></table>`;
    },
  );
}

export default async function BlogPostPage(props: Readonly<BlogPostPageProps>) {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const markdown = normalizeRawTables(post.content);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const components = useMDXComponents();

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.content.substring(0, 160),
    datePublished: post.publishedDate,
    author: { "@type": "Person", name: "Rajeev Puri" },
    mainEntityOfPage: `https://rajeevpuri.com.np/blog/${post.slug}`,
    keywords: post.tags.join(", ") || undefined,
  };

  const canonicalUrl = `https://rajeevpuri.com.np/blog/${post.slug}`;

  return (
    <Container
      className="pt-6  px-8 mx-auto max-w-4xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <article className="flex flex-col lg:flex-row gap-12 relative items-start">
        <motion.div
          variants={itemVariants}
          className="blog-content border-border text-foreground-secondary leading-relaxed font-light prose prose-invert prose-a:text-blue-400 prose-a:no-underline prose-a:transition-colors prose-a:hover:text-blue-500 max-w-none"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center justify-between flex-wrap gap-4"
          >
            <Breadcrumb className="text-lg">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <ShareButton
              pageContent={post.excerpt || post.title}
              pageUrl={canonicalUrl}
            />
          </motion.div>

          <header className="mb-5">
            <motion.h1
              variants={itemVariants}
              className="text-foreground text-4xl md:text-5xl lg:text-6xl  font-geist font-extrabold tracking-tight "
            >
              {post.title}
            </motion.h1>
            <motion.div variants={itemVariants} className="flex flex-wrap ">
              <div className=" mt-4 mb-4 items-center gap-2 group transition-colors hover:text-foreground font-medium flex  text-lg text-zinc-400">
                Written by{" "}
                {post.createdByAvatar ? (
                  <Image
                    src={post.createdByAvatar}
                    alt={post.createdby}
                    width={24}
                    height={24}
                    className="rounded-full object-cover size-6"
                    unoptimized
                  />
                ) : (
                  <span className="size-6 rounded-full ">
                    {post.createdby.charAt(0)}
                  </span>
                )}
                {post.createdby}
              </div>
            </motion.div>

            {post.image && (
              <motion.div
                variants={itemVariants}
                className="relative w-full h-[50dvh] mb-8 rounded-lg overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 100vw, 100vw"
                  className="object-center object-cover rounded-lg"
                  priority
                />
              </motion.div>
            )}
          </header>

          {markdown && <MDXRemote source={markdown} components={components} />}
        </motion.div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </article>
    </Container>
  );
}
