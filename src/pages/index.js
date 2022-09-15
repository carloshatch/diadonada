import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import GrandeNada from "../images/grande-nada.jpeg"
import Icon from "../svg/nada6.svg"


const IndexPage = () => (
    <Layout>
        <Seo title="P&aacute;gina Inicial" />
        <div className="grid grid-cols-2 gap-0 place-content-center">
            <div>
                <div className={styles.logo}>
                    <Icon width="320px" height="320px" className="m-auto" />
                </div>
                <div className="clearfix text-left p-4">
                    <p className="font-bold"><span className="rounded text-white bg-black p-1">O dia do nada</span> Artes e atividades aleatórias sem propósito para celebrar coisa nenhuma.</p>
                    <p>Você já deve ter se questionado sobre como o tempo está passando rápido. Tudo é urgente. Pra ontem. O dia não rende. A semana voa. Os meses são consumidos pelo fogo do tempo alimentado pela irreflexão. Datas e eventos pelos quais você ansiava que há poucos dias pareciam distantes abruptamente tornam-se presentes e logo estão no passado.</p>
                    <p>Um novo semestre começa, já é seu aniversário, fim do ano. As redes socias trazem lembranças de eventos ocorridos há anos, mas parece que foi ontem. Você pensa: “não tenho tempo pra nada”.</p>
                    <p>Então pare e reserve um tempo para fazer nada com a gente e celebrar o dia do nada.</p>
                </div>
            </div>
            <div className="text-2xl text-black font-bold">
                <div className="clearfix">
                    <div className="text-left whitespace-nowrap">
                        #DIADONADA
                        <div className="float-right text-black font-bold text-2xl whitespace-nowrap">
                            S&Atilde;O CARLOS, SP
                        </div>
                    </div>
                </div>
                <div className="rounded border-solid border-2 border-black mt-6">
                    <div className="bg-gradient-to-b from-cyan-200 to-white p-4 text-black font-bold">
                        <div className="text-center mt-2">
                            <a href="https://music.youtube.com/playlist?list=PL7lfsHIAksg2xfrZeVHG_Z1Z0vb3sAQAK&feature=share" target="_blank" rel="noreferrer" className="rounded bg-black text-xl text-left text-white no-underline font-bold whitespace-nowrap mb-4 p-2 hover:bg-white hover:text-black hover:border-2 border-black">
                                <i className="fa-brands fa-youtube mr-2"></i>
                                Playlist do Evento
                            </a>
                        </div>
                        <hr className="mt-4" />
                        <div className="">
                            <div className="mb-2">Sobre a aus&ecirc;ncia de tudo:</div>
<iframe className="rounded w-full h-64"src="https://www.youtube.com/embed/CCGT4NzClWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <img src={GrandeNada} border="0" alt="Ilustracao mostrando o quanto somos pequenos, quase nada" />
                </div>
            </div>
        </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Dia do Nada São Carlense" />

export default IndexPage
