import { invokeApi } from "../../bl_libs/invokeApi";

export const FetchFeedsList = async () => {
  let requestObj = {
    path:
      "https://graph.instagram.com/creative.website?fields=id,username&access_token=IGQVJWSmx2X09fRVBwbE9DZAHNJQW5pODBIZA3UtT2tVcHJnRDFFSGJXN2xsUG1DTUI3SEJZAaHdydl91b09JeEI1ZAjRQenkwY2p0d0ZAJcThfQlMzSWlMVXcyWEpLdzRKNUNYdk1oYk1PMlhjN3ZAIMEpLSQZDZD",
    method: "GET",
  };
  return await invokeApi(requestObj);
};
