import { defineField, defineType } from "sanity";

export default defineType({
  name: "workshop",
  title: "Workshop",
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
      name: "instructor",
      type: "string",
    }),

    defineField({
      name: "duration",
      type: "string",
    }),

    // defineField({
    //   name: "students",
    //   type: "number",
    // }),

    // defineField({
    //   name: "rating",
    //   type: "number",
    // }),

    defineField({
      name: "originalPrice",
      type: "string",
    }),

    defineField({
      name: "discountedPrice",
      type: "string",
    }),

    defineField({
      name: "discountPercent",
      type: "number",
    }),

    defineField({
      name: "includes",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});