import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

import placeholderImage from "../images/author.jpg"

import "../styles/sass/blog.scss"

const blogTemplate = ({ data }) => {
  const blog = data.contentfulBlog

  const options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="heading3">{children}</h3>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img
          src={`https:${node.data.target.fields.file["en-US"].url}`}
          alt={blog.title}
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="copy">{children}</p>
      ),
    },
    renderMark: {},
  }

  return (
    <Layout>
      <SiteMetadata
        title={`Nik Vogrinec | ${blog.title}`}
        description={blog.excerpt}
      />
      <article className="container blog-single">
        <h1>{blog.title}</h1>
        <div class="blog-single-about md:flex justify-between align-baseline py-12">
          <div className="flex items-center">
            <img
              src={placeholderImage}
              alt={blog.writter}
              className="mr-3 w-full"
            />
            <div>
              <p>written by {blog.writter}</p>
              <p>
                on {blog.date} · {blog.timeToRead} minute/s read
              </p>
            </div>
          </div>
          <div className="socials self-end ml-24 mt-3 md:ml-0 md:mt-0">
            <a href="github.com">
              <svg
                className="mr-6"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.3214 0.471924H2.67857C1.19978 0.471924 0 1.62216 0 3.0399V21.8717C0 23.2894 1.19978 24.4397 2.67857 24.4397H22.3214C23.8002 24.4397 25 23.2894 25 21.8717V3.0399C25 1.62216 23.8002 0.471924 22.3214 0.471924ZM15.4743 20.9997C15.0056 21.0799 14.8326 20.8017 14.8326 20.5717C14.8326 20.2828 14.8438 18.8062 14.8438 17.6131C14.8438 16.7785 14.5536 16.2489 14.2132 15.9707C16.2779 15.7514 18.4542 15.4785 18.4542 12.0599C18.4542 11.0862 18.0915 10.5994 17.5 9.97342C17.5949 9.74337 17.9129 8.79643 17.4051 7.56595C16.6295 7.3359 14.8549 8.52359 14.8549 8.52359C14.1183 8.32564 13.3203 8.22399 12.5335 8.22399C11.7467 8.22399 10.9487 8.32564 10.2121 8.52359C10.2121 8.52359 8.4375 7.3359 7.66183 7.56595C7.15402 8.79108 7.46652 9.73802 7.56696 9.97342C6.97545 10.5994 6.69643 11.0862 6.69643 12.0599C6.69643 15.4625 8.7779 15.7514 10.8426 15.9707C10.5748 16.2008 10.3348 16.5966 10.2511 17.1637C9.72098 17.3938 8.36495 17.7897 7.5558 16.4201C7.04799 15.5748 6.13281 15.5053 6.13281 15.5053C5.22879 15.4946 6.07143 16.051 6.07143 16.051C6.67411 16.3185 7.09821 17.3456 7.09821 17.3456C7.63951 18.9346 10.2288 18.3996 10.2288 18.3996C10.2288 19.1432 10.24 20.3523 10.24 20.5717C10.24 20.8017 10.0725 21.0799 9.59821 20.9997C5.91518 19.8173 3.33705 16.4576 3.33705 12.5307C3.33705 7.61945 7.25446 3.89054 12.3772 3.89054C17.5 3.89054 21.6518 7.61945 21.6518 12.5307C21.6574 16.4576 19.1574 19.8227 15.4743 20.9997ZM10 17.7308C9.89397 17.7522 9.79353 17.7094 9.78237 17.6399C9.77121 17.5596 9.84375 17.4901 9.94978 17.4687C10.0558 17.458 10.1562 17.5008 10.1674 17.5703C10.1842 17.6399 10.1116 17.7094 10 17.7308ZM9.46987 17.6827C9.46987 17.7522 9.38616 17.8111 9.27455 17.8111C9.15179 17.8218 9.06808 17.7629 9.06808 17.6827C9.06808 17.6131 9.15179 17.5543 9.26339 17.5543C9.36942 17.5436 9.46987 17.6024 9.46987 17.6827ZM8.70536 17.6238C8.68304 17.6934 8.57143 17.7255 8.47656 17.6934C8.37053 17.672 8.29799 17.5917 8.32031 17.5222C8.34263 17.4526 8.45424 17.4205 8.54911 17.4419C8.66071 17.474 8.73326 17.5543 8.70536 17.6238ZM8.01897 17.3349C7.96875 17.3938 7.86272 17.3831 7.77902 17.3028C7.69531 17.2333 7.67299 17.1316 7.72879 17.0835C7.77902 17.0246 7.88504 17.0353 7.96875 17.1156C8.0413 17.1851 8.0692 17.2921 8.01897 17.3349ZM7.51116 16.8481C7.46094 16.8802 7.36607 16.8481 7.30469 16.7678C7.2433 16.6876 7.2433 16.5967 7.30469 16.5592C7.36607 16.5111 7.46094 16.5485 7.51116 16.6287C7.57255 16.709 7.57255 16.8053 7.51116 16.8481ZM7.14844 16.3292C7.09821 16.3773 7.01451 16.3506 6.95312 16.2971C6.89174 16.2275 6.88058 16.1473 6.9308 16.1098C6.98103 16.0617 7.06473 16.0884 7.12612 16.1419C7.1875 16.2115 7.19866 16.2917 7.14844 16.3292ZM6.77455 15.9333C6.75223 15.9814 6.67969 15.9921 6.6183 15.9547C6.54576 15.9226 6.51228 15.8637 6.5346 15.8156C6.55692 15.7835 6.6183 15.7674 6.69085 15.7942C6.76339 15.8316 6.79688 15.8905 6.77455 15.9333Z" />
              </svg>
            </a>
            <a href="linkedin.com">
              <svg
                className="mr-6"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.2143 0.48584H1.78013C0.797991 0.48584 0 1.28744 0 2.27147V23.4669C0 24.4509 0.797991 25.2525 1.78013 25.2525H23.2143C24.1964 25.2525 25 24.4509 25 23.4669V2.27147C25 1.28744 24.1964 0.48584 23.2143 0.48584ZM7.5558 21.7144H3.85045V9.89496H7.56138V21.7144H7.5558ZM5.70312 8.28071C4.51451 8.28071 3.55469 7.32432 3.55469 6.15232C3.55469 4.98033 4.51451 4.02394 5.70312 4.02394C6.88616 4.02394 7.85156 4.98033 7.85156 6.15232C7.85156 7.32984 6.89174 8.28071 5.70312 8.28071ZM21.4453 21.7144H17.74V15.965C17.74 14.594 17.7121 12.8305 15.8147 12.8305C13.8839 12.8305 13.5882 14.3231 13.5882 15.8655V21.7144H9.88281V9.89496H13.4375V11.5092H13.4877C13.9844 10.5805 15.1953 9.60196 16.9978 9.60196C20.7478 9.60196 21.4453 12.051 21.4453 15.2353V21.7144Z" />
              </svg>
            </a>
          </div>
        </div>
        <img src={blog.headingImage.file.url} alt={blog.title} />
        {documentToReactComponents(
          blog.childContentfulBlogBodyRichTextNode.json,
          options
        )}
        <Link to="/blog">&lt; Go back</Link>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query SpecificBlog($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      timeToRead
      writter
      date(formatString: "DD.MM.YYYY")
      childContentfulBlogBodyRichTextNode {
        json
      }
      excerpt {
        excerpt
      }
      headingImage {
        file {
          url
        }
      }
    }
  }
`

export default blogTemplate
