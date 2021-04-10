import { invokeApi } from "../../bl_libs/invokeApi";

export const AdminLogin =async data => {
    let requestObj = {
      path: "/api/admin/signin",
      method: "POST",
      headers: {
        "x-sh-auth": localStorage.getItem("token")
      }
    };
    requestObj["postData"] = data;
  
    return invokeApi(requestObj);
  };