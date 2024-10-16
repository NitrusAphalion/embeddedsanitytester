import { defineType, defineField } from "sanity";

export const webSdkDoc = defineType({
    name: "webSdkDoc",
    title: "Web SDK Doc",
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
