import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "vhc2buxd",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

//create url
const bulider = imageUrlBuilder(client);

//access to url that image stored
export const urlFor = (source) => bulider.image(source);
