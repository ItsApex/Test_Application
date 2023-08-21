import { ThisWeek } from ".";

export default {
  title: "Components/ThisWeek",
  component: ThisWeek,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    groupClassName: {},
    groupClassNameOverride: {},
    plusSolidClassName: {},
    plusSolid: "https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-6.svg",
  },
};
