import { invokeApi } from "../../bl_libs/invokeApi";
export const FetchSpecialList = () => {
  let requestObj = {
    path: "/api/speciality/list_speciality",
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};

export const DeleteSPecial = id => {
  let requestObj = {
    path: `/api/speciality/delete_speciality/${id}`,
    method: "DELETE",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  return invokeApi(requestObj);
};
export const AddSpeciality = data => {
  let requestObj = {
    path: `/api/speciality/add_speciality`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  requestObj["postData"] = data;
  return invokeApi(requestObj);
};

export const DetailSpeciality= id =>{
    let requestObj = {
        path: `/api/speciality/detail_speciality/${id}`,
        method: "GET",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      return invokeApi(requestObj);
}
export const EditSpeciality= (data,id)=>{
    let requestObj = {
        path: `/api/speciality/edit_speciality/${id}`,
        method: "PUT",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      requestObj["postData"] = data;
      return invokeApi(requestObj);
}
