import { defineType, defineField } from "sanity";

export const heroBlock = defineType({
    name: "heroBlock",
    title: "Hero Block",
    type: "document",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string"
        }),
        defineField({
            title: "Supertext",
            name: "supertext",
            type: "string"
        }),
        defineField({
            title: "Headline",
            name: "headline",
            type: "string"
        }),
        defineField({
            title: "Body",
            name: "body",
            type: "markdown"
        }),
        defineField({
            title: "Link",
            name: "link",
            type: "array",
            of: [{ type: "reference", to: [{ type: "subMenuItems" }] }]
        }),
        defineField({
            title: "Block Card",
            name: "blockCard",
            type: "array",
            of: [{ type: "reference", to: [{ type: "blockCard" }] }]
        })
    ]
});
