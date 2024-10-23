import { CollectionConfig, FieldHook, Validate } from "payload";

const setFocusIdHook: FieldHook = ({ siblingData, value }) => {
  return siblingData?.focus?.toLowerCase().replace(/ /g, "-") ?? value;
};

const setProjectUriHook: FieldHook = ({ data, value }) => {
  return data?.name?.toLowerCase().replace(/ /g, "-") ?? value;
};

const nameRe = /^(?!.* {2})[a-zA-Z0-9- ]+$/;

const validateName: Validate = (val) => {
  if (val && val.match(nameRe)) {
    return true;
  }
  return "Name can only include letters, numbers, hyphens and spaces.";
};

const sanitizeName: FieldHook = ({ value }) => {
  return value.trim();
};

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
      validate: validateName,
      hooks: {
        beforeValidate: [sanitizeName],
      },
    },
    {
      name: "uri",
      type: "text",
      required: true,
      unique: true,
      hooks: {
        beforeChange: [setProjectUriHook],
      },
      admin: {
        hidden: true,
      },
      index: true,
    },
    {
      name: "isMainProject",
      type: "checkbox",
      required: true,
      defaultValue: true,
      admin: {
        description:
          "When checked, this project will show on the landing page and will be included in project galleries. When un-checked, this project will be included only in More Works.",
      },
      index: true,
    },
    {
      name: "duration",
      type: "text",
    },
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "focuses",
      type: "array",
      fields: [
        {
          name: "focus",
          type: "text",
          required: true,
          validate: validateName,
          hooks: {
            beforeValidate: [sanitizeName],
          },
        },
        {
          name: "focusId",
          label: "Focus ID",
          type: "text",
          hooks: {
            beforeChange: [setFocusIdHook],
          },
          admin: {
            hidden: true,
          },
          index: true,
          required: true,
        },
      ],
    },
    {
      name: "brief",
      type: "textarea",
    },
    {
      name: "projectImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Image displayed on the landing page for desktop users. Aspect ratio should be similar to a typical horizontal desktop display. Recommended width 3840px if 4K is supported, or 1920 if 4k support is not interesting.",
      },
    },
    {
      name: "mobileProjectImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Image displayed on the landing page for mobile users. Aspect ratio should be similar to a typical vertical phone screen. Recommended width: about 1440px.",
      },
    },
    {
      name: "projectGalleryImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description:
          "Image displayed in project galleries. Required dimension: 1280 x 1058.",
      },
    },
    {
      name: "backgroundColor",
      type: "text",
      admin: {
        description: "Anything CSS recognizes, e.g. white or #123456.",
      },
    },
    {
      name: "pageBackgroundColor",
      type: "text",
      admin: {
        description:
          "Background for the main project page. If unspecified, will use the background color entered above.",
      },
    },
    {
      name: "lightTitle",
      type: "checkbox",
      admin: {
        description:
          "Check this if the landing page should use white text instead of black text. Text are located at the top-left of the page.",
      },
    },
    {
      name: "lightHamburgerMenu",
      type: "checkbox",
      admin: {
        description:
          "Check this if the hamburger menu button should be white instead of black. Hamburger button is located at the top-right of the page on mobile.",
      },
    },
    {
      name: "imageCover",
      type: "checkbox",
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
    {
      name: "externalLink",
      type: "text",
      admin: {
        description:
          "If this is not empty, projects will link to the external link given here rather than the internal page.",
      },
    },
  ],
};
