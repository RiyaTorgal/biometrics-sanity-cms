import { defineField, defineType } from "sanity";

export default defineType({
  name: "consultation",
  title: "Consultation",
  type: "document",

  fields: [
    // ─── Title ─────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),

    // ─── Description ───────────────────────────────────────
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(20),
    }),

    // ─── Duration ──────────────────────────────────────────
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'Example: "60 minutes", "1 hour"',
      validation: (Rule) => Rule.required(),
    }),

    // ─── Mode ──────────────────────────────────────────────
    defineField({
      name: "mode",
      title: "Mode",
      type: "string",
      options: {
        list: [
          { title: "Online", value: "Online" },
          { title: "Offline", value: "Offline" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    // ─── Audience ──────────────────────────────────────────
    defineField({
      name: "audience",
      title: "Target Audience",
      type: "string",
      description: "Who is this consultation for?",
      validation: (Rule) => Rule.required(),
    }),

    // ─── Price (numeric - IMPORTANT) ───────────────────────
    defineField({
      name: "price",
      title: "Price (₹)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error("Price must be greater than ₹0"),
    }),

    // ─── Price Label (UI display) ──────────────────────────
    defineField({
      name: "priceLabel",
      title: "Display Price",
      type: "string",
      description: 'Example: "₹3,500"',
    }),

    // ─── CTA Button Text ───────────────────────────────────
    defineField({
      name: "cta",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Book Now",
    }),

    // ─── Includes (bullet points) ──────────────────────────
    defineField({
      name: "includes",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1),
    }),

    // ─── Thumbnail Image ───────────────────────────────────
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],

  // ─── Preview in Sanity Studio ────────────────────────────
  preview: {
    select: {
      title: "title",
      price: "price",
      media: "thumbnail",
    },
    prepare({ title, price, media }) {
      return {
        title,
        subtitle: price ? `₹${price}` : "No price set",
        media,
      };
    },
  },
});

