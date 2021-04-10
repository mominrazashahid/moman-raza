import { invokeApi } from "../../bl_libs/invokeApi";

export const FetchTypeOfCLientList = () => {
  let requestObj = {
    path: "/api/type_of_client_served/list_type_of_client_served",
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};

export const DeleteTypeOfClient = id => {
  let requestObj = {
    path: `/api/type_of_client_served/delete_type_of_client_served/${id}`,
    method: "DELETE",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};
export const AddTypeOfClient = data => {
  let requestObj = {
    path: `/api/type_of_client_served/add_type_of_client_served`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  requestObj["postData"] = data;
  return invokeApi(requestObj);
};

export const DetailTypeOfClient= id =>{
    let requestObj = {
        path: `/api/type_of_client_served/detail_type_of_client_served/${id}`,
        method: "GET",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      return invokeApi(requestObj);
}
export const EditTypeOfClient= (data,id)=>{
    let requestObj = {
        path: `/api/type_of_client_served/edit_type_of_client_served/${id}`,
        method: "PUT",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      requestObj["postData"] = data;
      return invokeApi(requestObj);
}
