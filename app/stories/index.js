import React from "react";
import { storiesOf, addDecorator } from "@kadira/storybook";
import { withKnobs, text, boolean, number, array, select } from "@kadira/storybook-addon-knobs";
import withReadme from "storybook-readme/with-readme";

import NestedListReadme from "@appbaseio/reactivemaps-manual/docs/v1/components/NestedList.md";
import ToggleButtonReadme from "@appbaseio/reactivemaps-manual/docs/v1/components/ToggleButton.md";
import RangeSliderReadme from "@appbaseio/reactivemaps-manual/docs/v1/components/RangeSlider.md";

import NestedListDefault from "./NestedList.stories";
import ToggleListDefault from "./ToggleList.stories";
import DynamicRangeSliderDefault from "./DynamicRangeSlider.stories";

require("../../node_modules/materialize-css/dist/css/materialize.min.css");
require("../../dist/css/style.min.css");

function removeFirstLine(str) {
	return str.substring(str.indexOf("\n") + 1);
}

storiesOf("NestedList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault />
	)))
	.add("With Title", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			title={text("title", "Car Category")}
		/>
	)))
	.add("Default selection", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			defaultSelected={["bmw", "x series"]}
		/>
	))).add("Playground", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			title={text("title", "NestedList: Car Filter")}
			size={number("size", 100)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
			showCount={boolean("showCount", true)}
			showSearch={boolean("showSearch", true)}
			placeholder={text("placeholder", "Search Cars")}
		/>
	)));

storiesOf("ToggleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault defaultSelected={["Social"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault
			title={text("title", "ToggleList: Meetup Categories")}
			multiSelect={boolean("multiSelect", true)}
			defaultSelected={array("defaultSelected", ["Social", "Travel"])}
		/>
	)));

storiesOf("DynamicRangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault />
	)))
	.add("Without histogram", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			showHistogram={false}
		/>
	)))
	.add("With RangeLabels", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			rangeLabels={(min, max) => ({ start: min, end: max })}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			title={text("title", "DynamicRangeSlider: Guest RSVPs")}
			stepValue={number("stepValue", 1)}
			showHistogram={boolean("showHistogram", true)}
		/>
	)));
