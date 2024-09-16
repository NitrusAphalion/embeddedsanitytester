import { defineType, defineField } from "sanity";

export const headerBlock = defineType({
    name: "headerBlock",
    title: "Header Block",
    type: "document",
    options: {
        singleton: true
    },
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string"
        }),
        defineField({
            title: "Menu Items",
            name: "menuItems",
            type: "array",
            of: [{ type: "reference", to: [{ type: "menuItems" }] }]
        })
    ]
});
