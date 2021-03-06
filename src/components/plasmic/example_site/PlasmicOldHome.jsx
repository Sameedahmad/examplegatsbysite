// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5JPQX3dHSUEXyotTfHZPL8
// Component: rpUAC2PlBT425
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import HomeHeader from "../../HomeHeader" // plasmic-import: 3GuvlK7pn_MCC/component
import ListItem from "../../ListItem" // plasmic-import: 7759f9YNNCJJf/component
import { RadialChart } from "react-vis" // plasmic-import: E7cZu-K4eLHf7/codeComponent
import { XYPlot } from "react-vis" // plasmic-import: oNHQTc6MMh9-g/codeComponent
import { XAxis } from "react-vis" // plasmic-import: vY2aUMr2NiB28/codeComponent
import { YAxis } from "react-vis" // plasmic-import: F3UK1lEA5S6UY/codeComponent
import { VerticalBarSeries } from "react-vis" // plasmic-import: WOx8-SJp0KlTn/codeComponent
import { DynWiredButton } from "../../../../components/DynamicWired" // plasmic-import: -bOfdagYDs_C6R/codeComponent
import { DynWiredIconButton } from "../../../../components/DynamicWired" // plasmic-import: yIAq6SQb_-dhhm/codeComponent
import { Embed } from "../../../../components/Embed" // plasmic-import: 7yb8umGcRBJ21u/codeComponent
import Footer from "../../Footer" // plasmic-import: nxU3bV-6W0zuy/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_example_site.module.css" // plasmic-import: 5JPQX3dHSUEXyotTfHZPL8/projectcss
import * as sty from "./PlasmicOldHome.module.css" // plasmic-import: rpUAC2PlBT425/css

export const PlasmicOldHome__VariantProps = new Array()

export const PlasmicOldHome__ArgProps = new Array()

