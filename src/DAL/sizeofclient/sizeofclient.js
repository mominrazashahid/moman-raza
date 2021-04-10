import { invokeApi } from "../../bl_libs/invokeApi";

export const FetchSizeOfCLientList = () => {
  let requestObj = {
    path: "/api/size_of_client_served/list_size_of_client_served",
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};

export const DeleteSizeOfClient = id => {
  let requestObj = {
    path: `/api/size_of_client_served/delete_size_of_client_served/${id}`,
    method: "DELETE",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};
export const AddSizeOfClient = data => {
  let requestObj = {
    path: `/api/size_of_client_served/add_size_of_client_served`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  requestObj["postData"] = data;
  return invokeApi(requestObj);
};

export const DetailSizeOfClient= id =>{
    let requestObj = {
        path: `/api/size_of_client_served/detail_size_of_client_served/${id}`,
        method: "GET",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      return invokeApi(requestObj);
}
export const EditSizeOfClient= (data,id)=>{
    let requestObj = {
        path: `/api/size_of_client_served/edit_size_of_client_served/${id}`,
        method: "PUT",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      requestObj["postData"] = data;
      return invokeApi(requestObj);
}
