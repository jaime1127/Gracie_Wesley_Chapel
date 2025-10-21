import request from "graphql-request";
import {
  GetBentoQuery,
  GetCarouselQuery,
  GetHeroQuery,
  GetLayoutQuery,
  GetPromoQuery,
  GetImageListQuery,
  GetInstructorQuery,
  GetNewContentPageQuery,
} from "@/app/ui/components/generated/gql/types";

import {
  bentoQuery,
  carouselQuery,
  heroQuery,
  imageListQuery,
  instructorQuery,
  newContentPageQuery,
  promoQuery,
} from "@/app/ui/components/content/gql";

import { layoutQuery } from "@/app/ui/components/layout/gql";

const HYGRAPH_API_ENDPOINT =
  process.env.HYGRAPH_API_ENDPOINT || "https://default-endpoint.com";

export const fetchHeroData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, heroQuery, <
      GetHeroQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error;
  }
};

export const fetchCarouselData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, carouselQuery, <
      GetCarouselQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching image data:", error);
    throw error;
  }
};

export const fetchPromoData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, promoQuery, <
      GetPromoQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching promo data:", error);
    throw error;
  }
};

export const fetchLayoutData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, layoutQuery, <
      GetLayoutQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching layout data:", error);
    throw error;
  }
};

export const fetchInstructorData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, instructorQuery, <
      GetInstructorQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching instructor data:", error);
    throw error;
  }
};

export const fetchImageListData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, imageListQuery, <
      GetImageListQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching image list query data:", error);
    throw error;
  }
};

export const fetchNewContentPage = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, newContentPageQuery, <
      GetNewContentPageQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching content page query data:", error);
    throw error;
  }
};

export const fetchBentoData = async (values: string) => {
  try {
    const response = await request(HYGRAPH_API_ENDPOINT, bentoQuery, <
      GetBentoQuery
    >{
      slug: values,
    });
    return response;
  } catch (error) {
    console.error("Error fetching bento data:", error);
    throw error;
  }
};
