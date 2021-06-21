// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: AapVVGU4iu
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import Linky from "../../Linky" // plasmic-import: EDH0JqEGKc/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css" // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicPriceTier.module.css" // plasmic-import: AapVVGU4iu/css

export const PlasmicPriceTier__VariantProps = new Array()

export const PlasmicPriceTier__ArgProps = new Array(
  "title",
  "price",
  "valueProps",
  "children",
  "subprice"
)

function PlasmicPriceTier__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__fhEe6)}
      >
        <div className={classNames(defaultcss.all, sty.box__kftjm)}>
          {p.renderPlasmicSlot({
            defaultContents: "Starter",
            value: args.title,
            className: classNames(sty.slotTitle),
          })}

          {p.renderPlasmicSlot({
            defaultContents: "Free",
            value: args.price,
            className: classNames(sty.slotPrice),
          })}

          {p.renderPlasmicSlot({
            defaultContents: "per user/month",
            value: args.subprice,
            className: classNames(sty.slotSubprice),
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: "✓ List of value props\n✓ It's so cool",
          value: args.valueProps,
          className: classNames(sty.slotValueProps),
        })}
      </p.Stack>

      <div
        data-plasmic-name={"ctaLink"}
        data-plasmic-override={overrides.ctaLink}
        className={classNames(defaultcss.all, sty.ctaLink)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Linky
              className={classNames("__wab_instance", sty.linky___407Uc)}
              style={["purpleSolid"]}
            />
          ),

          value: args.children,
        })}
      </div>
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root", "ctaLink"],
  ctaLink: ["ctaLink"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPriceTier__ArgProps,
      internalVariantPropNames: PlasmicPriceTier__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicPriceTier__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceTier"
  } else {
    func.displayName = `PlasmicPriceTier.${nodeName}`
  }
  return func
}

export const PlasmicPriceTier = Object.assign(
  // Top-level PlasmicPriceTier renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    ctaLink: makeNodeComponent("ctaLink"),
    // Metadata about props expected for PlasmicPriceTier
    internalVariantProps: PlasmicPriceTier__VariantProps,
    internalArgProps: PlasmicPriceTier__ArgProps,
  }
)

export default PlasmicPriceTier
/* prettier-ignore-end */
