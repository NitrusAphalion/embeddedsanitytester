import { title } from "process";
import { defineType, defineField } from "sanity";

export const subMenuItems = defineType({
    name: "subMenuItems",
    title: "Sub Menu Items",
    type: "document",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string"
        }),
        defineField({
            title: "Icon",
            name: "icon",
            type: "image"
        }),
        defineField({
            title: "Link",
            name: "link",
            type: "string"
        })
    ]
});
