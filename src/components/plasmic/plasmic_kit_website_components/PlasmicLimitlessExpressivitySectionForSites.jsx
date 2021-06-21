// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: 8suVFciYp4t
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import ValuePropCardsSection from "../../ValuePropCardsSection" // plasmic-import: 3Qfldk4cSlr/component
import SmallValuePropCard from "../../SmallValuePropCard" // plasmic-import: ZsmzGgkZw2/component
import GraphicIcon from "../../GraphicIcon" // plasmic-import: TcXkT68Mp6/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen" // plasmic-import: k7xdGnvUtPZ_s/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as sty from "./PlasmicLimitlessExpressivitySectionForSites.module.css" // plasmic-import: 8suVFciYp4t/css
import Icon28Icon from "./icons/PlasmicIcon__Icon28" // plasmic-import: UIRIe6a68A/icon
import Icon14Icon from "./icons/PlasmicIcon__Icon14" // plasmic-import: dU5ansm0Xg/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15" // plasmic-import: OsdZlmfSEe/icon
import frame905PngLzSJdD5RG from "./images/frame905Png.png" // plasmic-import: lzSJdD5rG/picture
import sizePanelpng2SfmJnIzu from "./images/sizePanelpng.png" // plasmic-import: 2sfmJNIzu/picture
import frame901PngY1UxSbPn1 from "./images/frame901Png.png" // plasmic-import: Y1uxSbPn1/picture

export const PlasmicLimitlessExpressivitySectionForSites__VariantProps = new Array()

export const PlasmicLimitlessExpressivitySectionForSites__ArgProps = new Array()

function PlasmicLimitlessExpressivitySectionForSites__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  })

  return (
    <ValuePropCardsSection
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      backgrounds={"white"}
      className={classNames("__wab_instance", sty.root)}
      slot={
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__cOzTd
          )}
        >
          {"Limitless expressivity."}
        </div>
      }
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__ovmf)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__rTydU)}
        >
          <SmallValuePropCard
            data-plasmic-name={"valueA1"}
            data-plasmic-override={overrides.valueA1}
            actionButton={null}
            description={
              "Compose pages with full visual control. Add rich interactive effects and transitions."
            }
            followupLink={null}
            icon={
              <GraphicIcon
                className={classNames("__wab_instance", sty.graphicIcon__xgusp)}
                colors={"lightCoralSolid"}
              >
                <Icon28Icon
                  className={classNames(defaultcss.all, sty.svg__qmZ5G)}
                  role={"img"}
                />
              </GraphicIcon>
            }
            ltr={"ltr"}
            showcaseImage={
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__yqYnj)}
                loading={"lazy"}
                role={"img"}
                src={frame905PngLzSJdD5RG}
              />
            }
          >
            {"Make an impression."}
          </SmallValuePropCard>

          <SmallValuePropCard
            data-plasmic-name={"valueA2"}
            data-plasmic-override={overrides.valueA2}
            actionButton={null}
            className={classNames("__wab_instance", sty.valueA2)}
            description={
              <span>
                <React.Fragment>{"Use a simple but "}</React.Fragment>
                <span style={{ fontWeight: 700 }}>{"full-featured"}</span>
                <React.Fragment>
                  {
                    " layout system to easily create the exact responsive design you want."
                  }
                </React.Fragment>
              </span>
            }
            followupLink={null}
            icon={
              <GraphicIcon
                className={classNames("__wab_instance", sty.graphicIcon__ny43Y)}
                colors={"lightCoralSolid"}
              >
                <Icon14Icon
                  className={classNames(defaultcss.all, sty.svg__dRqu4)}
                  role={"img"}
                />
              </GraphicIcon>
            }
            ltr={"ltr"}
            showcaseImage={
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__l7ZhC)}
                loading={"lazy"}
                role={"img"}
                src={sizePanelpng2SfmJnIzu}
              />
            }
          >
            {"Layout for humans."}
          </SmallValuePropCard>
        </p.Stack>

        <SmallValuePropCard
          data-plasmic-name={"valueA3"}
          data-plasmic-override={overrides.valueA3}
          actionButton={null}
          className={classNames("__wab_instance", sty.valueA3)}
          description={
            "The ultimate design tool. Build with greater speed and consistency using concepts like design tokens, mixins, components, and variants."
          }
          followupLink={null}
          icon={
            <GraphicIcon
              className={classNames("__wab_instance", sty.graphicIcon__kLb2W)}
              colors={"lightCoralSolid"}
            >
              <Icon15Icon
                className={classNames(defaultcss.all, sty.svg___9O0OX)}
                role={"img"}
              />
            </GraphicIcon>
          }
          ltr={"ltr"}
          showcaseImage={
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__d3XCr)}
              loading={"lazy"}
              role={"img"}
              src={frame901PngY1UxSbPn1}
            />
          }
        >
          {"Unparalleled power at scale."}
        </SmallValuePropCard>
      </p.Stack>
    </ValuePropCardsSection>
  )
}

const PlasmicDescendants = {
  root: ["root", "valueA1", "valueA2", "valueA3"],
  valueA1: ["valueA1"],
  valueA2: ["valueA2"],
  valueA3: ["valueA3"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLimitlessExpressivitySectionForSites__ArgProps,
      internalVariantPropNames: PlasmicLimitlessExpressivitySectionForSites__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicLimitlessExpressivitySectionForSites__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicLimitlessExpressivitySectionForSites"
  } else {
    func.displayName = `PlasmicLimitlessExpressivitySectionForSites.${nodeName}`
  }
  return func
}

export const PlasmicLimitlessExpressivitySectionForSites = Object.assign(
  // Top-level PlasmicLimitlessExpressivitySectionForSites renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    valueA1: makeNodeComponent("valueA1"),
    valueA2: makeNodeComponent("valueA2"),
    valueA3: makeNodeComponent("valueA3"),
    // Metadata about props expected for PlasmicLimitlessExpressivitySectionForSites
    internalVariantProps: PlasmicLimitlessExpressivitySectionForSites__VariantProps,
    internalArgProps: PlasmicLimitlessExpressivitySectionForSites__ArgProps,
  }
)

export default PlasmicLimitlessExpressivitySectionForSites
/* prettier-ignore-end */
