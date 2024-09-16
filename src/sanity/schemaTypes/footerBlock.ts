import { defineType, defineField } from "sanity";

export const footerBlock = defineType({
    name: "footerBlock",
    title: "Footer Block",
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
        }),
        defineField({
            title: "Disclaimer Text",
            name: "body",
            type: "markdown"
        })
    ]
});
