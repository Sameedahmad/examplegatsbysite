// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: Xbdmg_vawY
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css" // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicPricingFeatureTableRow.module.css" // plasmic-import: Xbdmg_vawY/css
import Icon30Icon from "./icons/PlasmicIcon__Icon30" // plasmic-import: 4AIkExQxz/icon

export const PlasmicPricingFeatureTableRow__VariantProps = new Array("header")

export const PlasmicPricingFeatureTableRow__ArgProps = new Array(
  "name",
  "free",
  "pro",
  "team",
  "enterprise",
  "infoIcon"
)

function PlasmicPricingFeatureTableRow__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__header]: hasVariant(variants, "header", "header"),
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.box__qtTw9, {
          [sty.box__header__qtTw9UgN1M]: hasVariant(
            variants,
            "header",
            "header"
          ),
        })}
      >
        <div className={classNames(defaultcss.all, sty.box__mepxl)}>
          {p.renderPlasmicSlot({
            defaultContents: "Feature Name",
            value: args.name,
          })}
        </div>

        {false ? (
          <div className={classNames(defaultcss.all, sty.box__mxYpr)}>
            {(hasVariant(variants, "header", "header") ? false : true)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <Icon30Icon
                      className={classNames(defaultcss.all, sty.svg__ezGgz)}
                      role={"img"}
                    />
                  ),

                  value: args.infoIcon,
                })
              : null}
          </div>
        ) : null}

        <div
          data-plasmic-name={"starterBox"}
          data-plasmic-override={overrides.starterBox}
          className={classNames(defaultcss.all, sty.starterBox, {
            [sty.starterBox__header]: hasVariant(variants, "header", "header"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "???",
            value: args.free,
            className: classNames(sty.slotFree, {
              [sty.slotFree__header]: hasVariant(variants, "header", "header"),
            }),
          })}
        </div>

        <div
          className={classNames(defaultcss.all, sty.box___6COYr, {
            [sty.box__header___6COYrUgN1M]: hasVariant(
              variants,
              "header",
              "header"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "???",
            value: args.pro,
            className: classNames(sty.slotPro, {
              [sty.slotPro__header]: hasVariant(variants, "header", "header"),
            }),
          })}
        </div>

        <div
          className={classNames(defaultcss.all, sty.box__kNdEw, {
            [sty.box__header__kNdEwUgN1M]: hasVariant(
              variants,
              "header",
              "header"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "???",
            value: args.team,
            className: classNames(sty.slotTeam, {
              [sty.slotTeam__header]: hasVariant(variants, "header", "header"),
            }),
          })}
        </div>

        <div
          className={classNames(defaultcss.all, sty.box__bnx1R, {
            [sty.box__header__bnx1RUgN1M]: hasVariant(
              variants,
              "header",
              "header"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "???",
            value: args.enterprise,
            className: classNames(sty.slotEnterprise, {
              [sty.slotEnterprise__header]: hasVariant(
                variants,
                "header",
                "header"
              ),
            }),
          })}
        </div>
      </div>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "starterBox"],
  starterBox: ["starterBox"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricingFeatureTableRow__ArgProps,
      internalVariantPropNames: PlasmicPricingFeatureTableRow__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicPricingFeatureTableRow__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingFeatureTableRow"
  } else {
    func.displayName = `PlasmicPricingFeatureTableRow.${nodeName}`
  }
  return func
}

export const PlasmicPricingFeatureTableRow = Object.assign(
  // Top-level PlasmicPricingFeatureTableRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    starterBox: makeNodeComponent("starterBox"),
    // Metadata about props expected for PlasmicPricingFeatureTableRow
    internalVariantProps: PlasmicPricingFeatureTableRow__VariantProps,
    internalArgProps: PlasmicPricingFeatureTableRow__ArgProps,
  }
)

export default PlasmicPricingFeatureTableRow
/* prettier-ignore-end */
