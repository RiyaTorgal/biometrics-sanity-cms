import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",

  fields: [
    // HERO
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroCtaLabel",
      title: "Hero CTA Label",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),

    // ABOUT
    defineField({
      name: "aboutTitle",
      title: "About Title",
      type: "string",
    }),
    defineField({
      name: "aboutSubtitle1",
      title: "About Subtitle 1",
      type: "string",
    }),
    defineField({
      name: "aboutBody1",
      title: "About Body 1",
      type: "text",
    }),
    defineField({
      name: "aboutSubtitle2",
      title: "About Subtitle 2",
      type: "string",
    }),
    defineField({
      name: "aboutBody2",
      title: "About Body 2",
      type: "text",
    }),
    defineField({
      name: "heroTagline",
      title: "Hero Tagline",
      type: "string",
    }),

    // LEADERSHIP
    defineField({
      name: "leadershipName",
      title: "Leadership Name",
      type: "string",
    }),
    defineField({
      name: "leadershipTitle",
      title: "Leadership Title",
      type: "string",
    }),
    defineField({
      name: "leadershipSubtitle",
      title: "Leadership Subtitle",
      type: "string",
    }),
    defineField({
      name: "leadershipBio1",
      title: "Leadership Bio 1",
      type: "text",
    }),
    defineField({
      name: "leadershipBio2",
      title: "Leadership Bio 2",
      type: "text",
    }),
    defineField({
      name: "leadershipPhoto",
      title: "Leadership Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});