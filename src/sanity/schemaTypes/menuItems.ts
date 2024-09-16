import { defineType, defineField } from "sanity";

export const menuItems = defineType({
    name: "menuItems",
    title: "Menu Items",
    type: "document",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string"
        }),
        defineField({
            title: "Is Button",
            name: "isButton",
            type: "boolean"
        }),
        defineField({
            title: "Sub Menu Items",
            name: "subMenuItems",
            type: "array",
            of: [{ type: "reference", to: [{ type: "subMenuItems" }] }]
        })
    ]
});
