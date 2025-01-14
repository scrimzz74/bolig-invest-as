import { defineField, defineType } from "sanity";

export const projectsType = defineType({
  name: 'project',
  title: 'Prosjekter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'blockContent',
    }),
    defineField({
      name: 'link',
      title: 'Lenke',
      type:'url',
    }),
    defineField({
      name: 'year',
      title: 'År',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Kategorier',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    })
  ]
})