function PlasmicOldHome__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
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
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__fsuhS)}
          >
            <HomeHeader
              data-plasmic-name={"homeHeader"}
              data-plasmic-override={overrides.homeHeader}
              className={classNames("__wab_instance", sty.homeHeader)}
              title={"Code components"}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              hasGap={true}
              className={classNames(defaultcss.all, sty.container)}
            >
              <ListItem
                _package={"react-vis"}
                className={classNames("__wab_instance", sty.listItem__o8WV3)}
                title={"Radial Chart"}
              >
                <RadialChart
                  data-plasmic-name={"radialChart"}
                  data-plasmic-override={overrides.radialChart}
                  className={classNames("__wab_instance", sty.radialChart)}
                  data={[
                    { angle: 1 },
                    { angle: 5 },
                    { angle: 7 },
                    { angle: 12 },
                    { angle: 7 },
                  ]}
                  height={150}
                  width={150}
                />
              </ListItem>

              <ListItem
                _package={"react-vis"}
                className={classNames("__wab_instance", sty.listItem__ysWmH)}
                title={"Bar Series + XY Plot"}
              >
                {true ? (
                  <XYPlot
                    data-plasmic-name={"xyPlot"}
                    data-plasmic-override={overrides.xyPlot}
                    className={classNames("__wab_instance", sty.xyPlot)}
                    height={200}
                    width={200}
                    xDomain={[10, 50]}
                    yDomain={[0, 100]}
                  >
                    <XAxis
                      data-plasmic-name={"xAxis"}
                      data-plasmic-override={overrides.xAxis}
                      className={classNames("__wab_instance", sty.xAxis)}
                    />

                    <YAxis
                      data-plasmic-name={"yAxis"}
                      data-plasmic-override={overrides.yAxis}
                      className={classNames("__wab_instance", sty.yAxis)}
                    />

                    <VerticalBarSeries
                      data-plasmic-name={"barSeries"}
                      data-plasmic-override={overrides.barSeries}
                      barWidth={1}
                      className={classNames("__wab_instance", sty.barSeries)}
                      data={[
                        { id: 0, x: 12, y: 30 },
                        { id: 1, x: 29, y: 46 },
                        { id: 2, x: 43, y: 60 },
                        { id: 3, x: 16, y: 40 },
                        { id: 4, x: 39, y: 55 },
                        { id: 5, x: 25, y: 94 },
                        { id: 6, x: 36, y: 78 },
                        { id: 7, x: 33, y: 69 },
                      ]}
                    />
                  </XYPlot>
                ) : null}
              </ListItem>

              <ListItem
                _package={"react-wired-elements"}
                className={classNames("__wab_instance", sty.listItem__dOhMk)}
                title={"Wired Elements"}
              >
                <div className={classNames(defaultcss.all, sty.box___9KdtM)}>
                  <DynWiredButton
                    data-plasmic-name={"wiredButton"}
                    data-plasmic-override={overrides.wiredButton}
                    className={classNames("__wab_instance", sty.wiredButton)}
                  >
                    {"hello"}
                  </DynWiredButton>

                  <DynWiredIconButton
                    data-plasmic-name={"wiredIconButton"}
                    data-plasmic-override={overrides.wiredIconButton}
                    className={classNames(
                      "__wab_instance",
                      sty.wiredIconButton
                    )}
                  />
                </div>
              </ListItem>

              <ListItem
                _package={null}
                className={classNames("__wab_instance", sty.listItem__rdBe4)}
                title={"Embed"}
              >
                <div className={classNames(defaultcss.all, sty.box___1Zdsc)}>
                  <Embed
                    data-plasmic-name={"embed"}
                    data-plasmic-override={overrides.embed}
                    className={classNames("__wab_instance", sty.embed)}
                    code={
                      '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRYFrjwk3GZLI0SVbJq0miRfvd1Zq_VDQTR3pWdlt2M1aDQuER9_7iKfvOb9lGKucHVGpGhOaeeWW1l/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>'
                    }
                  />
                </div>
              </ListItem>
            </p.Stack>

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: [
    "root",
    "homeHeader",
    "container",
    "radialChart",
    "xyPlot",
    "xAxis",
    "yAxis",
    "barSeries",
    "wiredButton",
    "wiredIconButton",
    "embed",
    "footer",
  ],

  homeHeader: ["homeHeader"],
  container: [
    "container",
    "radialChart",
    "xyPlot",
    "xAxis",
    "yAxis",
    "barSeries",
    "wiredButton",
    "wiredIconButton",
    "embed",
  ],

  radialChart: ["radialChart"],
  xyPlot: ["xyPlot", "xAxis", "yAxis", "barSeries"],
  xAxis: ["xAxis"],
  yAxis: ["yAxis"],
  barSeries: ["barSeries"],
  wiredButton: ["wiredButton"],
  wiredIconButton: ["wiredIconButton"],
  embed: ["embed"],
  footer: ["footer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicOldHome__ArgProps,
      internalVariantPropNames: PlasmicOldHome__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicOldHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicOldHome"
  } else {
    func.displayName = `PlasmicOldHome.${nodeName}`
  }
  return func
}

export const PlasmicOldHome = Object.assign(
  // Top-level PlasmicOldHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeHeader: makeNodeComponent("homeHeader"),
    container: makeNodeComponent("container"),
    radialChart: makeNodeComponent("radialChart"),
    xyPlot: makeNodeComponent("xyPlot"),
    xAxis: makeNodeComponent("xAxis"),
    yAxis: makeNodeComponent("yAxis"),
    barSeries: makeNodeComponent("barSeries"),
    wiredButton: makeNodeComponent("wiredButton"),
    wiredIconButton: makeNodeComponent("wiredIconButton"),
    embed: makeNodeComponent("embed"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicOldHome
    internalVariantProps: PlasmicOldHome__VariantProps,
    internalArgProps: PlasmicOldHome__ArgProps,
  }
)

export default PlasmicOldHome
/* prettier-ignore-end */
