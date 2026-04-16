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
      name: "date",
      title: "Date",
      type: "date",
    }),

    defineField({
      name: "instructor",
      type: "string",
    }),

    defineField({
      name: "duration",
      type: "string",
    }),

        defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    
    defineField({
      name: "idealFor",
      title: "Ideal For",
      type: "string",
    }),

    defineField({
      name: "priceNote",
      title: "Price Note",
      type: "string",
    }),

    defineField({
      name: "content",
      type: "array",
      of: [{ type: "string" }],
    }),

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