import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "uri",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "Usually, take project name, convert all letters to lowercase, and convert space to -.",
      },
      index: true,
    },
    {
      name: "duration",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "focuses",
      type: "array",
      required: true,
      fields: [
        {
          name: "focus",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "brief",
      type: "textarea",
      required: true,
    },
    {
      name: "projectImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description:
          "Image displayed on the landing page for desktop users. Aspect ratio should be similar to a typical horizontal desktop display. Recommended width 3840px if 4K is supported, or 1920 if 4k support is not interesting.",
      },
    },
    {
      name: "mobileProjectImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description:
          "Image displayed on the landing page for mobile users. Aspect ratio should be similar to a typical vertical phone screen. Recommended width: about 1440px.",
      },
    },
    {
      name: "backgroundColor",
      type: "text",
      required: true,
      admin: {
        description: "Anything CSS recognizes, e.g. white or #123456.",
      },
    },
    {
      name: "pageBackgroundColor",
      type: "text",
      required: false,
      admin: {
        description:
          "Background for the main project page. If unspecified, will use the background color entered above.",
      },
    },
    {
      name: "lightTitle",
      type: "checkbox",
      required: true,
      admin: {
        description:
          "Check this if the landing page should use white text instead of black text. Text are located at the top-left of the page.",
      },
    },
    {
      name: "lightHamburgerMenu",
      type: "checkbox",
      required: true,
      admin: {
        description:
          "Check this if the hamburger menu button should be white instead of black. Hamburger button is located at the top-right of the page on mobile.",
      },
    },
    {
      name: "imageCover",
      type: "checkbox",
      required: true,
      admin: {
        description:
          "Check this if this project needs a white cover displayed beneath the text and on top of the image.",
      },
    },
    {
      name: "awardImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "A small image for the award that this project has received.",
      },
    },
  ],
};
