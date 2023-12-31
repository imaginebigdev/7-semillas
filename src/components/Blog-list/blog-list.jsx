/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogList = ({ blogs }) => {
  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              {blogs.map((blogItem, index) => (
                <div
                  className="item mb-80 wow fadeInUp"
                  key={blogItem.id}
                  data-wow-delay=".3s"
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <img src={blogItem.image} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <a className="date">
                              <span>
                                <i>{blogItem.date.day}</i>
                                {blogItem.date.month}
                              </span>
                            </a>

                            <span>/</span>
                            {blogItem.tags.map((tag, index) => (
                              <a className="tag">
                                <span>{tag}</span>
                              </a>
                            ))}
                          </div>
                          <h5>
                            <a>{blogItem.title}</a>
                          </h5>
                          <p className="mt-10">{blogItem.content}</p>
                          <div className="btn-more mt-30">
                            <p className="mt-10">Cliente: {blogItem.Cliente}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
