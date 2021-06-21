// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: QBF7nr-k8Wj
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css" // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicBanner.module.css" // plasmic-import: QBF7nr-k8Wj/css
import image59CtJjRhQOmF from "./images/image59.svg" // plasmic-import: ctJJRhQOmF/picture

export const PlasmicBanner__VariantProps = new Array()

export const PlasmicBanner__ArgProps = new Array()

function PlasmicBanner__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      component={Link}
      href={"https://www.producthunt.com/posts/plasmic"}
      platform={"gatsby"}
    >
      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, sty.img)}
        role={"img"}
        src={image59CtJjRhQOmF}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__oZexG)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__aYdCb
          )}
        >
          {"We're live on Product Hunt! Join the discussion."}
        </div>
      </p.Stack>

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box__oMkyv
        )}
      >
        {"-->"}
      </div>
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBanner__ArgProps,
      internalVariantPropNames: PlasmicBanner__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicBanner__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicBanner"
  } else {
    func.displayName = `PlasmicBanner.${nodeName}`
  }
  return func
}

export const PlasmicBanner = Object.assign(
  // Top-level PlasmicBanner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicBanner
    internalVariantProps: PlasmicBanner__VariantProps,
    internalArgProps: PlasmicBanner__ArgProps,
  }
)

export default PlasmicBanner
/* prettier-ignore-end */
