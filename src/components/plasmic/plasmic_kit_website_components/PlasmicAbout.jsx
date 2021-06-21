// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: 4hNukt77tQq
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Header from "../../Header" // plasmic-import: vtgKf8zu4R/component
import Footer from "../../Footer" // plasmic-import: 9R5YynM9KVp/component
import { ThemeContext } from "./PlasmicGlobalVariant__Theme" // plasmic-import: 9MzawQbD5r/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css" // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicAbout.module.css" // plasmic-import: 4hNukt77tQq/css
import Icon37Icon from "./icons/PlasmicIcon__Icon37" // plasmic-import: SCO2nowOyF/icon
import image63Bv8HQepak from "./images/image63.png" // plasmic-import: Bv8hQepak/picture
import image65FSl2ScVk from "./images/image65.png" // plasmic-import: fSL2-scVK/picture
import image61OrsonFc2Xn from "./images/image61.png" // plasmic-import: OrsonFC2Xn/picture
import image60B7PoB4E6BJ from "./images/image60.png" // plasmic-import: b7PoB4e6bJ/picture
import image62W6URsnNOr from "./images/image62.png" // plasmic-import: w6uRsnNOr/picture
import image66PdvRg1IvM from "./images/image66.png" // plasmic-import: PdvRG1ivM/picture
import image67UsyfhQiw from "./images/image67.png" // plasmic-import: Usyfh-QIW/picture
import image68Xq49R9Cf from "./images/image68.png" // plasmic-import: Xq_49R9cf/picture

export const PlasmicAbout__VariantProps = new Array()

export const PlasmicAbout__ArgProps = new Array()

function PlasmicAbout__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  const globalVariants = ensureGlobalVariants({
    theme: React.useContext(ThemeContext),
  })

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root,
            {
              [sty.root__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            }
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header, {
              [sty.header__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            })}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"body"}
            data-plasmic-override={overrides.body}
            hasGap={true}
            className={classNames(defaultcss.all, sty.body, {
              [sty.body__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            })}
          >
            <div className={classNames(defaultcss.all, sty.box__mdhtS)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__ptIR)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___6BJoa
                  )}
                >
                  {"Mission"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___66KzZ
                  )}
                >
                  {
                    "Democratize software creation and empower everyone to bring their ideas to life."
                  }
                </div>
              </p.Stack>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__tu3Lf)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__bN4RS,
                  {
                    [sty.box__global_theme_dark__bN4RSh5AZc]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    ),
                  }
                )}
              >
                {"Team"}
              </div>

              <div className={classNames(defaultcss.all, sty.box__u50Wx)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__gkt2T
                  )}
                >
                  {
                    "We are a merry band of engineers, designers, and dreamers from Google, Microsoft, Facebook, and Dropbox."
                  }
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__sssAh)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__chUs6
                  )}
                >
                  {
                    "We're hiring more engineers and designers. If Plasmic's mission resonates with you, say hello!"
                  }
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box___4N0Vf)}>
                <p.PlasmicLink
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.link__pHt34
                  )}
                  component={Link}
                  href={"mailto:hiring+about@plasmic.app"}
                  platform={"gatsby"}
                >
                  {"hiring@plasmic.app"}
                </p.PlasmicLink>
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__cvmx8)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__p2S1,
                  {
                    [sty.box__global_theme_dark__p2S1H5AZc]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    ),
                  }
                )}
              >
                {"Investors"}
              </div>

              <div className={classNames(defaultcss.all, sty.box__wbGpJ)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___70Bng
                  )}
                >
                  {
                    "We are proudly backed by NEA, Tiny Capital, Designer Fund, Prime Set, #Angels, Arrive, and esteemed founders and investors."
                  }
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__k6Bsq)}>
                <Icon37Icon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(defaultcss.all, sty.svg)}
                  role={"img"}
                />
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__m2L9I)}
              >
                <p.PlasmicLink
                  className={classNames(defaultcss.all, sty.link__mr1Qa)}
                  component={Link}
                  href={"https://www.tinycapital.com/"}
                  platform={"gatsby"}
                  title={"Tiny Capital"}
                >
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__cg0Uf)}
                    role={"img"}
                    src={image63Bv8HQepak}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(defaultcss.all, sty.link__kOhb2)}
                  component={Link}
                  href={"https://www.designerfund.com/"}
                  platform={"gatsby"}
                >
                  <img
                    alt={"Designer Fund"}
                    className={classNames(defaultcss.img, sty.img___1Qt78)}
                    role={"img"}
                    src={image65FSl2ScVk}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(defaultcss.all, sty.link__dlMd)}
                  component={Link}
                  href={"https://www.primeset.com/"}
                  platform={"gatsby"}
                >
                  <img
                    alt={"Prime Set"}
                    className={classNames(defaultcss.img, sty.img__kCe9C)}
                    role={"img"}
                    src={image61OrsonFc2Xn}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(defaultcss.all, sty.link___5BHbQ)}
                  component={Link}
                  href={"https://hashtagangels.com/"}
                  platform={"gatsby"}
                >
                  <img
                    alt={"#Angels"}
                    className={classNames(defaultcss.img, sty.img__zHyPm)}
                    role={"img"}
                    src={image60B7PoB4E6BJ}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(defaultcss.all, sty.link___3Qn4B)}
                  component={Link}
                  href={"https://www.arrive.co/"}
                  platform={"gatsby"}
                >
                  <img
                    alt={"Arrive"}
                    className={classNames(defaultcss.img, sty.img__uqcjV)}
                    role={"img"}
                    src={image62W6URsnNOr}
                  />
                </p.PlasmicLink>
              </p.Stack>

              {false ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__pg9Be)}
                >
                  <div className={classNames(defaultcss.all, sty.box___8HB1M)}>
                    <img
                      alt={""}
                      className={classNames(defaultcss.img, sty.img__crrEl)}
                      role={"img"}
                      src={image63Bv8HQepak}
                    />
                  </div>

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__d6XY)}
                    role={"img"}
                    src={image66PdvRg1IvM}
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__ynnW0)}
                    role={"img"}
                    src={image67UsyfhQiw}
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__r1Wy5)}
                    role={"img"}
                    src={image68Xq49R9Cf}
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___3S8Ek)}
                    role={"img"}
                    src={image62W6URsnNOr}
                  />
                </p.Stack>
              ) : null}
            </p.Stack>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer, {
              [sty.footer__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            })}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "header", "body", "svg", "footer"],
  header: ["header"],
  body: ["body", "svg"],
  svg: ["svg"],
  footer: ["footer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAbout__ArgProps,
      internalVariantPropNames: PlasmicAbout__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout"
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`
  }
  return func
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    body: makeNodeComponent("body"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,
  }
)

export default PlasmicAbout
/* prettier-ignore-end */