import { invokeApi } from "../../bl_libs/invokeApi";
export const FetchTitleList = () => {
  let requestObj = {
    path: "/api/title/list_title",
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};
export const DeleteTitle = id => {
  let requestObj = {
    path: `/api/title/delete_title/${id}`,
    method: "DELETE",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};

export const AddTitle = data => {
  let requestObj = {
    path: `/api/title/add_title`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  requestObj["postData"] = data;
  return invokeApi(requestObj);
};
export const DetailTitle = id => {
  let requestObj = {
    path: `/api/title/detail_title/${id}`,
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };

  return invokeApi(requestObj);
};
export const Edit_title = (data, id) => {
  let requestObj = {
    path: `/api/title/edit_title/${id}`,
    method: "PUT",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  requestObj["postData"] = data;
  return invokeApi(requestObj);
};
