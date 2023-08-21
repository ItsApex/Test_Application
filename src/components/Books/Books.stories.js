import { Books } from ".";

export default {
  title: "Components/Books",
  component: Books,
  argTypes: {
    property1: {
      options: ["var-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "var-2",
    className: {},
    groupClassName: {},
    divClassName: {},
    plusSolidClassName: {},
    plusSolid: "https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-9.svg",
  },
};
