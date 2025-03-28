import { z } from "zod"

export const inputsDashboardForm = {
    realurl: 'realurl',
    urlsid: 'urlsid'
} as const


export const inputsDashboardFormSchema = z.object({
    realurl: z.string().url(),
    urlsid: z.string().min(4).transform((arg) => arg.replaceAll(' ', '-'))
})

export type InputsDashboardFormSchemaType = z.infer<typeof inputsDashboardFormSchema>