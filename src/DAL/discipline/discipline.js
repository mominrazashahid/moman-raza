import { invokeApi } from "../../bl_libs/invokeApi";

export const FetchDeciplineList = () => {
  let requestObj = {
    path: "/api/discipline/list_discipline",
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};

export const AddDecipline = data => {
  let requestObj = {
    path: "/api/discipline/add_discipline",
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };

  requestObj["postData"] = data;

  return invokeApi(requestObj);
};

export const EditDecipline = (data, id) => {
  let requestObj = {
    path: `/api/discipline/edit_discipline/${id}`,
    method: "PUT",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  requestObj["postData"] = data;

  return invokeApi(requestObj);
};

export const DeleteDecipline = id => {
  let requestObj = {
    path: `/api/discipline/delete_discipline/${id}`,
    method: "DELETE",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};

export const DetailDecipline = id => {
  let requestObj = {
    path: `/api/discipline/detail_discipline/${id}`,
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};
