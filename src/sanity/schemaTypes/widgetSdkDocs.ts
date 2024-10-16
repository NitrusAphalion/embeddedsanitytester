import { defineType, defineField } from "sanity";

export const widgetSdkDoc = defineType({
    name: "widgetSdkDoc",
    title: "Widget SDK Doc",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"
        }),
        defineField({
            name: "order",
            type: "number",
            title: "Order"
        }),
        defineField({
            name: "pathName",
            type: "string",
            title: "Path Name"
        }),
        defineField({
            name: "parent",
            type: "string",
            title: "Parent"
        }),
        defineField({
            name: "markdown",
            type: "markdown",
            title: "Markdown"
        })
    ]
});
