/* eslint-disable @next/next/no-img-element */
import React from "react";
import Services5 from "../Services5/services5";

const BlogDetailsUnidadesDeNegocio = () => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/single.jpg" className="img-full" alt="" />
                <img src="/img/blog/single2.jpg" className="img-phone" alt="" />
              </div>
              <Services5 />
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                        Nuestra organización se basa en las siguientes cuatro
                        unidades de negocio.
                      </h4>
                      <br />
                      <div className="spacial" id="logistic">
                        <h6>SERVICIOS PETROLEROS Y LOGISTICA</h6>
                        <br />
                        <ul>
                          <li>
                            <span>•</span> Transporte de cargas petroleras, DTM
                            para equipos de perforación (drilling), terminación
                            (workover) y pulling
                          </li>
                          <li>
                            <span>•</span> Transporte de cargas generales
                          </li>
                          <li>
                            <span>•</span> Transporte de carga de grandes
                            dimensiones
                          </li>
                          <li>
                            <span>•</span> Contamos con vehículos 4x4 para
                            realizar el mantenimiento en campo y/o vehículo guía
                          </li>
                        </ul>
                        <br />
                      </div>
                      <div className="spacial" id="explotation">
                        <h6>EXPLOTACION MINERA Y OBRAS CIVILES</h6>
                        <br />
                        <ul>
                          <li>
                            <span>•</span>Movimiento de suelo
                          </li>
                          <li>
                            <span>•</span>Construcción y diseño de rutas
                          </li>
                          <li>
                            <span>•</span>Construcción de caminos y accesos
                          </li>
                          <li>
                            <span>•</span>Construcción de bases para calles de
                            pavimentos
                          </li>
                          <li>
                            <span>•</span>Mantenimiento de rutas
                          </li>
                          <li>
                            <span>•</span>Construcción de locaciones
                          </li>
                          <li>
                            <span>•</span>Construcción de pavimento de hormigón
                          </li>
                          <li>
                            <span>•</span>Montajes
                          </li>
                          <li>
                            <span>•</span>Construcción de plateas y bases de
                            hormigón
                          </li>
                          <li>
                            <span>•</span>Instalación de gas, electricidad, agua
                            y cloaca
                          </li>
                          <li>
                            <span>•</span>Provisión de hormigón elaborado
                          </li>
                          <li>
                            <span>•</span>Provisión de obradores
                          </li>
                          <li>
                            <span>•</span>Servicio de contenedores
                          </li>
                          <li>
                            <span>•</span>Provisión de mano de obra
                            especializada
                          </li>
                        </ul>
                        <br />
                      </div>
                      <div className="spacial" id="energy">
                        <h6>MAQUINAS, HERRAMIENTAS Y ENERGIAS LIMPIAS</h6>
                        <br />
                        <ul>
                          <li>
                            <span>•</span>Transportes de cargas generales
                          </li>
                          <li>
                            <span>•</span>Transporte de cargas
                            sobredimensionadas
                          </li>
                          <li>
                            <span>•</span>Equipos de pulling, workover
                          </li>
                          <li>
                            <span>•</span>Flota amarilla (movimiento de suelo,
                            apertura de caminos y locaciones)
                          </li>
                          <li>
                            <span>•</span>Equipos para reducción de consumo de
                            combustible y emisión de carbono
                          </li>
                          <li>
                            <span>•</span>Energías limpias y transportables para
                            el hogar, industria minera, petrolífera y automotor
                          </li>
                        </ul>
                        <br />
                      </div>
                      <div className="spacial" id="bussines">
                        <h6>GESTIÓN COMERCIAL Y COMERCIO EXTERIOR</h6>
                        <br />
                        <ul>
                          <li>
                            <span>•</span>Importaciones y Exportaciones
                          </li>

                          <li>
                            <span>•</span>Logística
                          </li>
                          <li>
                            <span>•</span>Estrategias de Negocios
                          </li>
                          <li>
                            <span>•</span>Búsqueda de Proveedores
                          </li>
                          <li>
                            <span>•</span>Compra de Insumos
                          </li>
                          <li>
                            <span>•</span>Maquinarias y Mercaderías
                          </li>
                        </ul>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsUnidadesDeNegocio;
