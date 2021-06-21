// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: jzdXOPDUzV
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import { ThemeContext } from "./PlasmicGlobalVariant__Theme" // plasmic-import: 9MzawQbD5r/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css" // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicButtonLink.module.css" // plasmic-import: jzdXOPDUzV/css
import IconIcon from "./icons/PlasmicIcon__Icon" // plasmic-import: wTfucAc7Rr/icon

export const PlasmicButtonLink__VariantProps = new Array("type")

export const PlasmicButtonLink__ArgProps = new Array("label", "icon", "href")

function PlasmicButtonLink__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  const [isRootFocusVisible, triggerRootFocusVisibleProps] = useTrigger(
    "useFocusVisible",
    {
      isTextInput: false,
    }
  )

  const triggers = {
    focusVisible_root: isRootFocusVisible,
  }

  const globalVariants = ensureGlobalVariants({
    theme: React.useContext(ThemeContext),
  })

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root_____focusVisible]: triggers.focusVisible_root,
        [sty.root__global_theme_dark]: hasVariant(
          globalVariants,
          "theme",
          "dark"
        ),

        [sty.root__type_coralSolid]: hasVariant(variants, "type", "coralSolid"),
        [sty.root__type_cyanSolid]: hasVariant(variants, "type", "cyanSolid"),
        [sty.root__type_greenSolid]: hasVariant(variants, "type", "greenSolid"),
        [sty.root__type_iconOnly]: hasVariant(variants, "type", "iconOnly"),
        [sty.root__type_orangeFlat]: hasVariant(variants, "type", "orangeFlat"),
        [sty.root__type_pinkSolid]: hasVariant(variants, "type", "pinkSolid"),
        [sty.root__type_purpleFlat]: hasVariant(variants, "type", "purpleFlat"),
        [sty.root__type_purpleOutline]: hasVariant(
          variants,
          "type",
          "purpleOutline"
        ),

        [sty.root__type_purpleOutline____focusVisible]:
          hasVariant(variants, "type", "purpleOutline") &&
          triggers.focusVisible_root,
        [sty.root__type_purpleSolid]: hasVariant(
          variants,
          "type",
          "purpleSolid"
        ),

        [sty.root__type_rightIcon]: hasVariant(variants, "type", "rightIcon"),
        [sty.root__type_tealFlat]: hasVariant(variants, "type", "tealFlat"),
        [sty.root__type_white]: hasVariant(variants, "type", "white"),
        [sty.root__type_withShadow]: hasVariant(variants, "type", "withShadow"),
        [sty.root__type_withShadow_type_orangeFlat]:
          hasVariant(variants, "type", "withShadow") &&
          hasVariant(variants, "type", "orangeFlat"),
        [sty.root__type_withShadow_type_tealFlat]:
          hasVariant(variants, "type", "withShadow") &&
          hasVariant(variants, "type", "tealFlat"),
      })}
      component={Link}
      href={args.href !== undefined ? args.href : "#"}
      platform={"gatsby"}
      data-plasmic-trigger-props={[triggerRootFocusVisibleProps]}
    >
      {(hasVariant(variants, "type", "iconOnly") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Link",
            value: args.label,
            className: classNames(sty.slotLabel, {
              [sty.slotLabel__type_coralSolid]: hasVariant(
                variants,
                "type",
                "coralSolid"
              ),

              [sty.slotLabel__type_cyanSolid]: hasVariant(
                variants,
                "type",
                "cyanSolid"
              ),

              [sty.slotLabel__type_greenSolid]: hasVariant(
                variants,
                "type",
                "greenSolid"
              ),

              [sty.slotLabel__type_iconOnly]: hasVariant(
                variants,
                "type",
                "iconOnly"
              ),

              [sty.slotLabel__type_orangeFlat]: hasVariant(
                variants,
                "type",
                "orangeFlat"
              ),

              [sty.slotLabel__type_pinkSolid]: hasVariant(
                variants,
                "type",
                "pinkSolid"
              ),

              [sty.slotLabel__type_purpleFlat]: hasVariant(
                variants,
                "type",
                "purpleFlat"
              ),

              [sty.slotLabel__type_purpleOutline]: hasVariant(
                variants,
                "type",
                "purpleOutline"
              ),

              [sty.slotLabel__type_purpleSolid]: hasVariant(
                variants,
                "type",
                "purpleSolid"
              ),

              [sty.slotLabel__type_tealFlat]: hasVariant(
                variants,
                "type",
                "tealFlat"
              ),

              [sty.slotLabel__type_white]: hasVariant(
                variants,
                "type",
                "white"
              ),
            }),
          })
        : null}
      {(
        hasVariant(variants, "type", "rightIcon")
          ? true
          : hasVariant(variants, "type", "iconOnly")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(defaultcss.all, sty.svg__rg9Bg)}
                role={"img"}
              />
            ),

            value: args.icon,
            className: classNames(sty.slotIcon, {
              [sty.slotIcon__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),

              [sty.slotIcon__type_iconOnly]: hasVariant(
                variants,
                "type",
                "iconOnly"
              ),

              [sty.slotIcon__type_purpleOutline]: hasVariant(
                variants,
                "type",
                "purpleOutline"
              ),

              [sty.slotIcon__type_rightIcon]: hasVariant(
                variants,
                "type",
                "rightIcon"
              ),
            }),
          })
        : null}
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonLink__ArgProps,
      internalVariantPropNames: PlasmicButtonLink__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicButtonLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonLink"
  } else {
    func.displayName = `PlasmicButtonLink.${nodeName}`
  }
  return func
}

export const PlasmicButtonLink = Object.assign(
  // Top-level PlasmicButtonLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButtonLink
    internalVariantProps: PlasmicButtonLink__VariantProps,
    internalArgProps: PlasmicButtonLink__ArgProps,
  }
)

export default PlasmicButtonLink
/* prettier-ignore-end */