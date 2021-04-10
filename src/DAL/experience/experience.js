import { invokeApi } from "../../bl_libs/invokeApi";

export const FetchExperienceList=async ()=>{
    let requestObj = {
        path: "/api/experience/list_experience",
        method: "GET",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      return invokeApi(requestObj);
}


export const DeleteExperience=async (id)=>{
    let requestObj = {
        path: `/api/experience/delete_experience/${id}`,
        method: "DELETE",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      return invokeApi(requestObj);
}

export const AddExperiences=async (data)=>{
    let requestObj = {
        path: `/api/experience/add_experience`,
        method: "POST",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      requestObj["postData"] = data;
      return invokeApi(requestObj);
}
export const DetailExperience=async (id)=>{
    let requestObj = {
        path: `/api/experience/detail_experience/${id}`,
        method: "GET",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      return invokeApi(requestObj);
}

export const UpdateExperience=async (data,id)=>{
    let requestObj = {
        path: `/api/experience/edit_experience/${id}`,
        method: "PUT",
        headers: {
          "x-sh-auth": localStorage.getItem("token")
        }
      };
      requestObj["postData"] = data;
      return invokeApi(requestObj);
}