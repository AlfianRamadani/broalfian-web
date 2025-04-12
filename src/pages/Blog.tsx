import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { createSlug } from "../utils/ParseIdSlug";
import RemoveTags from "../utils/RemoveTags";

function Blog() {
  return (
    <>
      <Navbar />
      <div className="bg-[#161513] text-white">
        <section className=" px-7 md:px-14 py-24">
          <div className="container mx-auto ">
            <h1 className="font-inter font-semibold text-3xl md:text-4xl">
              <span className="mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                Blog and Articles
              </span>
            </h1>
            <div className="flex flex-col  gap-10 mt-2">
              <div>
                <button
                  type="button"
                  onClick={() => fetchBlogData()}
                  className="btn min-h-5 h-5 md:min-h-7 md:h-7 m-1 btn-accent btn-outline"
                >
                  All
                </button>
                {data.categories?.map((item, index) => (
                  <button
                    type="button"
                    onClick={() => changeCategory(item.category)}
                    key={index}
                    className="btn min-h-5 h-5 md:min-h-7 md:h-7 m-1 btn-accent btn-outline"
                  >
                    {item.category}
                  </button>
                ))}
              </div>

              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}

              <div className="grid md:grid-cols-3 gap-5 px-3">
                {data.posts?.length > 0
                  ? data.posts.map((item) => {
                      const slug = createSlug(item.title);
                      return (
                        <div
                          key={item.id}
                          className="card bg-base-100 shadow-xl text-black hover:scale-[1.05] duration-500 z-0 "
                        >
                          <figure className="min-w-full h-[17rem]">
                            <Link to={`/post/${item.id}-${slug}`}>
                              <img
                                className="h-full w-full"
                                src={
                                  item.featured_image ||
                                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                }
                                alt={item.title}
                              />
                            </Link>
                          </figure>
                          <div className="card-body bg-slate-200">
                            <h2 className="card-title">
                              <Link to={`/post/${item.id}-${slug}`}>
                                {item.title}
                              </Link>
                            </h2>

                            <div className="flex gap-2">
                              {item.categories.map((category) => (
                                <Link
                                  key={category.id}
                                  className="badge badge-outline"
                                  to={`/category/${category.category}`}
                                >
                                  {category.category}
                                </Link>
                              ))}
                            </div>

                            <p className="text-gray-500">
                              {/* {item.content.slice(0, 150) + "..."} */}
                              {RemoveTags(item.content).slice(0, 150) + "..."}
                            </p>
                            <Link
                              to={`/post/${item.id}-${slug}`}
                              className="btn btn-outline"
                            >
                              Read more
                            </Link>
                            <div className="card-actions justify-end"></div>
                          </div>
                        </div>
                      );
                    })
                  : !loading && <p>No posts available.</p>}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
