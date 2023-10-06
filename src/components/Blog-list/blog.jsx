import React, { useState, useEffect } from "react";
import Link from "next/link";
import blog2Data from "../../data/blog2.json";

const Blog = () => {
  // Obtener los últimos 3 elementos de la lista
  const ultimosTresNoticias = blog2Data.slice(-3);

  return (
    <section className="blog-list section-padding sub-bg" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color ls2" style={{ color: "#000" }}>
                Artículos Recientes
              </h6>
              <h3>Últimas experiencias</h3>

              <Link href="/experiencia">
                <a>
                  <span>Ver Contenido</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="posts mt-80">
              {ultimosTresNoticias?.map((blogItem, index) => (
                <div
                  className="item mb-80 wow fadeInUp"
                  key={blogItem.id}
                  data-wow-delay=".3s"
                >
                  <div className="img valign">
                    <img
                      /* style={{ widt: "200px", height: "300px" }} */
                      src={blogItem.image}
                      alt=""
                    />
                  </div>

                  <div className="cont valign">
                    <div>
                      <div className="info">
                        <span style={{ color: "#ffe00e" }} className="pt-20">
                          {blogItem.date.day}
                        </span>
                        <span>/</span>
                        <span className="tag">{blogItem.Cliente}</span>
                      </div>
                      <h5>{blogItem.title}</h5>
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

export default Blog;
