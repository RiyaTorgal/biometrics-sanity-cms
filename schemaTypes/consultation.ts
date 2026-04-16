import { defineField, defineType } from "sanity";

export default defineType({
  name: "consultation",
  title: "Consultation",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      type: "text",
    }),

    defineField({
      name: "duration",
      type: "string",
    }),

    defineField({
      name: "mode",
      type: "string",
    }),

    defineField({
      name: "price",
      type: "string",
    }),

    defineField({
      name: "audience",
      type: "string",
    }),

    defineField({
      name: "cta",
      type: "string",
      initialValue: "Book Now",
    }),

    defineField({
      name: "thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});