import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '7up34936',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skqP6gYiztVq369qXvcgpydBvjNrKRqGOvLsbKijOplDKZyAV67rfjfqpLvYtxzCKKx3esVDIN6wlWrRDax1QphNZk0LGimxOkNB9vmUd9OI0dFnhRvMhcA0LIwVdkHFUzWqxgFgjSX8FBYa6HSWdJRbaEvIxeGswdFsvonkGFeVR01iwXhd',
  useCdn: false,
})
