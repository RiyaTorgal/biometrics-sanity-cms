import { defineField, defineType } from "sanity";

export default defineType({
  name: "lecture",
  title: "Lecture",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
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
      name: "instructor",
      title: "Instructor",
      type: "string",
    }),

    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
    }),

    defineField({
      name: "content",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "mode",
      title: "Mode",
      type: "string",
      options: {
        list: ["Online", "Offline", "Hybrid"],
      },
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
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});