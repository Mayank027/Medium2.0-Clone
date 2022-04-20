import {
    createCurrentUserHook,
    
} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'
import createClient from '@sanity/client';
// import sanityClient from '@sanity/client';

export const config = ({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1bt1t52i",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-10-21",

    useCdn: process.env.NODE_ENV === "production",
});

// Set up the client for fetching data in the getProps page functions 
export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);

// projectId: "1bt1t52i",
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",